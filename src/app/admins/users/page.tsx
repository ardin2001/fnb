"use client"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Pagination from "./pagination"
import { CiFilter } from "react-icons/ci";
import { getUser } from "@/app/redux/admin/userSlice"
import ModalFilter from "./modalFilter"
import { IoMdAddCircle } from "react-icons/io";
import ModalDelete from "./modalDelete"
import Capitalize from "@/app/function/Capitalize"
import { actions } from "@/app/redux/admin/userSlice"
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Users() {
    const dispatch = useDispatch()
    const filterRef: any = useRef(null)
    const deleteRef: any = useRef(null)
    const [id, setId] = useState(null)
    const searchParams = useSearchParams()
    const page = searchParams.get('page') || 1
    const order = searchParams.get('order') || "created_at"
    const sort = searchParams.get('sort') || "desc"
    const users = useSelector((state: any) => state.users)
    const [inputName, setInputName] = useState(searchParams.get('name') || "")
    useEffect(() => {
        dispatch(getUser({ page, order, sort, inputName }))
    }, [dispatch, page, order, sort, inputName])

    useEffect(() => {
        if (users.statusCode == 200) {
            toast.success(users.message, {
                position: "bottom-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {
                    fontSize: "14px",
                }
            });
            dispatch(actions.setClearStatusCode());
        } else if (users.statusCode == 409) {
            toast.error(users.message, {
                position: "bottom-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {
                    fontSize: "14px",
                }
            });
            dispatch(actions.setClearStatusCode());
        }
    }, [users.statusCode])

    const HandlerFilter = () => {
        if (filterRef.current.style.display == "none") {
            filterRef.current.style.display = "block"
        } else {
            filterRef.current.style.display = "none"
        }
    }

    const HandlerDelete = (id: any) => {
        if (id) {
            setId(id)
        }
        if (deleteRef.current.style.display == "none") {
            deleteRef.current.style.display = "block"
        } else {
            deleteRef.current.style.display = "none"
        }
    }

    return (
        <aside className="flex flex-col gap-2 sm:gap-3">
            <ToastContainer />
            <div className="flex justify-between mt-3 md:mt-3 mb-1.5 md:mb-2 gap-2 sm:gap-2.5 lg:gap-4">
                <div className="input sm:w-1/2 lg:w-2/5">
                    <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Search here..." className="outline-none border-1.5 border-secondary px-3 py-1.5 w-full lg:py-2 rounded-md text-sm" />
                </div>
                <div className="right flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 relative">
                    <ModalDelete backRef={deleteRef} id={id} />
                    <ModalFilter backRef={filterRef} />
                    <CiFilter className="text-3xl md:text-4xl font-bold bg-secondary text-white rounded-sm sm:rounded-md p-1" onClick={HandlerFilter} />
                    <Link href={`/admins/users/add?page=${page}`} className="sm:hidden" scroll={false}><IoMdAddCircle className="text-4xl font-bold text-secondary rounded-sm sm:rounded-md xl:p-1" /></Link>
                    <Link href={`/admins/users/add?page=${page}`} className="text-white text-sm hidden sm:block bg-secondary py-1.5 lg:py-2 px-5 rounded-md" scroll={false}>Add user</Link>
                </div>
            </div>
            <div className="tabel bg-white px-4 py-4 max-h-99 overflow-auto scrollbar-transparent">
                <table className="table-auto w-full rounded-lg">
                    <thead className="border-b-1.5 border-blue-300">
                        <tr>
                            <th className="pb-1.5">Id</th>
                            <th className="pb-1.5 text-start">Full Name</th>
                            <th className="pb-1.5 text-start">Email</th>
                            <th className="pb-1.5">Status</th>
                            <th className="pb-1.5">Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {users.status ? (
                            users.data.length == 0 ? (
                                <tr className="relative h-10">
                                    <td className="py-1.5 absolute left-1/2 -translate-x-1/2 top-2 text-blue-500 text-xl font-semibold">No Data</td>
                                </tr>
                            ) : (
                                users.data.map((user: any, index: number) => {
                                    return (
                                        <tr key={user.id} className={`${(index + 1) % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
                                            <td className="py-1.5">{index + 1}</td>
                                            <td className="text-start">{Capitalize(user.fullname)}</td>
                                            <td className="text-start">{user.email}</td>
                                            <td className={`w-max text-xs py-0.5 lg:py-1 rounded-md text-white font-semibold`}>
                                                <p className={`${user.verified ? "bg-green-500" : "bg-red-500"} w-full mx-auto text-xs py-0.5 lg:py-1 rounded-md text-white font-semibold`} >{user.verified ? "Verified" : "Unverified"}</p>
                                            </td>
                                            <td>{Capitalize(user.role)}</td>
                                            <td className="px-2 sm:px- py-1 md:py-1.5">
                                                <div className="my-auto flex gap-2 justify-center">
                                                    <Link className="text-white bg-yellow-400 py-0.5 px-5 rounded-md" href={`/admins/users/edit/${user.id}?page=${page}`} scroll={false} >Edit</Link>
                                                    <button className="text-white bg-red-500 py-0.5 px-5 rounded-md" type="button" onClick={() => HandlerDelete(user.id)}>Hapus</button>
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
            {users?.status  ? <Pagination /> : null}
        </aside>
    )
}

export default function WrapperUsers() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Users />
        </Suspense>
    )
}