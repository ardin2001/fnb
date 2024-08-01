"use client";
import useStatus from "../hooks/useStatus";
import { IoMdMenu } from "react-icons/io";
import useWrapperSession from "../hooks/useSession";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useEffect, useRef } from "react";

export default function NavbarUser() {
    const [status, setStatus]: any = useStatus();
    const session = useWrapperSession();
    const refHeader:any = useRef(null);

    useEffect(() => {
        const handlerScroll = () => {
            const header: any = document.querySelector('header');
            if (window.scrollY > 1) {
                // refHeader.current.style.borderBottomColor = 'red';
                // refHeader.current.style.borderBottomWidth = '5px';
                // refHeader.current.style.borderBottomStyle = 'solid';
                // refHeader.current.style.border = '1px solid red';
                refHeader.current.style.boxShadow = '0 0 2px 4px rgba(0, 0, 0,0.15)';
            } else {
                refHeader.current.style.boxShadow = 'none';
            }
        }
        document.addEventListener("scroll", handlerScroll)
        return () => {
            document.removeEventListener('scroll', handlerScroll);
        };
    }, []);

    return (
        <header ref={refHeader} className="bg-white grid py-2.5 sm:py-3  md:grid-flow-col md:grid-cols-3 md:items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto sticky top-0 z-50">
            <div className="grid grid-flow-col justify-between items-center md:col-span-2">
                <h3 className="text-primary text-xl font-bold">Aseloley App</h3>
                <IoMdMenu className="text-2xl sm:text-3xl text-primary md:hidden" onClick={setStatus} />
            </div>
            <div className={`${status ? "flex" : "hidden"} gap-0 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 md:flex flex-col md:flex-row justify-between items-center`}>
                <ul className="grid w-full py-4 md:py-0 md:grid-flow-col gap-2.5 md:justify-between">
                    <li className="font-normal text-center md:text-start lg:font-medium text-sm hover:font-semibold hover:text-primary md:hover:border-b-2 hover:border-b-secondary cursor-pointer">Home</li>
                    <li className="font-normal text-center md:text-start lg:font-medium text-sm hover:font-semibold hover:text-primary md:hover:border-b-2 hover:border-b-secondary cursor-pointer">About</li>
                    <li className="font-normal text-center md:text-start lg:font-medium text-sm hover:font-semibold hover:text-primary md:hover:border-b-2 hover:border-b-secondary cursor-pointer">Info</li>
                    <li className="font-normal text-center md:text-start lg:font-medium text-sm hover:font-semibold hover:text-primary md:hover:border-b-2 hover:border-b-secondary cursor-pointer">Contact</li>
                </ul>
                <div className="button flex gap-4 sm:gap-1">
                    <button className="text-sm text-white p-2 rounded-all bg-secondary md:rounded-none md:p-0 md:bg-white md:text-secondary sm:text-lg xl:text-xl">{session ? <FaRegUser /> : null}</button>
                    <button className="text-sm text-white p-2 rounded-all bg-secondary md:rounded-none md:p-0 md:bg-white md:text-secondary sm:text-lg xl:text-xl">{session ? <PiShoppingCartSimpleBold /> : null}</button>
                </div>
            </div>
        </header>
    );
}
