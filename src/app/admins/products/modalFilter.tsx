'use client'
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function ModalFilter({ filterRef }: any) {
    const searchParams = useSearchParams()
    const [category, setCategory]: any = useState(searchParams.get('category') || "")
    const [sort, setSort]: any = useState(searchParams.get('sort') || "")
    const [order, setOrder]: any = useState(searchParams.get('order') || "")
    const pathname = usePathname()
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const HandlerClearFilter = () => {
        setCategory("")
        setSort("")
        setOrder("")
    }
    console.log("cek :", category, sort, order)
    return (
        <div ref={filterRef} className="bg-white shadow-basic absolute z-50 -translate-x-full top-0 -left-2 px-1 sm:px-1.5 lg:px-2 py-1 lg:py-1.5 w-56" style={{ display: "none" }}>
            <h4 className="font-semibold text-lg text-secondary text-center mb-0.5">Filter Category</h4>
            <hr className="border-t-2 border-gray-950 mb-0.5" />

            <div className="sort flex items-center justify-between">
                <label htmlFor="sort" className="text-gray-800 text-sm">Category By:</label>
                <div className="sort-right relative">
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="appearance-none row-start-1 col-start-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"snack"}>Snack</option>
                        <option value={"food"}>Food</option>
                        <option value={"drink"}>Drink</option>
                        <option value={"steak"}>Steak</option>
                    </select>
                    <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-1" />
                </div>
            </div>

            <div className="sort flex items-center justify-between">
                <label htmlFor="sort" className="text-gray-800 text-sm">Sort By:</label>
                <div className="sort-right relative">
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none row-start-1 col-start-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"asc"}>Asc</option>
                        <option value={"desc"}>Desc</option>
                    </select>
                    <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-1" />
                </div>
            </div>

            <div className="order flex items-center justify-between">
                <label htmlFor="order" className="text-gray-800 text-sm">Order By:</label>
                <div className="order-right relative">
                    <select value={order} onChange={(e) => setOrder(e.target.value)} className="appearance-none row-start-1 col-start-1 bg-slate-50 text-gray-800 text-sm dark:bg-slate-800 pr-1 sm:pr-1.5 xl:pr-10 pl-1 sm:pl-1.5 xl:pl-2 outline-none">
                        <option value="">None</option>
                        <option value={"price"}>Price</option>
                        <option value={"sold"}>Sold</option>
                    </select>
                    <FaCaretDown className="absolute top-1/2 -translate-y-1/2 right-1" />
                </div>
            </div>
            <div className="bottom flex gap-2 sm:gap-2.5 justify-between mt-1 sm:mt-1.5">
                <button onClick={HandlerClearFilter} className="text-sm py-0.5 text-tertiary bg-gray-200 font-bold self-center rounded-md w-full text-center">Clear</button>
                <Link href={
                    pathname + '?' + (sort != "" ? createQueryString('sort', sort) : "") + (sort != "" && order != "" ? "&" : "") + (order != "" ? createQueryString('order', order) : "") + (category != "" && sort != "" && order != "" ? "&" : "") + (category != "" ? createQueryString('category', category) : "")
                } className="text-sm py-0.5 bg-tertiary text-white font-bold self-center rounded-md w-full text-center">Filter</Link>
            </div>
        </div>
    )
}