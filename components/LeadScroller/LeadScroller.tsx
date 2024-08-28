"use client"
import { Card, CardContent, CardHeader } from "../ui/card";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
const LeadScroller = () => {

    const controls = useAnimation();

    useEffect(() => {
        const scrollAnimation = async () => {
            while (true) {
                await controls.start({
                    y: [0, -1000],
                    transition: {
                        duration: 10,
                        ease: "linear"
                    }
                });

                await controls.start({
                    y: 0,
                    transition: { duration: 0 }
                })
            }
        }
        scrollAnimation()
    }, [controls])

    return (
        <>
            <div className="space-x-6  flex flex-col justify-center items-center  gap-y-12">
                <h1 className="text-4xl font-bold tracking-wider">Leads</h1>
                <div className="flex gap-x-6">
                    <div>
                        <div
                            className="text-center  bg-none z-50">
                            <h1>Domastics leads</h1>

                        </div>
                        <Card className=" h-72 overflow-y-auto w-[40vw]">
                            <CardContent className="space-y-4">
                                {Array.from({ length: 100 }).map((_, idx) => (

                                    <motion.div key={idx} className="flex justify-between border p-2 rounded-md">
                                        <div className="flex">
                                            <span>flag image</span> |
                                            <p>Text</p>|
                                            <p>Text</p>|
                                            <p>Text</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card className="w-[40vw] h-64 overflow-y-auto">
                            <CardHeader className="text-center">
                                <h1>Internationl Leads</h1>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeadScroller;