import { motion } from "framer-motion";
import { Code, CheckSquare, Wrench, GitBranch, Layout } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";
import { skillGroups } from "../data/skills";

const categoryIcons: Record<string, any> = {
  "Frontend": Code,
  "Testing & Quality": CheckSquare,
  "Tools": Wrench,
  "Process": GitBranch,
  "UI/UX": Layout,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-24 scroll-mt-24">
      <SectionHeading number="03" title="Skills & Architecture" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-6"
      >
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.category] || Code;
          return (
            <motion.div
              key={group.category}
              variants={groupVariants}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-800/60">
                <div className="p-1.5 rounded-md bg-teal-500/10 text-teal-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 ml-auto">
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
