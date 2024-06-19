"use client";
import UseStatus from "../hooks/UseStatus";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [status, setStatus]: any = UseStatus();

    return (
        <div className="bg-white grid py-2.5 md:grid-flow-col md:grid-cols-3 md:items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36 mx-auto drop-shadow-low sticky top-0 z-50">
            <div className="grid grid-flow-col justify-between items-center md:col-span-2">
                <h3 className="text-secondary text-xl font-bold">E-voting App</h3>
                <IoMdMenu className="text-2xl sm:text-3xl text-secondary md:hidden" onClick={setStatus} />
            </div>
            <div className={`${status ? "block" : "hidden"} md:block url text-center`}>
                <ul className="grid gap-3 pt-2 pb-3 md:pt-0 md:pb-0 md:grid-flow-col md:justify-between">
                    <li className="font-normal text-sm hover:font-semibold">Home</li>
                    <li className="font-normal text-sm hover:font-semibold">About</li>
                    <li className="font-normal text-sm hover:font-semibold">Info</li>
                    <li className="font-normal text-sm hover:font-semibold">Contact</li>
                </ul>
            </div>
        </div>
    );
}
