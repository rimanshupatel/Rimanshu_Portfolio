"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Code2, Database, Layout, Terminal } from "lucide-react";
import { Card } from "@/app/components/ui/Card";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="w-6 h-6 text-blue-500" />,
        skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
    },
    {
        title: "Backend & Systems",
        icon: <Terminal className="w-6 h-6 text-green-500" />,
        skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "Auth.js (NextAuth)", "Serverless"],
    },
    {
        title: "Database & Cloud",
        icon: <Database className="w-6 h-6 text-purple-500" />,
        skills: ["MongoDB", "PostgreSQL", "Prisma", "Supabase", "Neon DB", "Convex"],
    },
    {
        title: "Tools & DevOps",
        icon: <Code2 className="w-6 h-6 text-orange-500" />,
        skills: ["Git", "VS Code", "Vercel", "Stripe", "Docker", "Figma"],
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-gray-50/50">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-display font-bold text-gray-900 mb-4"
                >
                    Technical Arsenal
                </motion.h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A curated stack of modern technologies I use to build scalable, high-performance applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full">
                            <div className="mb-4 bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-sm text-gray-600 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
