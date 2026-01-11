"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import {
    FileJson, // JSON/JS placeholder
    FileType, // TS placeholder
    Atom, // React placeholder
    Server, // Node/Express placeholder
    Database, // DB placeholder
    Wind, // Tailwind placeholder
    Triangle, // Prisma/Vercel placeholder
    Cpu // System/Other
} from "lucide-react";
// In a real scenario, we would use SVGs or specific icon components for brands like Next.js, TypeScript, etc.
// For now, I will use text or generic icons if brand icons aren't available in Lucide, 
// OR better yet, I will use some standard SVG paths or just Lucide placeholders if requested "use lucide react".
// The user said "use lucide react" for social links. For tech stack, they just said "tech stacks separate section".
// I'll try to use text labels or see if I can use simple text/emoji or Lucide approximations. 
// Actually, for "Exact same like that", I should probably use SVGs if possible or just Lucide + Text.
// Given strict "only lucide react" constraint or similar? User said "link mail, x, github, linkedin use lucide react".
// For tech stack, I will use Lucide icons where possible + Text labels or just clean SVGs if I had them.
// I'll stick to a clean row of named icons using Lucide where appropriate or generic icons.
// Actually, I can use simple text badges or available icons.
// Let's use a marquee or simple flex wrap.

const techStack = [
    { name: "JavaScript", icon: <FileJson className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" /> },
    { name: "TypeScript", icon: <FileType className="w-8 h-8 md:w-10 md:h-10 text-blue-500" /> },
    { name: "React", icon: <Atom className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" /> },
    { name: "Next.js", icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-black" /> },
    { name: "Node.js", icon: <Server className="w-8 h-8 md:w-10 md:h-10 text-green-600" /> },
    { name: "Express", icon: <Server className="w-8 h-8 md:w-10 md:h-10 text-gray-500" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8 md:w-10 md:h-10 text-green-500" /> },
    { name: "PostgreSQL", icon: <Database className="w-8 h-8 md:w-10 md:h-10 text-blue-400" /> },
    { name: "Prisma", icon: <Triangle className="w-8 h-8 md:w-10 md:h-10 text-gray-700" /> },
    { name: "Tailwind", icon: <Wind className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" /> },
];

export function TechStack() {
    return (
        <section className="py-20 bg-white">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
                    <div className="w-20 h-1 bg-gray-200 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 grayscale hover:grayscale-0 transition-all duration-500">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center gap-2 group cursor-default"
                        >
                            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-gray-100/50">
                                {tech.icon}
                            </div>
                            {/* <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">{tech.name}</span> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
