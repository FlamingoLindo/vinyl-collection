import { IVinyl } from "../components/Vinyl/Vinyl";

interface VinylDto {
    id: string;
    title: string;
    country: string;
    artist: string;
    launchDate: string;
    image: string;
}

function extractDimensions(url: string): { w: number; h: number } {
    const hMatch = url.match(/\/h:(\d+)\//);
    const wMatch = url.match(/\/w:(\d+)\//);

    return {
        h: hMatch ? Number(hMatch[1]) : 150,
        w: wMatch ? Number(wMatch[1]) : 150,
    };
}

export function mapVinyl(v: VinylDto): IVinyl {
    const { w, h } = extractDimensions(v.image);

    return {
        id: v.id,
        title: v.title,
        country: v.country,
        launchDate: v.launchDate,
        image: {
            path: v.image,
            w,
            h,
        },
    };
}