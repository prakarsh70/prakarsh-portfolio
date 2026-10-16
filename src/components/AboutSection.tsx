
import { motion } from "framer-motion";
import { Award, CheckCircle2, Code2, Palette, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    title: "z/OS Platform SME",
    desc: "Subject Matter Expert for core IBM Z/OS mainframe admin features.",
    icon: ShieldCheck,
    tag: "IBM Z/OS",
  },
  {
    title: "General Availability Release",
    desc: "Shipped 2 complex enterprise z/OS plugins from wireframes to GA.",
    icon: Zap,
    tag: "Delivery",
  },
  {
    title: "+30% WCAG 2.1 Compliance",
    desc: "Led accessibility architectural revamp across mainframe interfaces.",
    icon: CheckCircle2,
    tag: "A11y",
  },
  {
    title: "Rocket Build Finalist",
    desc: "Selected as team finalist in Rocket Software's global hackathon.",
    icon: Award,
    tag: "Innovation",
  },
];

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

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-24">
      <SectionHeading number="01" title="About & Craft" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        {/* Narrative Introduction */}
        <motion.div variants={itemVariants} className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
          <p>
            I'm a Frontend Engineer with <span className="text-white font-medium">nearly 8 years of experience</span> architecting and shipping mission-critical Single Page Applications and enterprise SaaS for massive-scale <span className="text-teal-300 font-mono text-xs px-1.5 py-0.5 rounded bg-teal-950/60 border border-teal-500/30">IBM Z/OS</span> environments.
          </p>
          <p className="text-slate-400">
            I specialize in bridging the gap between rigorous systems-level performance (TypeScript, state management, automated Playwright test suites) and human-centered, accessible UX. Whether working with complex mainframe telemetry or crafting design tokens, I thrive when taking ambiguity from a Figma canvas all the way through to zero-defect General Availability.
          </p>
        </motion.div>

        {/* Featured RISD Design Hero Card */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-teal-950/20 border border-teal-500/20 p-6 shadow-xl"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] tracking-wider uppercase text-teal-400 font-semibold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                  Design-to-Code Edge
                </span>
                <span className="text-xs text-slate-500">Jan – Mar 2019</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Rhode Island School of Design (RISD)
              </h3>
              <p className="text-xs text-teal-300/80 font-mono mb-2">
                Strategic Design Program
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Formal design education that distinguishes my engineering approach: deep understanding of visual hierarchy, ergonomics, typography, and UX heuristics that transforms raw enterprise APIs into intuitive consumer-grade interfaces.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements Bento Grid */}
        <motion.div variants={itemVariants} className="pt-2">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-teal-400" />
            <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400">
              High-Impact Milestones
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-teal-500/30 hover:bg-slate-850/60 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-teal-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-teal-400 transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
