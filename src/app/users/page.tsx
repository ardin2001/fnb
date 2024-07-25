"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
export default function Home(){
    const products = useSelector((state: any) => state.products)
    console.log(products)
    return(
        <main>
            <h1>User Page</h1>
            <Link href="/users/products/1" className="text-white bg-secondary py-0.5 px-5 mt-5">cek</Link>
        </main>
    )
}