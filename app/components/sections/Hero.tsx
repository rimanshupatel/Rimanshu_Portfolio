"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  pt-20">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-light/20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[100px]" />
      </div>
      <div className="container px-4 md:px-6 z-10 text-center flex flex-col items-center">
        {/* Profile Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 mb-6 shadow-soft flex items-center justify-center overflow-hidden border-4 border-white"
        >
          {/* Replace with actual image */}
          <span className="text-gray-400 font-medium">Profile</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >


          <span className="text-xl md:text-2xl font-medium text-gray-700">
            Hii, I'm Rimanshu <span className="inline-block animate-wave">👋🏻</span>
          </span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-1"
        >
          {/* Pulse Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          AI Enthusiast
        </motion.span>


        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900 tracking-tight leading-[1.15] mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          Building Digital <br />
          <span className="text-gray-400">Masterpieces.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I'm Rimanshu Pratap Singh, a software engineer crafting rigorous, scalable, and premium web experiences driven by artificial intelligence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button size="md" className="rounded-full px-8 shadow-medium hover:shadow-lg transition-all transform hover:-translate-y-1" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' })}>
            View Work
          </Button>
          <Button variant="outline" size="md" className="rounded-full px-8 bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-white transition-all transform hover:-translate-y-1" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}