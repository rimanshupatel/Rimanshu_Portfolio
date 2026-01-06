"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Card } from "@/app/components/ui/Card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "Gameonix Esports & Gaming",
        period: "April 2025 - Present",
        location: "Remote",
        description: "Redesigned core frontend components using Next.js and TypeScript. Enhanced UI/UX workflows and maintained a modular design system.",
    },
    {
        role: "Frontend Developer Intern",
        company: "GAMETOSA ESPORTS",
        period: "April 2025 - June 2025",
        location: "Remote",
        description: "Developed responsive React.js features and engineered reusable TypeScript UI components with Tailwind CSS.",
    },
    {
        role: "Full Stack Developer",
        company: "Cognifyz Technologies",
        period: "May 2025 - Aug 2025",
        location: "Remote",
        description: "Built responsive UIs with Bootstrap & JS. Developed REST APIs with Express.js and MongoDB integration.",
    }
];

export function Experience() {
    return (
        <Section id="experience" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Experience</h2>
                <h3 className="text-4xl font-display font-bold text-gray-900">
                    Professional Journey
                </h3>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:pl-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="absolute top-0 left-[-5px] md:left-[-37px] w-3 h-3 bg-white border-2 border-accent rounded-full z-10" />

                            <Card className="hover:border-accent/30 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                                        <span className="text-accent font-medium">{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="mt-4 flex items-center gap-1 text-sm text-gray-400">
                                    <MapPin className="w-3 h-3" />
                                    {exp.location}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
