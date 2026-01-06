"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { useEffect, useState } from "react";

export function Section({
    className,
    id,
    children,
}: {
    className?: string;
    id?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}
        >
            {children}
        </section>
    );
}

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
            style={{ scaleX }}
        />
    );
}

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setExpand(true);
            } else {
                setExpand(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver); // Using mouseover for delegation-like behavior

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gray-900 pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: position.x - 16, // center the cursor (32/2)
                y: position.y - 16,
                scale: expand ? 1.5 : 1,
                backgroundColor: expand ? "rgba(17, 24, 39, 0.1)" : "transparent",
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5,
            }}
        />
    );
}
