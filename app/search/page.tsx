import Link from "next/link";
import { ArtistFound, IArtistFound } from "../components/ArtistFound/ArtistFound";

export default function Find() {

    const artists: IArtistFound[] = [
        {
            id: 0,
            name: "Metallica",
            image: {
                path: "https://i.discogs.com/hDRTa2gbOic6JYKtjzTydCIKPaXHYqNzSnMpLZzNPgc/rs:fit/g:sm/q:90/h:393/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE4ODM5/LTE1MDk0MTkyNjAt/MjU0MC5qcGVn.jpeg",
                w: 300,
                h: 393
            }
        },
        {
            id: 1,
            name: "Queen",
            image: {
                path: "https://i.discogs.com/XztqBh9zPrHpafbPSTRKrSwvTTVZ1JzOhy0I-tyTWo0/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTgxMDEz/LTEyMTE5Nzg2NTku/anBlZw.jpeg",
                w: 595,
                h: 600
            }
        },
        {
            id: 2,
            name: "The Who",
            image: {
                path: "https://i.discogs.com/cPeOC8iVBQRxRSqbogNxhEcH5oQ9G-pMkdL2UTKk4Jc/rs:fit/g:sm/q:90/h:410/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE5Njc2/Ni0xNTk1OTY4MTMx/LTIyMjEuanBlZw.jpeg",
                w: 595,
                h: 410
            }
        },
    ]

    return (
        <>
            <div className="breadcrumbs text-xl p-5 text-black">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>Search</li>
                </ul>
            </div>

            <div className="flex items-center justify-center p-2 ">
                <fieldset className="fieldset">
                    <label className="label text-2xl text-black" htmlFor="artist">Artist</label>
                    <input type="text" id="artist" className="text-2xl input focus:outline-none focus:ring-0 border-black bg-gray-100" placeholder="Metallica" />
                </fieldset>
            </div>

            {artists.length > 0 && (
                <ul className="list bg-base-100 rounded-box shadow-md max-w-3xl mx-auto">
                    <li className="p-4 pb-2 text-xl tracking-wide">Artists found</li>
                    {artists.map((artist) => (
                        <ArtistFound key={artist.id} {...artist} />
                    ))}
                </ul>
            )}
        </>
    )
}