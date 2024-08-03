import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import CardProduct from "./cardProduct";
import { IoFlash } from "react-icons/io5";

async function fetchData() {
  // default : cache : 'force-cache'
  try {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products`, {
      cache: 'no-store'
    })
    const { status, data } = await response.json()
    return { status, data }
  } catch (error) {
    return { status: false, data: null }
  }
}

export default async function Home() {
  const { status, data } = await fetchData()
  return (
    <main className="bg-low">
      <div className="mt-2 sm:mt-2.5 lg:mt-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto mb-10 relative">
        <Image src="/banner.jpg" alt="login" width={5000} height={5000} className="-scale-x-100 h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover" />
        <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-90/100 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white stroke-2 stroke-red-700" style={{ WebkitTextStroke: "1px #ff5500" }}>Welcome to Aseloley App</h1>
          <p className="text-white text-sm sm:text-base lg:text-lg" style={{ textShadow: "0 0 2.5px black" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis <a className="underline decoration-secondary">dicta aliquam dolor</a> eum, optio quod recusandae.</p>
        </div>
        <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-furdamental rounded-md"><input type="text" className="outline-none border-2 border-secondary rounded-md px-2 py-1.5 lg:py-2 w-full" placeholder="Search..." /></div>
      </div>
      <div className="category px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 ">
        <h2 className="text-secondary text-lg lg:text-xl xl:text-2xl font-medium lg:font-semibold mb-1 md:mb-1.5 xl:mb-2">Category</h2>
        <div className="container-category grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/food.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Food</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/junk-food.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Junk Food</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/drink.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Drink</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/cake.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Cake</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/snack.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Snack</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
          <div className="shadow-basic flex px-2 py-1 gap-1 sm:gap-1.5">
            <Image src="/category/steak.png" alt="food" width={1000} height={1000} className="w-16 h-16 object-cover" />
            <div className="caption">
              <h5 className="text-secondary font-medium">Steak</h5>
              <p className="text-xs">fresh, tasty and cheap food</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discount mt-14 sm:mt-20 lg:mt-24 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 flex flex-col sm:flex-row">
        <div className="description sm:w-1/3">
          <div className="top mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 xl:mb-5">
            <div className="flex items-center mb-1 sm:mb-1.5 gap-1.5 sm:gap-2">
              <IoFlash className="text-white bg-secondary p-2 rounded-all font-semibold text-3xl sm:text-4xl" />
              <h3 className="text-xl sm:text-2xl font-semibold">Flash Deal</h3>
            </div>
            <p className="text-gray-600 text-lg">Berakhir Dalam 00 : 10 : 04</p>
          </div>
          <div className="bottom grid gap-2">
            <h4 className="text-secondary text-xl sm:text-2xl font-medium sm:font-semibold">Diskon tiap hari sampai 70%!</h4>
            <p className="text-sm text-gray-600 w-90/100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nulla error tempora consequuntur possimus aut autem!</p>
            <Link href="/menu" className="btn-primary w-max bg-secondary py-1.5 px-3.5 sm:px-4 md:px-5 rounded-md text-white font-medium sm:font-semibold">Order Now</Link>
          </div>
        </div>
        <div className="product-discount overflow-auto w-full">
          <div className="flex w-max">
            {data.map((item: any) => <CardProduct key={item.id} product={item} />)}
          </div>
        </div>
      </div>
      {/* <div className="reservation mt-16 sm:mt-20 md:mt-28 h-44 bg-tertiary mx-6 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-14 grid md:grid-cols-2">
        <Image src="/cafe.avif" alt="reservation" width={1000} height={1000} className="w-96 h-80 object-cover" />
        <div className="caption">
          <h3>Reservation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate quibusdam dicta.</p>
          <div className="btn-wa">
            <Link href="https://wa.me/6289530522228" className="py-1 lg:py-2 rounded-lg text-white border-2 border-white font-semibold w-min px-4 lg:px-5 flex items-center gap-1 sm:gap-1.5"><FaWhatsapp /> whatsapp</Link>
          </div>
        </div>
      </div> */}
      <Footer />
    </main>
  );
}
