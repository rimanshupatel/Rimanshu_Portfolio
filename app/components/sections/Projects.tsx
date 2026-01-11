"use client";

import { motion } from "framer-motion";
import { Github, Globe, Activity, Atom, Database, Server, Triangle, Wind, FileType, Cpu } from "lucide-react";
import Link from "next/link";

// Helper to get icon by name (simplified for light theme)
const getTechIcon = (tech: string) => {
    const className = "w-5 h-5 text-gray-700";
    switch (tech.toLowerCase()) {
        case "react": return <Atom className={className} />;
        case "node.js": return <Server className={className} />;
        case "express": return <Server className={className} />;
        case "mongodb": return <Database className={className} />;
        case "tailwind": return <Wind className={className} />;
        case "prisma": return <Triangle className={className} />;
        case "typescript": return <FileType className={className} />;
        case "next.js": return <Cpu className={className} />;
        default: return <Activity className={className} />;
    }
};

const projects = [
    {
        title: "Lunar",
        description: "An music streaming web application with features like song search, playlist creation, and seamless audio playback.",
        tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        status: "All Systems Operational",
        color: "bg-purple-100" // Light theme accent
    },
    {
        title: "AuthX",
        description: "A complete MERN stack authentication system with secure user registration, login, and session management.",
        tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind", "Prisma"],
        liveUrl: "#",
        githubUrl: "#",
        status: "All Systems Operational",
        color: "bg-blue-100"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-white text-gray-900">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-2 block">Featured</span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
                    {/* Divider line style from reference? No, reference has "Featured Projects" centered. */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col gap-4"
                        >
                            {/* Card Container similar to reference but light */}
                            <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50">
                                {/* Background Gradient/Image Placeholder */}
                                <div className={`absolute inset-0 ${project.color} opacity-50 group-hover:opacity-60 transition-opacity`} />

                                {/* Mock UI in the card */}
                                <div className="absolute inset-4 md:inset-8 mt-8 md:mt-12 bg-white rounded-t-xl shadow-lg border border-gray-100 overflow-hidden">
                                    <div className="w-full h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    {/* Content Body Placeholder */}
                                    <div className="p-4">
                                        <div className="w-1/3 h-4 bg-gray-100 rounded mb-2" />
                                        <div className="w-1/2 h-4 bg-gray-100 rounded mb-4" />
                                        <div className="w-full h-24 bg-gray-50 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Info Below Card (Reference style) */}
                            <div className="flex flex-col gap-3 px-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Link href={project.githubUrl} className="hover:text-gray-900 transition-colors"><Github size={20} /></Link>
                                        <Link href={project.liveUrl} className="hover:text-gray-900 transition-colors"><Globe size={20} /></Link>
                                    </div>
                                </div>

                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Tech Icons Row */}
                                <div className="flex items-center gap-3 mt-2">
                                    {project.tech.map(t => (
                                        <div key={t} title={t}>
                                            {getTechIcon(t)}
                                        </div>
                                    ))}
                                </div>

                                {/* Status Pill */}
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
