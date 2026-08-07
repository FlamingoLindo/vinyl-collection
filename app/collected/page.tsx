'use client'

import Link from "next/link";
import { IVinyl, Vinyl } from "../components/Vinyl/Vinyl";
import { useEffect, useState } from "react";
import { mapVinyl } from "../lib/mappers";

export default function Collected() {
    const [vinyls, setVinyls] = useState<IVinyl[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVinyls, setSelectedVinyls] = useState<string[]>([]);
    const [activeVinyl, setActiveVinyl] = useState<IVinyl | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [vinylDetails, setVinylDetails] = useState<{ collectDate: string; price: number } | null>(null);

    const toggleVinyl = (id: string) => {
        setSelectedVinyls((prev) =>
            prev.includes(id)
                ? prev.filter((v) => v !== id)
                : [...prev, id]
        );
    };

    const handleVinylClick = (vinyl: IVinyl) => {
        setActiveVinyl(vinyl);
        setVinylDetails(null);
        toggleVinyl(vinyl.id);
        setDrawerOpen(true);
        getDetails(vinyl.id);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setSelectedVinyls([]);
        setActiveVinyl(null);
        setVinylDetails(null);
    };

    useEffect(() => {
        fetch("/api/collected")
            .then((res) => res.json())
            .then((data) => setVinyls(data.collectedVinyls.map(mapVinyl)))
            .finally(() => setLoading(false));
    }, []);

    const getDetails = async (id: string) => {
        const res = await fetch(`/api/collected/${id}`);

        if (!res.ok) {
            console.error("Failed to load details");
            setVinylDetails(null);
            return;
        }

        const data = await res.json();
        setVinylDetails(data.collectedVinyl);
    };

    return (
        <>
            <div className="breadcrumbs text-xl p-5">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li>Collected</li>
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

            {loading ? (
                <div className="flex justify-center p-10">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
                    <div className="drawer drawer-end">
                        <input
                            id="my-drawer-5"
                            type="checkbox"
                            className="drawer-toggle"
                            checked={drawerOpen}
                            onChange={(e) => {
                                if (!e.target.checked) {
                                    closeDrawer();
                                } else {
                                    setDrawerOpen(true);
                                }
                            }}
                        />
                        <div className="drawer-content">
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
                                        <li><span className="font-bold text-lg">{activeVinyl.title}</span></li>
                                        <li><span>Country: {activeVinyl.country}</span></li>
                                        <li><span>Release: {activeVinyl.launchDate}</span></li>
                                        {vinylDetails && (
                                            <>
                                                <li><span>Collected: {vinylDetails.collectDate}</span></li>
                                                <li><span>Price: {vinylDetails.price}</span></li>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <li><a>No vinyl selected</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}