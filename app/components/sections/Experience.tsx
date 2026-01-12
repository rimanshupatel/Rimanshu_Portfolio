"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Card } from "@/app/components/ui/Card";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "Gameonix Esports & Gaming",
        period: "April 2025 - Present",
        location: "Remote",
        description: [
            "Redesigned core frontend components using Next.js and TypeScript.",
            "Enhanced UI/UX workflows and maintained a modular design system."
        ],
    },
    {
        role: "Frontend Developer Intern",
        company: "GAMETOSA ESPORTS",
        period: "April 2025 - June 2025",
        location: "Remote",
        description: [
            "Developed responsive React.js features.",
            "Engineered reusable TypeScript UI components with Tailwind CSS."
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Cognifyz Technologies",
        period: "May 2025 - Aug 2025",
        location: "Remote",
        description: [
            "Built responsive UIs with Bootstrap & JS.",
            "Developed REST APIs with Express.js and MongoDB integration."
        ],
    }
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
        >
            <div className="absolute top-0 left-[-5px] md:left-[-37px] w-3 h-3 bg-white border-2 border-accent rounded-full z-10" />

            <Card className="hover:border-accent/30 transition-colors">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-2">
                    <div>
                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                        <span className="text-accent font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-2">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-2"
                >
                    {isOpen ? "Show Less" : "Know More"}
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
            </Card>
        </motion.div>
    );
};

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
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
