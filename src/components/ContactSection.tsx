import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "prakarsh.shrivastava70@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      <SectionHeading number="04" title="Get In Touch" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-teal-950/20 border border-slate-800/80 shadow-2xl backdrop-blur-md"
        >
          {/* Ambient decorative glow inside card */}
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold mb-2 block">
              Direct Channel
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Let's create something exceptional together.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-lg mb-8">
              Whether you're hiring for a Senior Frontend, UI Architect, or Design-Systems role, or looking for consultation on large-scale SPA architecture, my inbox is open.
            </p>

            {/* Email Bar with Quick Copy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
              <div className="flex items-center gap-3 px-3 py-2 flex-1 min-w-0">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                  {email}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-teal-400 text-slate-950 hover:bg-teal-300 text-xs font-semibold shadow-sm transition-all active:scale-95"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <a
                href="https://linkedin.com/in/prakarsh-shrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-slate-500" />
                <span>linkedin.com/in/prakarsh-shrivastava</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Pune, India</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer Credit & Status */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-4 font-mono gap-2"
        >
          <p>
            Designed & Engineered by <span className="text-slate-300">Prakarsh Shrivastava</span>
          </p>
          <p className="text-[11px] text-slate-600">
            React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
