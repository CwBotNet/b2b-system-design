"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import { SwipeCarousel } from "./SwipeCrousal";
import CarouselSection from "./Carousel";

const imageLink = [
    {
        id: 1,
        link: "https://indianexportwebmart.com/assets/images/banners-img-1.jpg"
    },
    {
        id: 2,
        link: "https://mikekhorev.com/wp-content/uploads/2020/04/lead-generation.jpg"
    },
    {
        id: 3,
        link: "https://indianexportwebmart.com/assets/images/banners-img-3.jpg"
    },
    {
        id: 4,
        link: "https://indianexportwebmart.com/assets/images/banners-img-2.jpg"
    }
]

const HeroSection = () => {
    return (
        <>
            <section className="w-full h-full">
                <CarouselSection />

            </section>
        </>
    );
}

export default HeroSection;