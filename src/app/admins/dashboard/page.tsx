"use client"
import Sidebar from "@/app/components/Admin/Sidebar";
import TopBar from "./TopBar";
import { SidebarContext } from "@/app/context/SidebarContext";
import { useContext } from "react";

export default function Dashboard() {
    const {open,setOpen}:any = useContext(SidebarContext)
    console.log(open)
    return (
        <main className="">
            <Sidebar classname="hidden" />
            <div className="content w-90/100 bg-slate-200 mx-auto flex flex-col gap-5">
                <TopBar classname="bg-slate-400 flex justify-between" setOpen={setOpen} />
                <aside className="bg-green-300">
                    <h1>Dashboard</h1>
                </aside>
            </div>
        </main>
    )
}