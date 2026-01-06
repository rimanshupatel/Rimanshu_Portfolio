"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/Button";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
];

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl",
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                    isScrolled
                        ? "bg-white/70 backdrop-blur-xl shadow-medium border border-white/20"
                        : "bg-transparent"
                )}>
                    <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-1">
                        Rimanshu<span className="text-accent text-2xl leading-none">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-1.5 rounded-full hover:bg-white transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button size="sm" className="rounded-full px-5 h-9 text-xs" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-900 bg-gray-100 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                className={cn(
                    "fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8",
                    isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: isMobileMenuOpen ? 0 : 20, opacity: isMobileMenuOpen ? 1 : 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                    >
                        <Link
                            href={item.href}
                            className="text-2xl font-medium text-gray-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isMobileMenuOpen ? 0 : 20, opacity: isMobileMenuOpen ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button size="lg" className="rounded-full" onClick={() => { setIsMobileMenuOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' }); }}>
                        Let's Talk
                    </Button>
                </motion.div>
            </motion.div>
        </>
    );
}
