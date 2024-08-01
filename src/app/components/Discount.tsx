"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function Discount() {
    const refDiscount:any = useRef(null)
    useEffect(() => {
        let isScrolling:any;
        const handlerScroll = () => {
            refDiscount.current.style.right = "-100rem"
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                refDiscount.current.style.right = "0.625rem"
            }, 200);
        }
        window.addEventListener('scroll', handlerScroll);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
        };
    },[])
    return (
        <Image ref={refDiscount} src="/sale-colorful.gif" alt="sale" width={5000} height={5000} className="bg-transparent fixed transition-all right-2.5 top-3/4 z-50 icon-shadow w-12 sm:w-14 lg:w-16" />
    )
}