"use client"
import Link from "next/link"

export default function Sidebar({classname}:{classname : string}) {
    return (
        <aside className={classname}>
            <p><Link href="/admin/dashboard">Dashboard</Link></p>
            <p><Link href="/admin/products">Products</Link></p>
            <p><Link href="/admin/orders">Orders</Link></p>
        </aside>
    )
}