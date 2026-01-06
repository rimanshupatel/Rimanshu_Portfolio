"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Card } from "@/app/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "FitMind AI",
        category: "AI & Mental Health",
        description: "Award-winning mental health platform with real-time AI voice agent for cognitive support.",
        tech: ["Next.js", "Gemini 2.0", "Vapi AI", "TypeScript"],
        color: "bg-indigo-50",
        link: "#",
        github: "#"
    },
    {
        title: "Gameonix Esports",
        category: "Gaming Platform",
        description: "Scalable crowdfunding and esports platform with high-performance frontend architecture.",
        tech: ["Next.js", "Tailwind CSS", "Redux"],
        color: "bg-orange-50",
        link: "#",
        github: "#"
    },
    {
        title: "Gametosa",
        category: "E-Commerce",
        description: "Responsive React application with reusable components and efficient state management.",
        tech: ["React.js", "TypeScript", "Material UI"],
        color: "bg-blue-50",
        link: "#",
        github: "#"
    },
    {
        title: "Cognifyz",
        category: "Web Application",
        description: "Dynamic web solution with secure authentication and REST API integration.",
        tech: ["React", "Node.js", "MongoDB"],
        color: "bg-green-50",
        link: "#",
        github: "#"
    }
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Selected Work</h2>
                    <h3 className="text-3xl font-display font-semibold text-gray-900">
                        Digital craftsmanship.
                    </h3>
                </div>
                <a href="https://github.com/rimanshupatel" target="_blank" className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-1 hover:text-accent hover:border-accent transition-colors">
                    View all repositories
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <Card className="h-full p-4 hover:border-accent/40 bg-white/50 backdrop-blur-sm transition-all duration-300">
                            {/* Reduced padding wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 mb-5">
                                <div className={`absolute inset-0 ${project.color} opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out`} />
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:opacity-75 transition-opacity">
                                    <span className="font-display font-medium text-lg opacity-30">{project.title}</span>
                                </div>

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.link} className="p-2.5 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform">
                                        <ExternalLink size={18} />
                                    </a>
                                    <a href={project.github} className="p-2.5 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform">
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1 block">{project.category}</span>
                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">{project.title}</h4>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[10px] rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
