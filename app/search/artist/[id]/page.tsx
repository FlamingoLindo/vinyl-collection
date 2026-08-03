import Link from "next/link";

export default function FindArtist() {
    return (
        <>
            <div className="breadcrumbs text-xl p-5 text-black">
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/search"}>Search</Link></li>
                    <li>Metallica</li>
                </ul>
            </div>
        </>
    )
}