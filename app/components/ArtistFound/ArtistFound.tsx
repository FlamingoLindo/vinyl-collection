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
        <li className="list-row border-b border-[#56524c] hover:bg-white/40 transition-all duration-100">
            <Link
                href={`/search/artist/${props.id}`}
                className="contents"
            >
                <Image
                    className="size-20 rounded-box"
                    width={props.image.w}
                    height={props.image.h}
                    src={props.image.path}
                    alt={props.name}
                    loading="eager"
                />
                <div className="text-lg font-bold text-[#24211d]">{props.name}</div>
            </Link>
        </li>
    )
}