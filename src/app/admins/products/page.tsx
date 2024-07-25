"use client"

import Link from "next/link"

export default function Products() {
    return (
        <aside className="flex flex-col gap-2 sm:gap-3 md:gap-4 xl:gap-5">
            <Link href="/admins/products/add" className="text-white bg-secondary py-1.5 px-5 mt-5 rounded-md self-end w-max">Add Product</Link>
            <div className="table bg-white px-2 py-5">
                <table className="table table-auto w-full rounded-md">
                    <thead className="border-b-1.5 border-blue-300">
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                            <th>price</th>
                            <th>category</th>
                            <th>stock</th>
                            <th>image</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>name</td>
                            <td>description</td>
                            <td>price</td>
                            <td>category</td>
                            <td>stock</td>
                            <td>image</td>
                            <td>
                                <Link href="/admins/products/edit">Edit</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>name</td>
                            <td>description</td>
                            <td>price</td>
                            <td>category</td>
                            <td>stock</td>
                            <td>image</td>
                            <td>
                                <Link href="/admins/products/edit">Edit</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>name</td>
                            <td>description</td>
                            <td>price</td>
                            <td>category</td>
                            <td>stock</td>
                            <td>image</td>
                            <td>
                                <Link href="/admins/products/edit">Edit</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </aside>
    )
}