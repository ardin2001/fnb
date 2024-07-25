"use client"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Dashboard() {
    const products = useSelector((state: any) => state.products)
    console.log(products)
    return (
        <aside className="">
            <h1>Dashboard</h1>
            <Link href="/admins/dashboard/detail" className="text-white bg-secondary py-0.5 px-5 mt-5">Detail</Link>
        </aside>
    )
}