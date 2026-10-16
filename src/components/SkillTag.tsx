import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 text-slate-300 text-xs font-mono border border-slate-800 hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-950/20 shadow-sm cursor-default transition-colors group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
      {skill}
    </motion.span>
  );
}
