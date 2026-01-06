"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Section } from "@/app/components/ui/LayoutComponents";
import { Button } from "@/app/components/ui/Button";
import { Input, TextArea } from "@/app/components/ui/Input";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/app/components/ui/Card";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <Section id="contact" className="bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Contact</h2>
                    <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">
                        Let's create something <br /> extraordinary together.
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Whether you have a project in mind, need a consultation, or just want to chat about AI and frontend tech, I'm just a message away.
                    </p>

                    <div className="space-y-6">
                        <Card className="flex items-center gap-4 p-4 hover:border-accent/50 transition-colors">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <a href="mailto:rimanshupatel1@gmail.com" className="font-medium text-gray-900 hover:text-accent transition-colors">
                                    rimanshupatel1@gmail.com
                                </a>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-4 p-4 hover:border-accent/50 transition-colors">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <a href="tel:+916205534921" className="font-medium text-gray-900 hover:text-accent transition-colors">
                                    +91-6205534921
                                </a>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-4 p-4 hover:border-accent/50 transition-colors">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium text-gray-900">
                                    Kolkata, West Bengal, India
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div>
                                <Input
                                    label="Name"
                                    {...register("name")}
                                    className={errors.name ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Input
                                    label="Email"
                                    type="email"
                                    {...register("email")}
                                    className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <TextArea
                                    label="Message"
                                    rows={4}
                                    {...register("message")}
                                    className={errors.message ? "border-red-500 focus:border-red-500" : ""}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting} disabled={isSubmitting || isSuccess}>
                                {isSuccess ? "Message Sent!" : "Send Message"}
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
