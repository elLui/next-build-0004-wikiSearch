import Link from 'next/link'
import Search from "@/components/Search";

export default function Navbar() {


    return (
        <nav className="bg-gradient-to-b from-sky-900 to-sky-400 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/">
                    elluis.codes
                </Link>
            </h1>

            <Search />
        </nav>
    )
}