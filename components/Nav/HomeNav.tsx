"use clinet"
import Image from "next/image";
import { Input } from "../ui/input";
import logo from "../../public/images/logo.png"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { CircleUser, Search } from "lucide-react";
import Link from "next/link";
import RequirementForm from "../Requirement";

const HomeNav = () => {
    return (
        <header className="sticky top-0 bg-[#f8f5f4] p-2 shadow z-50">
            <div className="flex items-center justify-evenly mx-auto max-w-7xl">
                <Link href={"/"} >
                    <Image alt="" src={logo} height={1400} width={1400} className="w-[5rem]" />
                </Link>

                <div className="flex">
                    <Select>
                        <SelectTrigger className="w-[140px] outline-none">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>filter</SelectLabel>
                                <SelectItem value="Company">Company</SelectItem>
                                <SelectItem value="Product">Product</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input type="text" placeholder="Search product or Company" />
                    <Button className="btn btn-primary outline-none border-none cursor-pointer" variant={"link"}>
                        <Search />
                    </Button>
                </div>
                <div className="flex gap-x-1">

                    <div className="lg:flex text-sm gap-x-4 cursor-pointe font-semibold hidden items-center">

                        <Link className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href={"#"}>About us</Link>
                        <Link className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href={"/membership"}>Advertise With Us</Link>
                        <Link className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href={"#"}>Contact</Link>

                        <RequirementForm />
                    </div>
                </div>
                <div className="flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="rounded-full">
                            <CircleUser size={28} className="text-black/50" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                            {/* <DropdownMenuSeparator /> */}
                            <DropdownMenuItem>
                                <span className="btn btn-light text-neutral-500">
                                    Sign In
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="btn btn-light">
                                    register
                                </span>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}

export default HomeNav;