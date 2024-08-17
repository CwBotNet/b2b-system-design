import Image from "next/image";
import logo from "../public/images/logo.png"
import HomeNav from "@/components/Nav/HomeNav";
import HeroSection from "@/components/HeroSection";
import CategorySeection from "@/components/Category";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gray-50">
        <HomeNav />
        <main className=" flex flex-col items-center justify-center h-full">
          <HeroSection />
          <CategorySeection />
        </main>
        <footer className="px-4 py-12 mx-auto max-w-7xl bottom-0 border-t">
          <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
            <div className="col-span-3">
              <a href="#" title="Hellonext Home Page" className="flex items-center">
                <Image alt="" src={logo} height={720} width={720} className="w-24 rounded-full" />
                <span className="sr-only">Kutty Home Page</span>
              </a>
              <p className="my-4 text-xs leading-normal text-gray-600">
                Hosted in the EU 🇪🇺, with <strong>no user tracking</strong> scripts. Made all over the world by <a href="#" className="underline" target="_blank">17 amazing people</a>.
              </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Features</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Pricing</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Feedback</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">FAQs</a>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Support</p>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Chat</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Email Support </a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">GDPR</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Help </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Resources</p>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Blog</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Twitter </a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Alternatives</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Why feature vote?</a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Company</p>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">About Us</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Privacy</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Terms</a>
              <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Status</a>
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">Built by Full Stack Dev Raj Sahani</p>
            <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy;
              <Link href={"#"} className="cursor-pointer hover:underline">
                2024 Indian Export Web Mart
              </Link>
            </p>
          </div>
        </footer>

      </section >



    </>
  );
}
