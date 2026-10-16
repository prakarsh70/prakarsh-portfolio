import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, ease: "easeOut" }}
      className="flex items-center gap-3 mb-8 lg:mb-10 group"
    >
      {number && (
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-teal-500/40 bg-teal-950/50 text-teal-300 tracking-wider">
          {number}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-3 font-['Plus_Jakarta_Sans',sans-serif]">
        <span>{title}</span>
      </h2>
      <div
        className="h-px flex-1 bg-gradient-to-r from-teal-500/40 via-slate-700/60 to-transparent ml-2"
        aria-hidden="true"
      />
    </motion.div>
  );
}
