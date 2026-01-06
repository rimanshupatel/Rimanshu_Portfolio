"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Check } from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        price: "From $500",
        description: "Pixel-perfect, responsive websites built with Next.js and Tailwind CSS.",
        features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Component Library"],
    },
    {
        title: "Full Stack Application",
        price: "From $1200",
        description: "Scalable web applications with secure backend and database integration.",
        features: ["API Development", "Database Architecture", "Authentication", "Admin Dashboard"],
        popular: true,
    },
    {
        title: "UI/UX Design Implementation",
        price: "From $800",
        description: "Turning Figma designs into interactive, high-fidelity React components.",
        features: ["Design System Setup", "Interactive Prototyping", "Animation Integration", "Accessibility Check"],
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-gray-50/50">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Services</h2>
                <h3 className="text-4xl font-display font-bold text-gray-900">
                    Tailored Solutions
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`h-full flex flex-col relative ${service.popular ? 'border-accent shadow-medium' : ''}`}>
                            {service.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-3xl font-display font-bold text-gray-900 mb-4">{service.price}</p>
                            <p className="text-gray-500 mb-6 flex-grow">{service.description}</p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-accent" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant={service.popular ? 'primary' : 'outline'} className="w-full">
                                Get Started
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
