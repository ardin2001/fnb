"use client"
import Sidebar from "../components/Admin/Sidebar"
import TopBar from "../components/Admin/TopBar"
import UseStatus from "../hooks/UseStatus"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Capitalize from "../function/Capitalize"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: any) {
    const router = useRouter()
    const pathname = usePathname()
    const arrPathname = pathname.split("/")
    const title = Capitalize(arrPathname[2])
    const [open, setOpen]: any = UseStatus()
    const HandlerMain = () => {
        if (open) {
            setOpen()
        }
    }

    return (
        <main className="flex bg-white">
            <Sidebar classname={`${open ? "left-0 ease-in duration-500 z-50" : "-left-80 ease-out duration-500"} w-64 fixed h-screen bg-red-400 overflow-y-auto lg:w-80 lg:sticky`} />
            <div className={`${open ? "duration-500 blur-medium" : null} content w-full px-5 sm:px-7 md:px-8 lg:px-0 flex flex-col gap-5`} onClick={HandlerMain}>
                <TopBar classname="bg-slate-400 flex justify-between" setOpen={() => setOpen((prev: any) => !prev)} title={title} />
                {children}
                {/* <div className={`${open ? "w-48 ease-in-out duration-500" : "hidden ease-in-out duration-700"} w-0 h-10 bg-red-500`}>coba</div> */}
            </div>
        </main>
    )
}