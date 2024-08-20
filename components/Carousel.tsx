

const imgs = [
    "https://indianexportwebmart.com/assets/images/banners-img-1.jpg",
    // "https://mikekhorev.com/wp-content/uploads/2020/04/lead-generation.jpg",
    "https://indianexportwebmart.com/assets/images/banners-img-3.jpg",
    "https://indianexportwebmart.com/assets/images/banners-img-2.jpg",

];
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";



export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {imgs.map((img, index) => (
                    <CarouselItem key={index} className=" flex justify-center md:h-[420px] mg:h-[720px] ">
                        <Image alt="crousel images" width={1080} height={1080} className=" w-full object-cover font-semibold" src={img} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    )
}

export default CarouselPlugin;