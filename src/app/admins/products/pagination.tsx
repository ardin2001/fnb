"use client"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector, UseDispatch, useDispatch } from "react-redux";
import { actions } from "@/app/redux/admin/productSlice";
import { getProducts } from "@/app/lib/fetch/fetchProducts";

export default function Pagination() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page: any = searchParams.get('page') || 1
  const products = useSelector((state: any) => state.products)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className="flex gap-2 justify-end h-max">
      {page != 1 ? <Link className="hover:bg-primary flex items-center text-xs justify-center px-2.5 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', (parseInt(page) - 1).toString())}><FaAngleLeft /></Link> : null}
      <Link className="hover:bg-primary flex items-center text-xs justify-center px-3.5 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', page)}>{page}</Link>
      {products.data.length == 10 ? <Link className="hover:bg-primary flex items-center text-xs justify-center px-2 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', (parseInt(page) + 1).toString())}><FaAngleRight /></Link> : null}
    </div>
  )
}