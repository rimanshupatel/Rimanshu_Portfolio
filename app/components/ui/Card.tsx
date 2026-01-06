"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-xl p-6 shadow-soft transition-all duration-300",
                    className
                )}
                whileHover={
                    hoverEffect
                        ? {
                            y: -8,
                            scale: 1.02,
                            boxShadow:
                                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }
                        : undefined
                }
                {...props as any}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
