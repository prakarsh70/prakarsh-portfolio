import { motion, useReducedMotion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  isHighlighted?: boolean;
}

export default function SkillTag({ skill, isHighlighted }: SkillTagProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      tabIndex={0}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono border transition-all cursor-default select-none focus-visible:outline-2 focus-visible:outline-teal-400 ${
        isHighlighted
          ? "bg-teal-500/20 text-teal-200 border-teal-400 shadow-sm shadow-teal-500/30"
          : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-950/20 shadow-sm"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isHighlighted ? "bg-teal-300" : "bg-slate-600 group-hover:bg-teal-400"
        }`}
        aria-hidden="true"
      />
      {skill}
    </motion.span>
  );
}
