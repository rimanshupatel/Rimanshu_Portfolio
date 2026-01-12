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
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>

  );
}
