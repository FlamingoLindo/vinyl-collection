'use client'

import Link from "next/link";
import { IVinyl, Vinyl } from "../components/Vinyl/Vinyl";
import { useEffect, useRef, useState } from "react";
import { mapVinyl } from "../lib/mappers";

export default function Wishlist() {
    const [vinyls, setVinyls] = useState<IVinyl[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVinyls, setSelectedVinyls] = useState<string[]>([]);
    const [modalVinyl, setModalVinyl] = useState<IVinyl | null>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const toggleVinyl = (id: string) => {
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

    useEffect(() => {
        fetch("/api/wishlist")
            .then((res) => res.json())
            .then((data) => setVinyls(data.wishVinyls.map(mapVinyl)))
            .finally(() => setLoading(false));
    }, []);

    const removeVinyls = async (ids: string[]) => {
        const res = await fetch(`/api/delete/${ids.join(',')}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            console.error("Failed to delete vinyls");
            return;
        }

        setVinyls((prev) => prev.filter((v) => !ids.includes(v.id)));
        setSelectedVinyls((prev) => prev.filter((id) => !ids.includes(id)));
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

            {loading ? (
                <div className="flex justify-center p-10">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
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
                                                onClick={() => removeVinyls([vinyl.id])}
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
                            <h3 className="font-bold text-lg text-center">{modalVinyl?.title}</h3>

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
                                        onClick={() => modalRef.current?.close()}
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
            )}
        </>
    )
}