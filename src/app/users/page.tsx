import Image from "next/image";
import NavbarUser from "./navbar";
import Link from "next/link";
import Footer from "../components/Footer";

// async function fetchData() {
//   // default : cache : 'force-cache'
//   try {
//     const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?limit=4&page=1&order=rating&sort=desc`, {
//       cache: 'no-store'
//     })
//     const { status, data } = await response.json()
//     return { status, data }
//   } catch (error) {
//     return { status: false, data: null }
//   }
// }

export default async function Home() {
  //   const { status, data } = await fetchData()
  return (
    <main className="bg-low">
      <NavbarUser />
      <div className="mt-2 sm:mt-2.5 lg:mt-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto mb-10">
          <Image src="/banner.jpg" alt="login" width={5000} height={5000} className="-scale-x-100 h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover" />
      </div>
      <Footer />
    </main>
  );
}
