"use client"
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import ModalProfile from "./modalProfile";

export default function TopBar({ classname, setOpen, title }: { classname: string, setOpen: any, title: string }) {
    const [profile, setProfile] = useState(false);
    const HandlerProfile = () => {
        setProfile((prev: any) => !prev)
    }
    return (
        <nav className={classname}>
            <IoMdMenu className="text-3xl sm:text-4xl text-primary lg:hidden" onClick={setOpen} />
            <h4 className="hidden text-xl font-semibold lg:text-2xl lg:block">{title}</h4>
            <div className="profile relative flex items-center gap-2 sm:gap-3 md:gap-4">
                <FaBell className="text-xl sm:text-2xl text-blue-400" />
                {profile && <ModalProfile />}
                <div className="avatar p-4 bg-blue-400 rounded-full" onClick={HandlerProfile}></div>
            </div>
        </nav>
    )
}