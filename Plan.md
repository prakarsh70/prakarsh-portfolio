Role & Goal:
Act as an Expert UX Designer and Senior Frontend Engineer. Build a fast, deployable, single-page personal portfolio website for my active job search[span_1](start_span)[span_1](end_span). Do not give me a separate design phase—generate production-ready code immediately using React, TypeScript, and Tailwind CSS[span_2](start_span)[span_2](end_span). Use `framer-motion` for subtle animations and `lucide-react` for icons.

Design System & Layout:
*   Layout Structure: Implement a single-page site with a split-screen desktop layout[span_3](start_span)[span_3](end_span). The left half should be a `sticky` fixed container holding the Hero section, a short bio, and a navigation menu[span_4](start_span)[span_4](end_span). The right half should be a scrollable column containing the About, Experience, Skills, and Contact sections[span_5](start_span)[span_5](end_span). On mobile, stack into a single column.
*   Color Palette: Modern dark theme. Use deep slate for the background, off-white for primary text, and a vibrant accent (e.g., Teal) for hover states and skill tags.
*   Accessibility: Ensure 100% WCAG 2.1 AA compliance[span_6](start_span)[span_6](end_span). Use semantic HTML5 elements and ensure all interactive elements are keyboard navigable.

Architecture:
Break the UI down into modular React components:
*   LeftNav (Sticky Sidebar)
*   AboutSection
*   ExperienceCard (Reusable component mapping over an array of job data)
*   SkillTag (Reusable component for grouped tag clusters)[span_7](start_span)[span_7](end_span)

Content Payload:

1. Hero / Left Navigation Section
*   Name: Prakarsh Shrivastava[span_8](start_span)[span_8](end_span)
*   Title: Senior Frontend Engineer — React, TypeScript, Enterprise SaaS[span_9](start_span)[span_9](end_span)
*   Hook: "Nearly 8 years building production SPAs and enterprise SaaS for large-scale IBM Z/OS and mainframe administration teams.[span_10](start_span)"[span_10](end_span)
*   Location: Pune, India[span_11](start_span)[span_11](end_span)
*   CTAs: View Experience, Contact Me, Download Resume[span_12](start_span)[span_12](end_span). Optional: Include GitHub and LinkedIn icons[span_13](start_span)[span_13](end_span).

2. About Section
Frontend Engineer with nearly 8 years of experience designing and shipping production Single Page Applications and enterprise SaaS products used by large-scale IBM Z/OS and mainframe administration teams[span_14](start_span)[span_14](end_span). Deep expertise across the full SDLC — requirements, architecture, development, testing and delivery — with a strong track record in TypeScript, REST APIs, and accessibility-first UI design[span_15](start_span)[span_15](end_span). Comfortable owning frontend features end-to-end, from Figma wireframes through automated testing to General Availability release, in both Agile and Waterfall environments[span_16](start_span)[span_16](end_span).
*   Highlight: Completed a Strategic Design Program at Rhode Island School of Design (Jan–Mar 2019), reinforcing a design-to-code strength that's rare for a frontend engineer[span_17](start_span)[span_17](end_span).
*   Key Achievements: Subject Matter Expert (SME) for multiple core features on the IBM Z/OS platform, delivered two z/OS plugins to General Availability, improved accessibility compliance by ~30% (WCAG 2.1), team finalist in Rocket Software's "Rocket Build", and mentors junior developers[span_18](start_span)[span_18](end_span).

3. Experience Section 
(Render these as LinkedIn-style connected, clickable cards, newest first)[span_19](start_span)[span_19](end_span)
*   Rocket Software | Software Engineer II (Frontend) | Jul 2021 – Present | Pune, India[span_20](start_span)[span_20](end_span)
    *   Delivered two IBM Z/OS mainframe administration plugins, both taken to General Availability[span_21](start_span)[span_21](end_span).
    *   Db2 Unified UI Plugin (Jul 2023 – Present): Owned frontend end-to-end (UX design to production)[span_22](start_span)[span_22](end_span). Became the go-to CI/CD workflow expert for Db2 DDL changes[span_23](start_span)[span_23](end_span). Improved accessibility by ~30% (WCAG 2.1)[span_24](start_span)[span_24](end_span). Used GitHub Copilot to accelerate development[span_25](start_span)[span_25](end_span).
    *   IMS Plugin Tool (Jul 2021 – Jul 2023): Contributed core frontend development on an interactive Unified UI[span_26](start_span)[span_26](end_span). Owned test strategy: end-to-end Playwright automation suites with React Testing Library[span_27](start_span)[span_27](end_span). Implemented Carbon Components design system[span_28](start_span)[span_28](end_span).
    *   Tech: React, TypeScript, Tailwind CSS, Redux, Playwright, React Testing Library, Carbon Components, Figma, GitHub Copilot[span_29](start_span)[span_29](end_span).
*   Infosys | System Engineer | Sep 2018 – Jul 2021 | Pune, India[span_30](start_span)[span_30](end_span)
    *   Intel: Built two React.js tools (Admin and User) for license management using Kendo Grid and Redux Hooks[span_31](start_span)[span_31](end_span). Partnered directly with Intel stakeholders[span_32](start_span)[span_32](end_span).
    *   BUPA Health Insurance: Led the frontend rebuild, reverse-engineering the legacy portal[span_33](start_span)[span_33](end_span). Ran daily design reviews in Figma/Zeplin and shipped on an Agile cadence[span_34](start_span)[span_34](end_span).
    *   Tech: React, Redux, Kendo Grid, Figma, Zeplin, Agile[span_35](start_span)[span_35](end_span).

4. Skills Section
(Render as grouped tag clusters, not a flat list)[span_36](start_span)[span_36](end_span)
*   Frontend: React 18, JavaScript (ES6+), TypeScript, Redux, HTML5, CSS3, Tailwind CSS, Axios, REST APIs, Responsive Design, Component Architecture[span_37](start_span)[span_37](end_span)
*   Testing & Quality: Playwright, React Testing Library, TDD, Jest[span_38](start_span)[span_38](end_span)
*   Tools: Git, Bitbucket, JIRA, Chrome DevTools, GitHub Copilot[span_39](start_span)[span_39](end_span)
*   Process: Agile/Scrum, Waterfall, Code Reviews, Sprint Planning[span_40](start_span)[span_40](end_span)
*   UI/UX: Figma, Adobe XD, Zeplin, Wireframing, Prototyping, Accessibility (WCAG 2.1)[span_41](start_span)[span_41](end_span)

5. Contact Section
*   Email: prakarsh.shrivastava70@gmail.com[span_42](start_span)[span_42](end_span)
*   LinkedIn: linkedin.com/in/prakarsh-shrivastava[span_43](start_span)[span_43](end_span)
*   Location: Pune, India[span_44](start_span)[span_44](end_span)
*   Render a simple contact form or a low-friction `mailto:` button[span_45](start_span)[span_45](end_span). Keep it easy for recruiters[span_46](start_span)[span_46](end_span).

Build Notes: Scaffold the layout (left nav + section shells) first, then fill content section by section in the order above, then polish responsiveness and accessibility[span_47](start_span)[span_47](end_span).
