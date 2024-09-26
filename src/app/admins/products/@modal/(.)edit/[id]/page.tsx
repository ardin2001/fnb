"use client"
import WrapperModal from "@/app/wrapper/WrapperModal"
import { useRouter } from 'next/navigation'
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateProduct } from "@/app/redux/admin/productSlice"

export default function ModalEdit({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [name, setName]: any = useState("");
    const [category, setCategory]: any = useState("");
    const [price, setPrice]: any = useState("");
    const [desc, setDesc]: any = useState("");
    const [image, setImage]: any = useState("");
    const dispatch = useDispatch()
    const productId = useSelector((state: any) => state.products.data)
    useEffect(() => {
        if(productId){
            productId.forEach((item: any) => {
                if (item.id == params.id) {
                    setName(item.name)
                    setCategory(item.category)
                    setPrice(item.price)
                    setDesc(item.description)
                    setImage(item.image)
                }
            })
        }
    }, [productId])
    const HandlerClear = () => {
        setName("")
        setCategory("")
        setPrice("")
        setDesc("")
        setImage("")
    }
    const HanderSubmit = (e: any) => {
        e.preventDefault()
        dispatch(updateProduct({ id: params.id, name: name[0].toUpperCase() + name.slice(1), category: category[0].toUpperCase() + category.slice(1), price, desc, image }))
        setTimeout(() => {
            router.back()
        }, 500);
    }
    return (
        <WrapperModal type="modal">
            <div className="bg-white shadow-basic fixed z-50 w-90/100 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 sm:px-3 xl:px-5 lg:px-4 py-2 lg:py-2.5 xl:py-4 rounded-sm lg:rounded-md">
                <div className="header-modal flex justify-between">
                    <h1 className="text-2xl font-semibold text-secondary mb-1 sm:mb-2 lg:mb-3 xl:mb-3.5">Edit Product</h1>
                    <AiOutlineCloseSquare
                        size={"1.5rem"}
                        className="text-custom cursor-pointer text-secondary"
                        onClick={() => router.back()}
                    />
                </div>
                <form onSubmit={HanderSubmit} action="" className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
                    <div className="name">
                        <label htmlFor="name" className="font-medium text-gray-800">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="category">
                        <label htmlFor="category" className="font-medium text-gray-800">Category</label>
                        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} id="category" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2">
                            <option value="">Select Category</option>
                            <option value="Food">Food</option>
                            <option value="Drink">Drink</option>
                            <option value="Snack">Snack</option>
                            <option value="Cake">Cake</option>
                            <option value="Steak">Steak</option>
                            <option value="Junk Food">Junkfood</option>
                        </select>
                    </div>
                    <div className="price">
                        <label htmlFor="price" className="font-medium text-gray-800">Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="image">
                        <label htmlFor="image" className="font-medium text-gray-800">Image</label>
                        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="desc">
                        <label htmlFor="desc" className="font-medium text-gray-800">Description</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="desc" id="desc" className="h-32 xl:h-32 w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-1.5 lg:py-2" />
                    </div>
                    <div className="button flex w-full sm:w-1/2 md:w-2/5 ml-auto gap-2 lg:gap-2.5 xl:gap-3">
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-md w-1/2" type="button" onClick={HandlerClear}>Clear All</button>
                        <button className="bg-secondary text-white py-2 px-4 rounded-md w-1/2" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </WrapperModal>
    )
}