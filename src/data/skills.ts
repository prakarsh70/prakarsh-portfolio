export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React 18", "JavaScript (ES6+)", "TypeScript", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Axios", "REST APIs", "Responsive Design", "Component Architecture"]
  },
  {
    category: "Testing & Quality",
    skills: ["Playwright", "React Testing Library", "TDD", "Jest"]
  },
  {
    category: "Tools",
    skills: ["Git", "Bitbucket", "JIRA", "Chrome DevTools", "GitHub Copilot"]
  },
  {
    category: "Process",
    skills: ["Agile/Scrum", "Waterfall", "Code Reviews", "Sprint Planning"]
  },
  {
    category: "UI/UX",
    skills: ["Figma", "Adobe XD", "Zeplin", "Wireframing", "Prototyping", "Accessibility (WCAG 2.1)"]
  }
];
