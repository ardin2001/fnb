"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import { postProducts } from '@/app/lib/fetch/fetchProducts'

export default function ModalAdd() {
    const router = useRouter()
    const [name, setName]: any = useState("");
    const [category, setCategory]: any = useState("");
    const [price, setPrice]: any = useState("");
    const [desc, setDesc]: any = useState("");
    const [image, setImage]: any = useState("");
    const HanderSubmit = (e: any) => {
        e.preventDefault()
        postProducts({name, category, price, desc, image}).then((res: any) => {
            if (res.status) {
                router.push("/admins/products")
            }else{
                alert(res.message)
            }
        }).catch((err: any) => {
            alert(err.message)
        })
    }
    const HandlerClear = () => {
        setName("")
        setCategory("")
        setPrice("")
        setDesc("")
        setImage("")
    }
    return (
            <div className="bg-white w-90/100 sm:w-85/100 lg:w-2/3 mx-auto mt-4 sm:mt-0 px-2.5 sm:px-3 xl:px-5 lg:px-4 py-4 lg:py-5 xl:py-6 rounded-sm lg:rounded-md">
                <h1 className="text-2xl font-semibold text-secondary mb-1 sm:mb-2 lg:mb-3 xl:mb-3.5 text-center">Add Product</h1>
                <form onSubmit={HanderSubmit} action="" className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
                    <div className="name">
                        <label htmlFor="name" className="font-medium text-gray-800">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-0.5 md:py-1 lg:py-1.5 xl:py-2" />
                    </div>
                    <div className="category">
                        <label htmlFor="category" className="font-medium text-gray-800">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} name="category" id="category" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-0.5 md:py-1 lg:py-1.5 xl:py-2">
                            <option value="">Select Category</option>
                            <option value="food">Food</option>
                            <option value="drink">Drink</option>
                            <option value="snack">Snack</option>
                            <option value="steak">Steak</option>
                            <option value="junkfood">Junkfood</option>
                        </select>
                    </div>
                    <div className="price">
                        <label htmlFor="price" className="font-medium text-gray-800">Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-0.5 md:py-1 lg:py-1.5 xl:py-2" />
                    </div>
                    <div className="image">
                        <label htmlFor="image" className="font-medium text-gray-800">Image</label>
                        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-0.5 md:py-1 lg:py-1.5 xl:py-2" />
                    </div>
                    <div className="desc">
                        <label htmlFor="desc" className="font-medium text-gray-800">Description</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="desc" id="desc" className="xl:h-32 w-full outline-none border-1.5 border-gray-800 text-gray-500 px-1 sm:px-1.5 md:px-2 rounded-sm lg:rounded-md text-sm py-0.5 md:py-1 lg:py-1.5 xl:py-2" />
                    </div>
                    <div className="button flex w-full sm:w-1/2 md:w-2/5 ml-auto gap-2 lg:gap-2.5 xl:gap-3">
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-md w-1/2" type="button" onClick={HandlerClear}>Clear All</button>
                        <button className="bg-secondary text-white py-2 px-4 rounded-md w-1/2" type="submit">Save</button>
                    </div>
                </form>
            </div>
    )
}