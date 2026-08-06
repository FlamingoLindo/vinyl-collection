import withPrisma from '@/app/lib/prisma'
import { PrismaClient } from '@/generated/prisma/client'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { SearchArtistResponse } from '../types/searchArtist'
import { ArtistProfile, Type } from '../types/artistProfile'
import { ArtistReleases, ReleaseType, VinylData } from '../types/artistReleases'

type ContextWithPrisma = {
  Variables: {
    prisma: PrismaClient
  }
}

const app = new Hono<ContextWithPrisma>().basePath('/api')

app.get('/wishlist', withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const wishVinyls = await prisma.vinyls.findMany({
    where: {
      status: "WISH"
    },
    select: {
      id: true,
      title: true,
      country: true,
      artist: true,
      launchDate: true,
      image: true,
    }
  });
  return c.json({ wishVinyls })
})

app.get('/collected', withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const collectedVinyls = await prisma.vinyls.findMany({
    where: {
      status: "COLLECTED"
    },
    select: {
      id: true,
      title: true,
      country: true,
      artist: true,
      launchDate: true,
      image: true,
    }
  });
  return c.json({ collectedVinyls })
})

app.get('/collected/:id', withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const id = c.req.param('id');
  const collectedVinyl = await prisma.vinyls.findMany({
    where: {
      status: "COLLECTED",
      id: id
    },
    select: {
      collectDate: true,
      price: true
    }
  });
  return c.json({ collectedVinyl })
})

app.post('/wish', withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json()

  const vinyls = await prisma.vinyls.create({
    data: {
      title: body.title,
      country: body.country,
      artist: body.artist,
      launchDate: body.launchDate,
      image: body.image,
      status: "WISH",
    }
  })
  return c.json({ vinyls }, 201)
})

app.patch('/collect/:ids', withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const idsParam = c.req.param('ids')

  if (!idsParam) {
    return c.json({ error: 'Missing ids parameter' }, 400)
  }

  const ids = idsParam.split(',').map(id => id.trim())

  await prisma.vinyls.updateMany({
    where: {
      id: { in: ids }
    },
    data: {
      status: "COLLECTED",
    }
  })
  return c.json({})
})

app.delete('/delete/:ids', withPrisma, async (c) => {
  const prisma = c.get("prisma")
  const idsParam = c.req.param('ids')

  if (!idsParam) {
    return c.json({ error: 'Missing ids parameter' }, 400)
  }

  const ids = idsParam.split(',').map(id => id.trim())

  await prisma.vinyls.deleteMany({
    where: {
      id: { in: ids }
    }
  })

  return c.json({})
})

app.get('/search-artist/:name', async (c) => {
  const name = c.req.param('name');

  const discogsRes = await fetch(`https://api.discogs.com/database/search?q=${name}&type=artist`);

  if (!discogsRes.ok) {
    return c.json({ error: 'Discogs request failed', status: discogsRes.status }, 502);
  }

  const data: SearchArtistResponse = await discogsRes.json();

  const resources = data.results.map(artist => artist.resource_url);

  const artistProfiles: ArtistProfile[] = [];

  for (const resourceUrl of resources) {
    const profileRes = await fetch(resourceUrl);

    if (!profileRes.ok) {
      continue;
    }

    const profileData: ArtistProfile = await profileRes.json();
    artistProfiles.push(profileData);
  }

  const results = artistProfiles.map(profile => {
    const primaryImage = profile.images?.find(img => img.type === Type.Primary);

    return {
      name: profile.name,
      id: profile.id,
      primaryImageUrl: primaryImage?.uri ?? null,
    };
  });

  return c.json({ response: results });
});

const TARGET_COUNTRIES = new Set(['UK', 'US', 'Brazil']);

app.get('/get-vinyls/:id', async (c) => {
  const id = c.req.param('id');

  const discogsRes = await fetch(`https://api.discogs.com/artists/${id}/releases`);

  if (!discogsRes.ok) {
    return c.json({ error: 'Discogs request failed', status: discogsRes.status }, 502);
  }

  const data: ArtistReleases = await discogsRes.json();

  const masterIds = data.releases
    .filter(release => release.type === ReleaseType.Master)
    .map(release => release.id);

  const vinyls: { thumb: string; title: string; country: string; released: string }[] = [];

  for (const masterId of masterIds) {
    const vinylRes = await fetch(`https://api.discogs.com/masters/${masterId}/versions?format=Vinyl`);

    if (!vinylRes.ok) {
      continue;
    }

    const vinylData: VinylData = await vinylRes.json();

    const filtered = vinylData.versions
      .filter(version => TARGET_COUNTRIES.has(version.country))
      .map(version => ({
        thumb: version.thumb,
        title: version.title,
        country: version.country,
        released: version.released,
      }));

    vinyls.push(...filtered);
  }

  return c.json({ response: vinyls });
});

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
