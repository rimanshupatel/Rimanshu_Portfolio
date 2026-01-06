"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Card } from "@/app/components/ui/Card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

const testimonials = [
    {
        name: "Alex Morgan",
        role: "Product Manager",
        company: "TechFlow",
        quote: "Rimanshu translated our complex requirements into a seamless, high-performance web application. The attention to detail is unmatched.",
        rating: 5,
    },
    {
        name: "Sarah Chen",
        role: "Founder",
        company: "StartUp Inc",
        quote: "Working with Rimanshu was a breeze. He brought fresh ideas to the table and delivered ahead of schedule. The UI is simply stunning.",
        rating: 5,
    },
    {
        name: "David Smith",
        role: "CTO",
        company: "NextGen Sol",
        quote: "Exceptional coding standards and a deep understanding of modern frontend architectures. Highly recommended for premium projects.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Design Lead",
        company: "Creative Studio",
        quote: "He has a designer's eye for detail, which is rare for a developer. The animations and micro-interactions elevate the user experience completely.",
        rating: 5,
    }
];

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
        AutoScroll({ delay: 3000, stopOnInteraction: false, rootNode: (emblaRoot) => emblaRoot.parentElement as HTMLElement })
    ]);

    return (
        <Section className="bg-white overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Testimonials</h2>
                <h3 className="text-3xl font-display font-semibold text-gray-900">
                    Client Success Stories
                </h3>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex -ml-6 items-stretch">
                        {testimonials.concat(testimonials).map((testimonial, index) => (
                            <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-6 py-4">
                                <Card className="h-full flex flex-col justify-between p-6 hover:scale-105 transition-transform duration-300 border-gray-100 shadow-soft">
                                    <div>
                                        <Quote className="w-6 h-6 text-accent/20 mb-3" />
                                        <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{testimonial.quote}"</p>
                                    </div>
                                    <div className="border-t border-gray-50 pt-4 mt-auto">
                                        <div className="flex gap-0.5 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                                            ))}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                            <p className="text-xs text-gray-400">{testimonial.role}, {testimonial.company}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
