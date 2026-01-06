"use client";

import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Button } from "@/app/components/ui/Button";
import { Download } from "lucide-react";

export function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-100 shadow-large relative group">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                            {/* Replace with actual image */}
                            <span className="text-sm font-medium">Professional Photo</span>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">About Me</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                        Designing clarity out of <br /> complex problems.
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I'm a final year Computer Science student at Brainware University, specializing in AI and Machine Learning.
                        My journey bridges the gap between sophisticated frontend engineering and powerful AI integrations.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        With experience at Gameonix and Cognifyz, I've honed my skills in Next.js, TypeScript, and scalable architecture.
                        I believe in software that feels natural, intuitive, and premium.
                    </p>

                    <div className="grid grid-cols-3 gap-8 mb-10 border-t border-gray-100 pt-8">
                        <div>
                            <h4 className="text-3xl font-display font-bold text-gray-900">3+</h4>
                            <p className="text-sm text-gray-500 mt-1">Years Coding</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-display font-bold text-gray-900">10+</h4>
                            <p className="text-sm text-gray-500 mt-1">Projects Built</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-display font-bold text-gray-900">1st</h4>
                            <p className="text-sm text-gray-500 mt-1">Hack4Bihar '25</p>
                        </div>
                    </div>

                    <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download Resume
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
