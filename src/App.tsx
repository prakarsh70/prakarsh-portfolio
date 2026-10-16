import LeftNav from "./components/LeftNav";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Spotlight from "./components/Spotlight";
import MobileNav from "./components/MobileNav";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080d1a] text-slate-200 selection:bg-teal-500/30 selection:text-teal-200">
      {/* Dynamic Cursor Spotlight Effect (Zero re-renders) */}
      <Spotlight />

      {/* Ambient gradient orbs */}
      <div
        className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed top-[40%] right-[15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0"
        aria-hidden="true"
      />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-400 focus:text-slate-950 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg focus:ring-2 focus:ring-teal-300"
      >
        Skip to content
      </a>

      <div className="relative z-10 lg:grid lg:grid-cols-[44%_56%] lg:items-start max-w-7xl mx-auto min-h-screen">
        <LeftNav />
        <main
          id="main-content"
          className="px-6 py-12 lg:py-20 lg:px-12 xl:px-16"
          tabIndex={-1}
        >
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>

      {/* Floating navigation on mobile/tablet */}
      <MobileNav />
    </div>
  );
}
