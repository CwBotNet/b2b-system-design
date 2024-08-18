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

const HomeNav = () => {
    return (
        <header className="sticky top-0 bg-neutral-100 p-2 shadow z-50">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <div>
                    <Image alt="" src={logo} height={1400} width={1400} className="w-[5rem]" />
                </div>

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

                    <div className="lg:flex text-sm gap-x-4 cursor-pointe font-semibold hidden">
                        <Link className="hover:underline hover:underline-offset-2 " href={"#"}>About us</Link>
                        <Link className="hover:underline hover:underline-offset-2 " href={"#"}>Advertise With Us</Link>
                        <Link className="hover:underline hover:underline-offset-2 " href={"#"}>Contact</Link>
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
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
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