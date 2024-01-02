import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <h1 className="text-2xl font-bold sm:text-3xl"><span className="text-primary">My</span>Socials<span className="text-primary">.</span></h1>
        </Link>
    )
}