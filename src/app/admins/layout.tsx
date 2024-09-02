"use client"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import useStatus from "../hooks/useStatus"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Capitalize from "../function/Capitalize"
import storeAdmin from "../redux/admin/store"
import { Provider } from "react-redux"
import { useEffect } from "react"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: any) {
    const router = useRouter()
    const pathname = usePathname()
    const arrPathname = pathname.split("/")
    const title = Capitalize(arrPathname[2])
    const [open, setOpen]: any = useStatus()

    const HandlerMain = () => {
        if (open) {
            setOpen()
        }
    }

    return (
        <main className="flex bg-white">
            <Sidebar setOpen={() => setOpen((prev: any) => !prev)} classname={`${open ? "left-0 duration-500 shadow-furdamental" : "-left-80 duration-500 shadow-sidebar"} z-40 ease-in w-64 fixed h-screen px-6 pt-4 pb-20 lg:pb-6 flex flex-col justify-between bg-white overflow-y-auto lg:w-80 lg:sticky`} />
            <div className={`${open ? "duration-500 opacity-30" : null} bg-gray-100 w-full px-5 py-3 sm:px-7 sm:py-4 md:px-8 flex flex-col gap-2 sm:gap-2.5 lg:gap-3 lg:opacity-100`} onClick={HandlerMain}>
                <TopBar classname="flex justify-between items-center" setOpen={() => setOpen((prev: any) => !prev)} title={title} />
                <Provider store={storeAdmin}>
                    {children}
                </Provider>
            </div>
        </main>
    )
}