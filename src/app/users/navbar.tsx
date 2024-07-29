"use client";
import useStatus from "../hooks/useStatus";
import { IoMdMenu } from "react-icons/io";
import hookSession from "../hooks/useSession";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function NavbarUser() {
    const [status, setStatus]: any = useStatus();
    const session = hookSession();
    console.log(session)

    return (
        <div className="bg-white grid py-2.5 sm:py-3 md:py-3.5 md:grid-flow-col md:grid-cols-3 md:items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto sticky top-0 z-50">
            <div className="grid grid-flow-col justify-between items-center md:col-span-2">
                <h3 className="text-primary text-xl font-bold">Aseloley App</h3>
                <IoMdMenu className="text-2xl sm:text-3xl text-primary md:hidden" onClick={setStatus} />
            </div>
            <div className={`${status ? "flex" : "hidden"} gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 md:flex justify-between items-center`}>
                <ul className="grid w-full py-4 md:py-0 md:grid-flow-col md:justify-between">
                    <li className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary hover:border-b-2 hover:border-b-secondary cursor-pointer">Home</li>
                    <li className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary hover:border-b-2 hover:border-b-secondary cursor-pointer">About</li>
                    <li className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary hover:border-b-2 hover:border-b-secondary cursor-pointer">Info</li>
                    <li className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary hover:border-b-2 hover:border-b-secondary cursor-pointer">Contact</li>
                </ul>
                <div className="button flex gap-0.5 sm:gap-1 ">
                    <button className="font-semibold p-2 text-sm bg-tertiary text-white rounded-all">{session ? <FaRegUser /> : null}</button>
                    <button className="font-semibold p-2 text-sm bg-tertiary text-white rounded-all">{session ? <PiShoppingCartSimpleBold /> : null}</button>
                </div>
            </div>
        </div>
    );
}
