import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png"
const Footer = () => {
    return (
        <div className="bg-[#f8f5f4]">
            <footer className=" px-4 py-12 mx-auto max-w-7xl bottom-0 ">
                <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
                    <div className="col-span-3">
                        <a href="#" title="Hellonext Home Page" className="flex items-center">
                            <Image alt="" src={logo} height={720} width={720} className="w-24 rounded-full" />
                            <span className="sr-only">Kutty Home Page</span>
                        </a>
                        <p className="my-4 text-xs leading-normal text-gray-600">
                            We are one of India’s largest B2B e-commerce platforms that
                            connects buyers and suppliers.Global Exposure, 24X7 live showroom
                        </p>
                    </div>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/membership">Features</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/membership">Pricing</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Feedback</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">FAQs</a>
                    </nav>
                    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Support</p>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/contact">Chat</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/contact"> Email Support </a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/contact">GDPR</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/contact"> Help </a>
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
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/about">About Us</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/terms">Privacy</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="/terms">Terms</a>
                        <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Status</a>
                    </nav>
                </div>
                <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                    <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">Build by Full Stack Dev <Link href={"https://twitter.com/Raj_sahani22"} target="_blank" className="hover:underline">
                        Raj Sahani
                    </Link>
                    </p>
                    <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy;
                        <Link href={"#"} className="cursor-pointer hover:underline">
                            2024 Indian Export Web Mart
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;