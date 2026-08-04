'use client'
import { IVinyl, Vinyl } from "@/app/components/Vinyl/Vinyl";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function FindArtist() {
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
            launchDate: "1983"
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
            launchDate: "1984"
        }, {
            id: 2,
            image: {
                path: "https://i.discogs.com/J4F2IRdoQ0rZ4Rc4Nm2qazzhBQnENMbWZMBdi9FlLW8/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NDAx/MzItMTQyOTk5MDE2/My04MzYxLmpwZWc.jpeg",
                w: 150,
                h: 150
            },
            tittle: "Kill 'Em All",
            country: "US",
            launchDate: "1983"
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
            launchDate: "1984"
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
            launchDate: "1983"
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
            launchDate: "1984"
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
            launchDate: "1983"
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
            launchDate: "1984"
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
            launchDate: "1983"
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
            launchDate: "1984"
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
            launchDate: "1983"
        }
    ]
    const [selectedVinyls, setSelectedVinyls] = useState<number[]>([]);
    const toggleVinyl = (id: number) => {
        setSelectedVinyls((prev) =>
            prev.includes(id)
                ? prev.filter((v) => v !== id)
                : [...prev, id]
        );
    };
    const router = useRouter()

    return (
        <>
            <div className="breadcrumbs text-xl p-5">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/search"}>Search</Link></li>
                    <li>Metallica</li>
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
                    />
                ))}
            </div>

            {selectedVinyls.length > 0 && (
                <div className="fixed bottom-4 inset-x-0 flex justify-center z-10">
                    <button className="btn btn-success flex items-center justify-center w-64 text-2xl" onClick={() => router.push('/wishlist')}>
                        Wish ({selectedVinyls.length})
                    </button>
                </div>
            )}

        </>
    )
}