"use client"
import WrapperModal from "@/app/wrapper/WrapperModal"
import { useRouter } from 'next/navigation'
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateUser } from "@/app/redux/admin/userSlice"

export default function ModalEdit({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [name, setName]: any = useState("");
    const [email, setEmail]: any = useState("");
    const [password, setPassword]: any = useState("");
    const [rePassword, setRePassword]: any = useState("");
    const dispatch = useDispatch()
    const userId = useSelector((state: any) => state.users.data)
    useEffect(() => {
        if (userId) {
            userId.forEach((item: any) => {
                if (item.id == params.id) {
                    setName(item.fullname)
                    setEmail(item.email)
                    if (item.password) {
                        setPassword(item.password)
                        setRePassword(item.password)
                    }
                }
            })
        }
    }, [userId])
    const HandlerClear = () => {
        setName("")
        setEmail("")
        setPassword("")
    }
    const HanderSubmit = (e: any) => {
        e.preventDefault()
        dispatch(updateUser({ id: params.id, fullname: name, email, password }))
        setTimeout(() => {
            router.back()
        }, 500);
    }
    return (
        <WrapperModal type="modal">
            <div className="bg-white shadow-basic fixed z-50 w-90/100 sm:w-2/3 md:w-1/2 lg:w-2/4 xl:w-1/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 sm:px-3 xl:px-5 lg:px-4 py-2 lg:py-2.5 xl:py-4 rounded-sm lg:rounded-md">
                <div className="header-modal flex justify-between">
                    <h1 className="text-2xl font-semibold text-secondary mb-1 sm:mb-2 lg:mb-3 xl:mb-3.5">Edit User</h1>
                    <AiOutlineCloseSquare
                        size={"1.5rem"}
                        className="text-custom cursor-pointer text-secondary"
                        onClick={() => router.back()}
                    />
                </div>
                <form onSubmit={HanderSubmit} action="" className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
                    <div className="name">
                        <label htmlFor="name" className="font-medium text-gray-800">Fullname</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="email">
                        <label htmlFor="email" className="font-medium text-gray-800">Email</label>
                        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="font-medium text-gray-800">Password</label>
                        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="re-password">
                        <label htmlFor="re-password" className="font-medium text-gray-800">Re Password</label>
                        <input value={rePassword} type="password" onChange={(e) => setRePassword(e.target.value)} name="re-password" id="re-password" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="button flex w-full sm:w-3/4 md:w-2/3 lg:h-3/5 xl:w-1/2 ml-auto gap-2 lg:gap-2.5 xl:gap-3">
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-md w-1/2" type="button" onClick={HandlerClear}>Clear All</button>
                        <button className="bg-secondary text-white py-2 px-4 rounded-md w-1/2" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </WrapperModal>
    )
}