import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./components/Navbar";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import CardProduct from "./components/CardProduct";

async function fetchData() {
  // default : cache : 'force-cache'
  const response = await fetch(`${process.env.HOSTNAME_P1}/api/products`, {
    cache: 'no-store'
  })
  const { status, data } = await response.json()
  return { status, data }
}

export default async function Home() {
  const { status, data } = await fetchData()
  return (
    <main className="">
      <Navbar />
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2 lg:gap-2.5">
              <h3 className="text-secondary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3">ALKA Cafe</h3>
              <h3 className="text-white bg-secondary text-3xl lg:p-2.5 lg:text-5xl font-bold w-min">#CAFEKEKINIAN</h3>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro, illum reiciendis quisquam deleniti iusto accusantium vel quae perspiciatis nulla ducimus natus similique, quod id.</p>
              <button className="py-1 bg-secondary rounded-lg text-white font-semibold w-1/3">Home</button>
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="/banner.jpg" alt="login" width={5000} height={5000} className="w-90/100 justify-self-end md:w-85/100 lg:w-4/5 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-center text-lg lg:text-xl font-semibold lg:font-bold">Tentang Kami</h3>
        <p className="text-center font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card p-5 border-2 text-center border-secondary rounded-lg">
            <FaSellsy className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Ramai Pengunjung</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card p-5 border-2 text-center border-secondary rounded-lg">
            <MdOutlineFavorite className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Favorit</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card p-5 border-2 text-center border-secondary rounded-lg">
            <SiNamecheap className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Murah</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card p-5 border-2 text-center border-secondary rounded-lg">
            <GrServices className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">Pelayanan Terbaik</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="banner-lanscape relative grid justify-center mt-20 p-5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <Image src={"/banner-lanscape.jpg"} alt="login" width={5000} height={5000} className="absolute h-48 sm:h-60 md:h-64 lg:h-64 xl:h-72 object-cover -scale-x-100" />
        <h3 className="text-white text-3xl lg:text-5xl font-semibold z-50">ALKA Cafe</h3>
        <p className="text-white font-medium lg:font-semibold z-50 w-4/5 lg:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor doloremque soluta optio perspiciatis ipsa harum inventore modi nobis sequi.</p>
      </div>
      <div className="product grid lg:gap-2 justify-center mt-16 sm:mt-32 md:mt-36 lg:mt-40 xl:mt-48 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-lg lg:text-xl font-semibold lg:font-bold text-center">Penjualan Terlaris</h3>
        <p className="font-normal text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="wrapper-card mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {status && data.map((item: any) => <CardProduct key={item.id} product={item} />)}
        </div>
      </div>
      <div className="mt-16 bg-secondary py-2 text-center">Footer</div>
    </main>
  );
}
