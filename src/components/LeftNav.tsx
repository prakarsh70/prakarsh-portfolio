import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Sparkles, Terminal, ArrowUpRight, FileText } from "lucide-react";

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const navItems = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Skills & Stack", href: "#skills", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export default function LeftNav() {
  const [activeSection, setActiveSection] = useState("about");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.35 },
    },
  };

  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto lg:self-start lg:flex lg:flex-col lg:justify-between px-6 py-8 lg:py-10 xl:py-12 lg:px-10 xl:px-12 border-b lg:border-b-0 lg:border-r border-slate-800/40 [scrollbar-width:thin] scrollbar-color-[rgba(30,41,59,0.5)_transparent]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {/* Status Pill Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4 w-fit shadow-sm">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Available for Senior / Architect Roles</span>
        </motion.div>

        {/* Name and headline */}
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
            Prakarsh
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-indigo-300">
              Shrivastava
            </span>
          </h1>
          <div className="flex items-center gap-2 mt-2.5">
            <Terminal className="w-4 h-4 text-teal-400 shrink-0" aria-hidden="true" />
            <h2 className="text-sm sm:text-base font-medium text-slate-200">
              Senior Frontend Engineer & UI Architect
            </h2>
          </div>
          <p className="text-xs font-mono tracking-wide text-teal-300 mt-1 uppercase">
            React · TypeScript · Design Systems · Enterprise SaaS
          </p>
        </motion.div>

        {/* Narrative hook */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 mt-4 max-w-sm leading-relaxed text-sm text-pretty font-light"
        >
          8+ years bridging high-craft design and deep enterprise engineering.
          Delivering mission-critical web applications for IBM Z/OS and mainframe administration teams.
        </motion.p>

        {/* Quick Micro-Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-2 mt-4 max-w-sm p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm"
        >
          <div className="text-center px-1">
            <div className="font-mono text-base sm:text-lg font-bold text-teal-300">8+ Yrs</div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Experience</div>
          </div>
          <div className="text-center px-1 border-x border-slate-800">
            <div className="font-mono text-base sm:text-lg font-bold text-cyan-300">2 GA</div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">z/OS Plugins</div>
          </div>
          <div className="text-center px-1">
            <div className="font-mono text-base sm:text-lg font-bold text-indigo-300">WCAG</div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">+30% A11y</div>
          </div>
        </motion.div>

        {/* Location & Design highlight */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-3.5 text-slate-300 text-xs">
          <span className="flex items-center gap-1.5 font-mono text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            Pune, India
          </span>
          <span className="h-3 w-px bg-slate-700" aria-hidden="true" />
          <span className="flex items-center gap-1 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            RISD Design Alum
          </span>
        </motion.div>

        {/* Interactive Desktop Navigation */}
        <nav className="hidden lg:block mt-6 xl:mt-8" aria-label="Main navigation">
          <ul className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex items-center gap-3 py-1.5 text-sm transition-all duration-300 ${
                      isActive
                        ? "text-teal-300 font-medium translate-x-1"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="font-mono text-[11px] text-slate-400 group-hover:text-teal-300 transition-colors">
                      {item.num}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
                          : "w-6 bg-slate-700 group-hover:w-10 group-hover:bg-slate-500"
                      }`}
                    />
                    <span className="tracking-wide text-xs uppercase font-medium">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>

      {/* Footer Area: Actions & Socials */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-6 pt-4 border-t border-slate-800/60"
      >
        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-teal-400 text-slate-950 hover:bg-teal-300 shadow-sm shadow-teal-500/20 hover:shadow-teal-500/40 transition-all active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all active:scale-95"
          >
            Experience
          </a>
          <a
            href="/resume.pdf"
            download="Prakarsh_Shrivastava_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Download Prakarsh Shrivastava's Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div variants={itemVariants} className="flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/prakarsh70"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-slate-800/90 transition-all"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/prakarsh-shrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-slate-800/90 transition-all"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:prakarsh.shrivastava70@gmail.com"
              className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-slate-800/90 transition-all"
              aria-label="Send direct email to Prakarsh"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <span className="font-mono text-xs text-slate-400">v2.0 · 2026</span>
        </motion.div>
      </motion.div>
    </header>
  );
}
