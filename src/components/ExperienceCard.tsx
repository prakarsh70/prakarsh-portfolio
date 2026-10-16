import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import type { Experience } from "../data/experience";
import SkillTag from "./SkillTag";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-10 pb-12 last:pb-2 group"
    >
      {/* Timeline track line with gradient highlight on hover */}
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-slate-800 group-hover:bg-gradient-to-b group-hover:from-teal-400 group-hover:via-cyan-400 group-hover:to-slate-800 transition-colors duration-500" />
      
      {/* Glowing timeline node */}
      <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-teal-400 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.8)] transition-all duration-300 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-teal-300 transition-colors" />
      </div>

      {/* Main Experience Card */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-teal-500/30 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-teal-950/20 transition-all duration-300 backdrop-blur-sm">
        
        {/* Header meta */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
              <Building2 className="w-4 h-4 text-teal-400 inline" />
              <span>{experience.company}</span>
            </h3>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-medium">
              {experience.role}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-mono text-slate-500 mt-1 sm:mt-0">
            <Calendar className="w-3.5 h-3.5 text-slate-600" />
            <span>{experience.period}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-5">
          <MapPin className="w-3.5 h-3.5 text-slate-600" />
          <span>{experience.location}</span>
        </div>

        {/* Projects / Core Deliverables */}
        <div className="space-y-4 mb-5">
          {experience.projects.map((project, pIndex) => (
            <div
              key={pIndex}
              className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{project.name}</span>
                </h4>
                {project.period && (
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.period}
                  </span>
                )}
              </div>
              
              <ul className="space-y-2 mt-2">
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-xs sm:text-sm text-slate-300/90 leading-relaxed flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400 mt-1 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2.5">
            Technologies & Tools
          </div>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <SkillTag key={tech} skill={tech} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
