import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code, CheckSquare, Wrench, GitBranch, Layout, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";
import { skillGroups } from "../data/skills";

const categoryIcons: Record<string, typeof Code> = {
  "Frontend": Code,
  "Testing & Quality": CheckSquare,
  "Tools": Wrench,
  "Process": GitBranch,
  "UI/UX": Layout,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const categories = ["All", ...skillGroups.map((g) => g.category)];
  const filteredGroups = selectedCategory === "All"
    ? skillGroups
    : skillGroups.filter((g) => g.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.35 },
    },
  };

  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <SectionHeading number="03" title="Skills & Architecture" />

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6" role="tablist" aria-label="Skill category filter">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all active:scale-95 ${
                isSelected
                  ? "bg-teal-400 text-slate-950 font-semibold shadow-sm shadow-teal-500/30"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat === "All" && <Sparkles className="w-3 h-3 inline mr-1 text-inherit" aria-hidden="true" />}
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        {filteredGroups.map((group) => {
          const Icon = categoryIcons[group.category] || Code;
          return (
            <motion.div
              key={group.category}
              variants={groupVariants}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-800/80">
                <div className="p-1.5 rounded-md bg-teal-500/10 text-teal-400">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                  {group.category}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 ml-auto">
                  {group.skills.length} techs
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
