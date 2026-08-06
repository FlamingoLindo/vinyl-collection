import Link from "next/link"
import { ComponentType, SVGProps } from "react"

export interface IHomeBtn {
    id: number,
    title: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    path: string
}

export function HomeBtn(props: IHomeBtn) {
    const Icon = props.icon
    return (
        <div>
            <Link href={`/${props.path}`}>
                <button
                    className="
                           btn-active flex flex-col items-center justify-center gap-3 w-52 h-52 rounded-2xl
                           bg-linear-to-br from-[#56524c] to-[#3b3935]
                           transition-all duration-200
                           hover:scale-125 cursor-pointer
                           "
                >
                    <Icon className="w-16 h-16 text-white/90" />
                    <span className="text-lg text-white font-semibold">
                        {props.title}
                    </span>
                </button>
            </Link>
        </div>
    )
}