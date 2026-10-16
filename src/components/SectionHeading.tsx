import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-3 mb-8 lg:mb-10 group"
    >
      {number && (
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-teal-500/30 bg-teal-950/40 text-teal-400 tracking-wider">
          {number}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
        <span>{title}</span>
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-teal-500/30 via-slate-700/50 to-transparent ml-2" />
    </motion.div>
  );
}
