export interface Project {
  name: string;
  period?: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Rocket Software",
    role: "Software Engineer II (Frontend)",
    period: "Jul 2021 – Present",
    location: "Pune, India",
    projects: [
      {
        name: "Db2 Unified UI Plugin",
        period: "Jul 2023 – Present",
        bullets: [
          "Owned frontend end-to-end — from UX design in Figma through development to production release",
          "Became the go-to CI/CD workflow expert for Db2 DDL changes",
          "Improved accessibility compliance by ~30% (WCAG 2.1 AA)",
          "Leveraged GitHub Copilot to accelerate development velocity"
        ]
      },
      {
        name: "IMS Plugin Tool",
        period: "Jul 2021 – Jul 2023",
        bullets: [
          "Contributed core frontend development on an interactive Unified UI for mainframe administration",
          "Owned test strategy: designed end-to-end Playwright automation suites with React Testing Library",
          "Implemented Carbon Components design system across the application"
        ]
      }
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Playwright", "React Testing Library", "Carbon Components", "Figma", "GitHub Copilot"]
  },
  {
    company: "Infosys",
    role: "System Engineer",
    period: "Sep 2018 – Jul 2021",
    location: "Pune, India",
    projects: [
      {
        name: "Intel — License Management Tools",
        bullets: [
          "Built two React.js tools (Admin and User) for license management using Kendo Grid and Redux Hooks",
          "Partnered directly with Intel stakeholders on requirements and delivery"
        ]
      },
      {
        name: "BUPA Health Insurance — Portal Rebuild",
        bullets: [
          "Led the frontend rebuild, reverse-engineering the legacy portal into a modern React application",
          "Ran daily design reviews in Figma/Zeplin and shipped on an Agile cadence"
        ]
      }
    ],
    tech: ["React", "Redux", "Kendo Grid", "Figma", "Zeplin", "Agile"]
  }
];
