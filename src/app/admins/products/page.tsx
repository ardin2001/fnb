"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "@/app/redux/admin/productSlice"
import { getProducts } from "@/app/lib/fetch/fetchProducts"
import Image from "next/image"
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Pagination from "./pagination"
import { CiFilter } from "react-icons/ci";
import {getProduct} from '@/app/redux/admin/productSlice'

function Products() {
    const dispatch = useDispatch()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const order = searchParams.get('order')
    const sort = searchParams.get('sort')
    const products = useSelector((state: any) => state.products)
    useEffect(() => {
        // getProducts({ page, order, sort }).then(({ status, data, message }) => {
        //     if (status) {
        //         dispatch(actions.setItems(data))
        //     } else {
        //         console.log(message)
        //     }
        //     setStatus(status)
        // }).catch((e) => console.log(e))
        dispatch(getProduct())
    }, [])

    return (
        <aside className="flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between mt-3 md:mt-3 mb-1.5 md:mb-2">
                <div className="input w-1/2 lg:w-2/5">
                    <input type="text" placeholder="Search here..." className="outline-none border-1.5 border-secondary px-3 py-1.5 w-full lg:py-2 rounded-md text-sm" />
                </div>
                <div className="right flex gap-2 lg:gap-2.5">
                    <CiFilter className="text-4xl font-bold bg-secondary text-white self-baseline" onClick={() => console.log("filter")} />
                    <Link href="/admins/products/add" className="text-white text-sm sm:text-base bg-secondary py-1.5 lg:py-2 px-5 rounded-md">Add Product</Link>
                </div>
            </div>
            <div className="tabel bg-white px-4 py-4 max-h-99 overflow-auto scrollbar-transparent">
                <table className="table-auto w-full rounded-lg">
                    <thead className="border-b-1.5 border-blue-300">
                        <tr>
                            <th className="pb-1.5">Id</th>
                            <th className="pb-1.5">Name</th>
                            <th className="pb-1.5">Category</th>
                            <th className="pb-1.5">Price</th>
                            <th className="pb-1.5">Sold</th>
                            <th className="pb-1.5">image</th>
                            <th className="pb-1.5">action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {products.status ? (
                            products.data.length == 0 ? (
                                <tr className="relative h-10">
                                    <td className="py-1.5 absolute left-1/2 -translate-x-1/2 top-2 text-blue-500 text-xl font-semibold">No Data</td>
                                </tr>
                            ) : (
                                products.data.map((product: any, index: number) => {
                                    return (
                                        <tr key={product.id} className={`${(index + 1) % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
                                            <td className="py-1.5">{index + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.sold}</td>
                                            <td className="py-1.5">
                                                <Image src={product.image} alt="image" width={100} height={100} className="mx-auto h-6 md:h-8 w-12 lg:w-14 object-cover" />
                                            </td>
                                            <td>
                                                <div className="my-auto flex gap-2 justify-center">
                                                    <Link className="text-white bg-yellow-400 py-1 px-5 rounded-md" href={`/admins/products/${product.id}`}>Edit</Link>
                                                    <Link className="text-white bg-red-500 py-1 px-5 rounded-md" href={`/admins/products/${product.id}`}>Hapus</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        ) : (
                            <tr className="relative h-10">
                                <td className="py-1.5 absolute left-1/2 -translate-x-1/2 top-2 text-red-500 text-xl font-semibold">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {products.status ? <Pagination /> : null}
        </aside>
    )
}

export default function WrapperProducts() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Products />
        </Suspense>
    )
}