"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    withMagnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, withMagnetic = false, children, ...props }, ref) => {
        const buttonRef = React.useRef<HTMLButtonElement>(null);
        const [position, setPosition] = React.useState({ x: 0, y: 0 });

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!withMagnetic || !buttonRef.current) return;
            const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - (left + width / 2);
            const y = e.clientY - (top + height / 2);
            setPosition({ x: x * 0.2, y: y * 0.2 });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        const variants = {
            primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg",
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-900",
            ghost: "hover:bg-gray-50 text-gray-700 hover:text-gray-900",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={buttonRef}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-inherit border-t-transparent" />
                )}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
