import Image from "next/image";
import Navbar from "./components/Navbar";
import { FaSellsy } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import CardProduct from "./components/CardProduct";
import CardMarket from "./components/CardMarket";

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
    <main className="bg-low">
      <Navbar />
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2 lg:gap-2.5">
              <h3 className="text-primary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3">Aseloley Cafe</h3>
              <h3 className="text-white bg-primary text-3xl py-1 px-1.5 sm:px-2 lg:p-2.5 lg:text-5xl font-bold w-min">#CAFEKEKINIAN</h3>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro, illum reiciendis quisquam deleniti iusto accusantium vel quae perspiciatis nulla ducimus natus similique, quod id.</p>
              <button className="py-1 bg-primary rounded-lg text-white font-semibold w-1/3">Home</button>
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="/banner.jpg" alt="login" width={5000} height={5000} className="w-90/100 justify-self-end md:w-85/100 lg:w-4/5 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="status mt-16 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-44 text-white py-4 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto bg-primary">
        <h3 className="text-center text-lg lg:text-xl font-semibold lg:font-bold">Tentang Kami</h3>
        <p className="text-center font-normal w-90/100 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="mt-2 lg:mt-2.5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardMarket value={100} caption="Cabang" />
          <CardMarket value={96} unit="%" caption="Respon" />
          <CardMarket value={1250} front="+" caption="Pengunjung" />
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-primary text-center text-lg lg:text-xl font-semibold lg:font-bold">Tentang Kami</h3>
        <p className="text-center font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="card bg-white p-5 border-2 text-center border-primary rounded-lg">
            <FaSellsy className="text-7xl mb-1.5 text-primary mx-auto" />
            <h4 className="font-bold">Ramai Pengunjung</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-primary rounded-lg">
            <MdOutlineFavorite className="text-7xl mb-1.5 text-primary mx-auto" />
            <h4 className="font-bold">Favorit</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-primary rounded-lg">
            <SiNamecheap className="text-7xl mb-1.5 text-primary mx-auto" />
            <h4 className="font-bold">Murah</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="card bg-white p-5 border-2 text-center border-primary rounded-lg">
            <GrServices className="text-7xl mb-1.5 text-primary mx-auto" />
            <h4 className="font-bold">Pelayanan Terbaik</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="banner-lanscape relative grid justify-center mt-20 p-3 sm:p-5 lg:p-6 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <Image src={"/banner-lanscape.jpg"} alt="login" width={5000} height={5000} className="absolute h-48 sm:h-60 md:h-64 lg:h-64 xl:h-72 object-cover -scale-x-100" />
        <h3 className="text-white text-3xl lg:text-5xl font-semibold z-50">Aseloley Cafe</h3>
        <p className="text-white font-medium lg:font-semibold z-50 w-90/100 lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor doloremque soluta optio perspiciatis ipsa harum inventore modi nobis sequi.</p>
      </div>
      <div className="product grid lg:gap-2 justify-centersm:py-5 mt-24 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-56 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-primary text-lg lg:text-xl font-semibold lg:font-bold text-center">Penjualan Terlaris</h3>
        <p className="font-normal text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius possimus non tempore voluptatum unde rerum voluptatem inventore sed modi. Fuga ea porro earum quasi.</p>
        <div className="wrapper-card mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {status && data.map((item: any) => <CardProduct key={item.id} product={item} />)}
        </div>
      </div>
      <div className="mt-16 bg-primary py-2 text-center">Footer</div>
    </main>
  );
}
