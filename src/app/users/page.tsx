import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

async function fetchData() {
  // default : cache : 'force-cache'
  try {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?limit=4&page=1&order=rating&sort=desc`, {
      cache: 'no-store'
    })
    const { status, data } = await response.json()
    return { status, data }
  } catch (error) {
    return { status: false, data: null }
  }
}

export default async function Home() {
  // const { status, data } = await fetchData()
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
      <div className="discount px-4 sm:px-6 md:px-8 lg:px-10 ">

      </div>
      <Footer />
    </main>
  );
}
