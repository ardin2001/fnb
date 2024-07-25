import Link from "next/link"
export default function Home(){
    return(
        <main>
            <h1>User Page</h1>
            <Link href="/users/1" className="text-white bg-secondary py-0.5 px-5 mt-5">cek</Link>
        </main>
    )
}