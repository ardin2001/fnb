"use client"
import Link from "next/link"
import Image from "next/image"
import { RxDashboard } from "react-icons/rx";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Sidebar({ classname, setOpen }: { classname: string, setOpen :any }) {
    const pathname = usePathname();
    return (
        <aside className={`${classname}`}>
            <div className="grid gap-16">
                <div className="head-sidebar flex items-center">
                    <div className="icon w-10"><Image src="/medsos/twitter.png" alt="logo" width={1000} height={1000} /></div>
                    <h3 className="text-secondary text-2xl font-bold">Soul Cafe</h3>
                </div>
                <div className="menu grid">
                    <Link onClick={setOpen} href="/admins/dashboard" className={`${pathname === "/admins/dashboard" ? "bg-medium border-l-4 border-secondary" : null} hover:border-l-4 border-secondary`}><p className="pl-4 py-2.5 flex gap-2 text-secondary font-semibold text-lg items-center"><RxDashboard />Dashboard</p></Link>
                    <Link onClick={setOpen} href="/admins/products?page=1" className={`${pathname === "/admins/products" ? "bg-medium border-l-4 border-secondary" : null} hover:border-l-4 border-secondary`}><p className="pl-4 py-2.5 flex gap-2 text-secondary font-semibold text-lg items-center"><RiAlignItemLeftLine />Products</p></Link>
                    <Link onClick={setOpen} href="/admins/users?page=1" className={`${pathname === "/admins/users" ? "bg-medium border-l-4 border-secondary" : null} hover:border-l-4 border-secondary`}><p className="pl-4 py-2.5 flex gap-2 text-secondary font-semibold text-lg items-center"><FaRegUser />Users</p></Link>
                    <Link onClick={setOpen} href="/admins/orders" className={`${pathname === "/admins/orders" ? "bg-medium border-l-4 border-secondary" : null} hover:border-l-4 border-secondary`}><p className="pl-4 py-2.5 flex gap-2 text-secondary font-semibold text-lg items-center"><RiMoneyDollarBoxLine />Orders</p></Link>
                    <Link onClick={setOpen} href="/admins/transactions" className={`${pathname === "/admins/transactions" ? "bg-medium border-l-4 border-secondary" : null} hover:border-l-4 border-secondary`}><p className="pl-4 py-2.5 flex gap-2 text-secondary font-semibold text-lg items-center"><AiOutlineTransaction />Transactions</p></Link>
                </div>
            </div>
            <button onClick={() => signOut()} className="logout font-semibold bg-secondary text-white rounded-md py-2 text-center">Logout</button>
        </aside>
    )
}