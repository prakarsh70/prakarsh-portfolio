import { useState, useEffect } from "react";
import LeftNav from "./components/LeftNav";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080d1a] text-slate-200 selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.075), transparent 80%)`,
        }}
      />

      {/* Ambient gradient orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] right-[15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      {/* Skip to content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-slate-900 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <div className="relative z-10 lg:grid lg:grid-cols-[44%_56%] max-w-7xl mx-auto min-h-screen">
        <LeftNav />
        <main className="px-6 py-12 lg:py-20 lg:px-12 xl:px-16">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
