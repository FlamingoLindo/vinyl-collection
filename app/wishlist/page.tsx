'use client'

import Link from "next/link";
import { IVinyl, Vinyl } from "../components/Vinyl/Vinyl";
import { useRef, useState } from "react";

export default function Wishlist() {
    const vinyls: IVinyl[] = [
        {
            id: 0,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        },
        {
            id: 1,
            image: {
                path: "https://i.discogs.com/thVjQmReKSGn8y_lum8VHcPQYnJAZ9lJL9jPpzpKqp8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg3/MzYtMTY4NDcxMTU2/NS01MDg0LmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Creeping Death",
            country: "US",
            launchDate: "1984",
        },
        {
            id: 2,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        },
        {
            id: 3,
            image: {
                path: "https://i.discogs.com/thVjQmReKSGn8y_lum8VHcPQYnJAZ9lJL9jPpzpKqp8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg3/MzYtMTY4NDcxMTU2/NS01MDg0LmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Creeping Death",
            country: "US",
            launchDate: "1984",
        },
        {
            id: 4,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        },
        {
            id: 5,
            image: {
                path: "https://i.discogs.com/thVjQmReKSGn8y_lum8VHcPQYnJAZ9lJL9jPpzpKqp8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg3/MzYtMTY4NDcxMTU2/NS01MDg0LmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Creeping Death",
            country: "US",
            launchDate: "1984",
        },
        {
            id: 6,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        },
        {
            id: 7,
            image: {
                path: "https://i.discogs.com/thVjQmReKSGn8y_lum8VHcPQYnJAZ9lJL9jPpzpKqp8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg3/MzYtMTY4NDcxMTU2/NS01MDg0LmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Creeping Death",
            country: "US",
            launchDate: "1984",
        },
        {
            id: 8,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        },
        {
            id: 9,
            image: {
                path: "https://i.discogs.com/thVjQmReKSGn8y_lum8VHcPQYnJAZ9lJL9jPpzpKqp8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDg3/MzYtMTY4NDcxMTU2/NS01MDg0LmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Creeping Death",
            country: "US",
            launchDate: "1984",
        },
        {
            id: 10,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983",
        }
    ]
    const [selectedVinyls, setSelectedVinyls] = useState<number[]>([]);
    const [modalVinyl, setModalVinyl] = useState<IVinyl | null>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const toggleVinyl = (id: number) => {
        setSelectedVinyls((prev) =>
            prev.includes(id)
                ? prev.filter((v) => v !== id)
                : [...prev, id]
        );
    };

    const openCollectedModal = (vinyl: IVinyl) => {
        setModalVinyl(vinyl);
        modalRef.current?.showModal();
    };

    return (
        <>
            <div className="breadcrumbs text-xl p-5">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>Wishlist</li>
                </ul>
            </div>

            <div className="p-5">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {vinyls.map((vinyl) => (
                    <Vinyl
                        key={vinyl.id}
                        {...vinyl}
                        selected={selectedVinyls.includes(vinyl.id)}
                        onToggle={() => toggleVinyl(vinyl.id)}
                        actions={
                            selectedVinyls.includes(vinyl.id) && (
                                <>
                                    <button
                                        className="btn btn-error btn-sm cursor-pointer"
                                        onClick={() => console.log(vinyl.id)}
                                    >
                                        Remove
                                    </button>

                                    <button
                                        className="btn btn-success btn-sm cursor-pointer"
                                        onClick={() => openCollectedModal(vinyl)}
                                    >
                                        Collected
                                    </button>
                                </>
                            )
                        }
                    />
                ))}
            </div>

            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">{modalVinyl?.tittle}</h3>

                    <div className="flex flex-col items-center gap-4 mt-4">
                        <fieldset className="fieldset w-full max-w-xs">
                            <legend className="fieldset-legend">Date</legend>
                            <input type="date" className="input w-full" />
                        </fieldset>

                        <fieldset className="fieldset w-full max-w-xs">
                            <legend className="fieldset-legend">Price</legend>
                            <input type="number" placeholder="Type here" className="input w-full" />
                        </fieldset>

                        <div className="flex gap-2">
                            <button
                                className="btn btn-error btn-sm cursor-pointer"
                                onClick={() => console.log()}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-success btn-sm cursor-pointer"
                                onClick={() => console.log()}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}