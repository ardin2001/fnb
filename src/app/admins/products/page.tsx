"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "@/app/store/admin/productSlice"
import { getProducts } from "@/app/lib/fetch/fetchProducts"
import Image from "next/image"

export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state: any) => state.products)
    const [status, setStatus]: any = useState()
    useEffect(() => {
        getProducts().then(({ status, data, message }) => {
            if (status) {
                dispatch(actions.setItems(data))
            } else {
                console.log(message)
            }
            setStatus(status)
        }).catch((e) => console.log(e))
    }, [])

    return (
        <aside className="flex flex-col gap-2 sm:gap-3 md:gap-4 xl:gap-5">
            <div className="flex justify-between mt-4 md:mt-5">
                <div className="input lg:w-2/5">
                    <input type="text" placeholder="Search here..." className="outline-none border-1.5 border-secondary px-3 py-1.5 w-full lg:py-2 rounded-md text-sm" />
                </div>
                <Link href="/admins/products/add" className="text-white bg-secondary py-1.5 px-5 rounded-md">Add Product</Link>
            </div>
            <div className="tabel bg-white px-4 py-4 max-h-99 overflow-auto ">
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
                        {status ? (
                            products.map((product: any, index: number) => {
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
                        ) : null}
                    </tbody>
                </table>
            </div>
        </aside>
    )
}