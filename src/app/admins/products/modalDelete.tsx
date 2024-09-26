'use client'
import { MdDelete } from "react-icons/md";
import WrapperModal from "@/app/wrapper/WrapperModal";
import { deleteProduct } from '@/app/redux/admin/productSlice'
import { useDispatch } from "react-redux";
export default function ModalDelete({ backRef, id }: any) {
    const dispatch = useDispatch()
    const HandlerDelete = (id: any) => {
        dispatch(deleteProduct({ id }));
        setTimeout(() => {
            backRef.current.style.display = "none"
        }, 500);
    }
    return (
        <WrapperModal backRef={backRef} type="modalBox">
            <div className="grid gap-2.5 sm:gap-3 md:gap-4 xl:gap-5 bg-white shadow-basic fixed z-50 inset-x-5x sm:inset-x-1/4 md:inset-x-1/3 lg:inset-x-35/100 top-1/2 -translate-y-1/2 px-2.5 sm:px-3 lg:px-4 py-2 sm:py-3 md:py-4 lg:py-5">
                <MdDelete className="text-7xl sm:text-8xl xl:text-9xl opacity-80 mx-auto bg-secondary rounded-full p-0.5 sm:p-1 md:p-1.5 lg:p-2.5 xl:p-3" />
                <div className="text">
                    <h4 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center text-gray-700">Are you sure ?</h4>
                    <p className="text-center text-sm text-gray-600">You won&apos;t be able to revert this!</p>
                </div>
                <div className="button flex w-90/100 sm:w-2/3 lg:w-1/2 mx-auto gap-2 lg:gap-2.5 xl:gap-3">
                    <button className="bg-gray-400 text-white py-0.5 lg:py-1 px-4 rounded-md w-1/2" type="button" onClick={() => backRef.current.style.display = "none"}>No</button>
                    <button className="bg-secondary text-white py-0.5 lg:py-1 px-4 rounded-md w-1/2" type="submit" onClick={() => HandlerDelete(id)}>Yes</button>
                </div>
            </div>
        </WrapperModal>
    )
}