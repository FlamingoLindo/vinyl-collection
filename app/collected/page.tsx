'use client'

import Link from "next/link";
import { IVinyl, Vinyl } from "../components/Vinyl/Vinyl";
import { useState } from "react";

export default function Collected() {
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
    const [activeVinyl, setActiveVinyl] = useState<IVinyl | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleVinyl = (id: number) => {
        setSelectedVinyls((prev) =>
            prev.includes(id)
                ? prev.filter((v) => v !== id)
                : [...prev, id]
        );
    };

    const handleVinylClick = (vinyl: IVinyl) => {
        setActiveVinyl(vinyl);
        toggleVinyl(vinyl.id);
        setDrawerOpen(true);
    };

    return (
        <>
            <div className="breadcrumbs text-xl p-5">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>Collected</li>
                </ul>
            </div>

            <div className="drawer drawer-end">
                <input
                    id="my-drawer-5"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={drawerOpen}
                    onChange={(e) => setDrawerOpen(e.target.checked)}
                />
                <div className="drawer-content">
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
                                onToggle={() => handleVinylClick(vinyl)}
                            />
                        ))}
                    </div>
                </div>

                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-5"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                        onClick={() => setDrawerOpen(false)}
                    ></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {activeVinyl ? (
                            <>
                                <li><span className="font-bold text-lg">{activeVinyl.tittle}</span></li>
                                <li><span>Country: {activeVinyl.country}</span></li>
                                <li><span>Release: {activeVinyl.launchDate}</span></li>
                            </>
                        ) : (
                            <li><a>No vinyl selected</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}