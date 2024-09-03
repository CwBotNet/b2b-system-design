"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

const VerticalScroll = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set the component as mounted after the initial render
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            // Start the animation with a small delay to ensure mounting
            const timer = setTimeout(() => {
                controls.start({
                    y: [0, -1000],
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    },
                });
            }, 20); // 50ms delay to ensure the component is mounted

            return () => clearTimeout(timer); // Clean up the timeout on unmount
        }
    }, [isMounted, controls]);

    if (!isMounted) {
        return null;
    }

    return (
        <motion.div animate={controls}>
            {children}
        </motion.div>
    );
};

export { VerticalScroll };
