"use client"
import React from 'react'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"

const VerticalScroll = ({ children }: { children: React.ReactNode }) => {

    const controls = useAnimation();

    useEffect(() => {
        const scrollAnimation = async () => {
            while (true) {
                await controls.start({
                    y: [0, -1000],
                    transition: {
                        duration: 10,
                        repeat: Infinity,
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
        <motion.div animate={controls}>
            {children}
        </motion.div>
    )
}

export default VerticalScroll
