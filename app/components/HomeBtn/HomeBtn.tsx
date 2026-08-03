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
                    className="btn flex flex-col items-center justify-center gap-3 w-52 h-52 rounded-3xl
                           bg-linear-to-br from-blue-500 to-blue-700
                           shadow-lg shadow-blue-900/30
                           border border-blue-400/40
                           transition-all duration-200
                           hover:scale-105 hover:shadow-xl hover:shadow-blue-900/40
                           active:scale-95"
                >
                    <Icon className="w-16 h-16 text-white/90" />
                    <span className="text-lg text-white font-semibold tracking-wide">
                        {props.title}
                    </span>
                </button>
            </Link>
        </div>
    )
}