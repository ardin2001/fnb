import { FaRegUser } from "react-icons/fa";
import { useSession,signOut } from "next-auth/react"
import Link from "next/link";
export default function ModalProfile() {
    const { data }: any = useSession();
    return (
        <div className="bg-white shadow-basic absolute z-50 -translate-x-1/2 -left-12 top-2 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-2">
            <div className="header-profile mb-0.5 sm:mb-1 flex gap-1 sm:gap-1.5 items-center border-b-2 border-gray-950 pb--0.5 lg:pb-1">
                <FaRegUser className="text-2xl sm:text-2xl text-primary" />
                <div className="user-info">
                    <p className="font-semibold text-sm">{data?.user?.fullname}</p>
                    <p className="font-medium text-xs text-gray-500">{data?.user?.email}</p>
                </div>
            </div>
            <div className="menu-profile grid gap-0.5 sm:gap-1">
                <Link href={"/admins/profile"} className="text-start px-1 sm:px-1 lg:px-1.5font-medium text-sm text-gray-600 cursor-pointer hover:bg-secondary hover:text-white rounded-sm">Profile</Link>
                <button onClick={() => signOut()} className="text-start px-1 sm:px-1 lg:px-1.5font-medium text-sm text-gray-600 cursor-pointer hover:bg-secondary hover:text-white rounded-sm">Logout</button>
            </div>
        </div>
    )
}