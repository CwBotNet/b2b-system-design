
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { categorys } from "@/app/utils";
import Image from "next/image";

const CategorySeection = () => {
    const limitedCategory = categorys.slice(0, 8)
    return (
        <>
            <section className="text-gray-600 body-font flex flex-col gap-y-8">


                <div className="flex justify-center items-center">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">The</span>
                                </span>{' '}
                                Top Categories
                            </h2>
                            {/* <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p> */}
                        </div>
                        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">

                            {limitedCategory.map((item, idx) => (

                                <a
                                    key={idx}
                                    href="/"
                                    aria-label="View Item"
                                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                                >
                                    <div className="flex flex-col h-full">
                                        <Image
                                            src={item.image}
                                            width={500}
                                            height={500}
                                            className="object-cover w-full h-48"
                                            alt={item.name}
                                        />
                                        <div className="flex-grow border border-t-0 rounded-b">
                                            <div className="p-5">
                                                <h6 className="mb-2 font-semibold leading-5">
                                                    {item.name}
                                                </h6>
                                                <span className="flex flex-wrap">
                                                    {item.items.map((items, idx) => (
                                                        <p key={idx} className="text-sm text-gray-900">
                                                            {items},
                                                        </p>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="text-center">
                            <a
                                href="/"
                                className="bg-blue-400 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                view more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategorySeection;