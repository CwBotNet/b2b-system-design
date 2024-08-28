import Image from "next/image";
import { countrys } from "@/app/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card";
const CountrySupliers = () => {
    return (
        <div className="flex w-[90vw] justify-center items-center flex-col">
            <h1 className="text-2xl capitalize font-bold">supliers by countery</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-screen-lg"
            >
                <CarouselContent>
                    {Array.from(countrys).map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <div className="p-1">
                                <CardContent className="flex space-y-4 flex-col aspect-square items-center justify-center p-6">
                                    <Image src={`https://flagcdn.com/h80/${item.flag_icon}.png`} height={20} width={80} alt={item.country} />
                                    <h1 className="font-medium">{item.country}</h1>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12  " />
                <CarouselNext className="mr-12" />
            </Carousel>
        </div>
    );
}

export default CountrySupliers;