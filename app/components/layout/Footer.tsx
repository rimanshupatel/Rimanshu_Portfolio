import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">
                            Rimanshu<span className="text-accent">.</span>
                        </h3>
                        <p className="text-gray-500 mt-2 max-w-xs">
                            Crafting premium digital experiences with code and creativity.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com/rimanshupatel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:rimanshupatel1@gmail.com" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-8 border-t border-gray-200">
                    <p>© {currentYear} Rimanshu Pratap Singh. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
