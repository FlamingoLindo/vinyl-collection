import Image from "next/image"
import Link from "next/link"

export interface IArtistFound {
    id: number,
    name: string,
    image: {
        path: string,
        h: number,
        w: number
    }
}

export function ArtistFound(props: IArtistFound) {
    return (
        <Link href={`/search/artist/${props.id}`} className="flex items-center gap-4 p-4 w-full h-full hover:bg-base-200">

            <li className="list-row">
                <Image className="size-20 rounded-box"
                    width={props.image.w}
                    height={props.image.h}
                    src={props.image.path}
                    alt={props.name}
                    loading="eager"
                />
                <div className="text-lg font-bold">{props.name}</div>
            </li>
        </Link>

    )
}