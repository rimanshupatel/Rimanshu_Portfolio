import { Hero } from "@/app/components/sections/Hero";
import { TechStack } from "@/app/components/sections/TechStack";
import { About } from "@/app/components/sections/About";
import { Projects } from "@/app/components/sections/Projects";
import { Experience } from "@/app/components/sections/Experience";
import { Services } from "@/app/components/sections/Services";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { Contact } from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <section className="w-full min-h-screen text-white relative">

      {/* 🔹 Fixed Background Blobs (GLOBAL) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-light/20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[100px]" />
      </div>
      {/* 🔹 Global Content Wrapper */}
      <div className="relative max-w-4xl mx-auto "></div>





      {/* 🔹 SECTIONS */}
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />


    </section>
  );
}
