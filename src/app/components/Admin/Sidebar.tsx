"use client"
import Link from "next/link"
import Image from "next/image"
import { RxDashboard } from "react-icons/rx";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

export default function Sidebar({ classname }: { classname: string }) {
    return (
        <aside className={classname}>
            <div className="grid gap-16">
                <div className="head-sidebar flex items-center">
                    <div className="icon w-10"><Image src="/medsos/twitter.png" alt="logo" width={1000} height={1000} /></div>
                    <h3 className="text-secondary text-2xl font-bold">Soul Cafe</h3>
                </div>
                <div className="menu grid gap-6 pl-4">
                    <Link href="/admin/dashboard"><p className="flex gap-2 text-secondary font-semibold text-lg items-center"><RxDashboard />Dashboard</p></Link>
                    <Link href="/admin/products"><p className="flex gap-2 text-secondary font-semibold text-lg items-center"><RiAlignItemLeftLine />Products</p></Link>
                    <Link href="/admin/users"><p className="flex gap-2 text-secondary font-semibold text-lg items-center"><FaRegUser />Users</p></Link>
                    <Link href="/admin/orders"><p className="flex gap-2 text-secondary font-semibold text-lg items-center"><RiMoneyDollarBoxLine />Orders</p></Link>
                    <Link href="/admin/transactions"><p className="flex gap-2 text-secondary font-semibold text-lg items-center"><AiOutlineTransaction />Transactions</p></Link>

                </div>
            </div>
            <button className="logout font-semibold bg-secondary text-white rounded-md py-2 text-center">Logout</button>
        </aside>
    )
}