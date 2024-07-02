"use client"
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

export default function TopBar({classname,setOpen} : {classname : string,setOpen:any}) {
    return (
        <nav className={classname}>
            <IoMdMenu className="text-2xl sm:text-3xl text-primary md:hidden" onClick={setOpen} />
            <div className="profile flex gap-5">
                <FaBell className="text-2xl sm:text-3xl text-primary"/>
                <div className="avatar p-4 bg-blue-400"></div>
            </div>
        </nav>
    )
}