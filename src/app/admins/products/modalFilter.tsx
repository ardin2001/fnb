'use client'
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import WrapperModal from "@/app/wrapper/WrapperModal";
export default function ModalFilter({ backRef }: any) {
    const searchParams = useSearchParams()
    const [category, setCategory]: any = useState(searchParams.get('category') || "")
    const [sort, setSort]: any = useState(searchParams.get('sort') || "")
    const [order, setOrder]: any = useState(searchParams.get('order') || "")
    const pathname = usePathname()
    const createQueryString = useCallback(
        ({ sort, order, category }: any) => {
            const params = new URLSearchParams(searchParams.toString())
            Object.entries({ sort, order, category }).forEach(([key, value]) => {
                if (value) {
                    params.set(key, value)
                } else {
                    params.delete(key)
                }
            })

            return params.toString()
        },
        [searchParams]
    )

    const HandlerClearFilter = () => {
        setCategory("")
        setSort("")
        setOrder("")
    }

    return (
        <WrapperModal backRef={backRef} type="modalBox">
            <div className="bg-white shadow-basic fixed z-50 inset-x-5x sm:inset-x-1/4 md:inset-x-1/3 lg:inset-x-4/10 top-1/2 -translate-y-1/2 px-2.5 sm:px-3 lg:px-4 py-2 lg:py-2.5">
                <div className="title flex items-center justify-between">
                    <h4 className="font-semibold text-lg text-secondary">Filter Category</h4>
                    <IoMdClose className="text-xl text-secondary font-bold cursor-pointer" onClick={() => backRef.current.style.display = "none"} />
                </div>
                <hr className="border-t-2 border-gray-950 mb-0.5" />
                <div className="sort flex items-center justify-between gap-0.5 mb-0.5 sm:gap-1 lg:gap-2 xl:gap-3">
                    <label htmlFor="sort" className="text-gray-800 text-sm flex-1">Category By:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="flex-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"snack"}>Snack</option>
                        <option value={"food"}>Food</option>
                        <option value={"drink"}>Drink</option>
                        <option value={"steak"}>Steak</option>
                    </select>
                </div>

                <div className="sort flex items-center justify-between mb-0.5 gap-0.5 sm:gap-1 lg:gap-1.5 xl:gap-3">
                    <label htmlFor="sort" className="flex-1 text-gray-800 text-sm">Sort By:</label>
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="flex-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"asc"}>Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                </div>

                <div className="order flex items-center justify-between mb-0.5 gap-0.5 sm:gap-1 lg:gap-1.5 xl:gap-3">
                    <label htmlFor="order" className="flex-1 text-gray-800 text-sm">Order By:</label>
                    <select value={order} onChange={(e) => setOrder(e.target.value)} className="flex-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"price"}>Price</option>
                        <option value={"sold"}>Sold</option>
                    </select>
                </div>
                <div className="bottom flex gap-2 sm:gap-2.5 mb-0.5 justify-between mt-1 sm:mt-1.5 lg:mt-2">
                    <button onClick={HandlerClearFilter} className="text-sm py-0.5 text-tertiary bg-gray-200 font-bold self-center rounded-md w-full text-center">Clear</button>
                    <Link href={
                        pathname + '?' + createQueryString({ sort: sort, order: order, category: category })
                    } className="text-sm py-0.5 bg-tertiary text-white font-bold self-center rounded-md w-full text-center">Filter</Link>
                </div>
            </div>
        </WrapperModal>
    )
}