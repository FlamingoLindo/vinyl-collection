import Image from "next/image"

export interface IVinyl {
    id: number;
    selected?: boolean;
    onToggle?: () => void;

    image: {
        path: string;
        h: number;
        w: number;
    };

    tittle: string;
    country: string;
    launchDate: string;
    actions?: React.ReactNode;
}

export function Vinyl(props: IVinyl) {

    return (
        <div className="relative">
            {props.actions && (
                <div
                    className="absolute inset-x-0 top-0 flex justify-between px-2 pt-2 z-40"
                    onClick={(e) => e.stopPropagation()}
                >
                    {props.actions}
                </div>
            )}
            <div
                className={props.selected ? "aura aura-xl duration-2000" : ""}
                onClick={props.onToggle}
            >
                <div className="hover-3d">
                    {/* content */}
                    <div className="card bg-gray-500 w-60 shadow-sm">
                        <figure>
                            <Image className="size-20 rounded-box"
                                width={props.image.w}
                                height={props.image.h}
                                src={props.image.path}
                                alt={props.tittle}
                                loading="eager"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{props.tittle}</h2>
                            <p>{props.country} - {props.launchDate}</p>
                        </div>
                    </div>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}