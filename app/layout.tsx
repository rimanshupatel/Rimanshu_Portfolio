import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { CustomCursor, ScrollProgress } from "@/app/components/ui/LayoutComponents";
import { Preloader } from "@/app/components/ui/Preloader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rimanshu Pratap Singh | Software Engineer & AI Enthusiast",
  description: "Premium personal portfolio of Rimanshu Pratap Singh, an aspiring software engineer passionate about scalable systems and AI-driven applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          poppins.variable,
          jetbrainsMono.variable,
          "antialiased bg-primary-50 text-gray-900 font-sans selection:bg-accent/20 selection:text-accent"
        )}
      >
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
