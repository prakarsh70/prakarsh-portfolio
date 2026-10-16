import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <SectionHeading number="02" title="Work Experience" />
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
