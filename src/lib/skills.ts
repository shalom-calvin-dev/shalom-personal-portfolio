// Skill list as confirmed by the portfolio owner. No ratings or proficiency levels by design.
// Icons (brand logos or original illustrations) are resolved by name from src/lib/brand-icons.ts;
// skills without a matching icon are shown as text only.
export type CategoryIconKey = "server" | "layers" | "workflow" | "cloud" | "braces";

export type Skill = { name: string };

export type SkillCategory = {
  id: string;
  title: string;
  icon: CategoryIconKey;
  skills: readonly Skill[];
};

export const skillsSection = {
  eyebrow: "Technical Skills",
  heading: "The tools and technologies I work with",
} as const;

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "C#" },
      { name: ".NET" },
      { name: "PostgreSQL" },
      { name: "Authentication & Authorization" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "layers",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "power-platform",
    title: "Microsoft Power Platform",
    icon: "workflow",
    skills: [
      { name: "Power Apps (Canvas & Model-Driven)" },
      { name: "Power Automate" },
      { name: "Power BI" },
      { name: "Power Automate Desktop" },
      { name: "Dataverse" },
      { name: "Power Fx" },
      { name: "Custom Connectors" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Integrations",
    icon: "cloud",
    skills: [
      { name: "Azure Functions" },
      { name: "Azure Logic Apps" },
      { name: "Azure Storage" },
      { name: "Azure Identity" },
      { name: "Microsoft Graph API" },
      { name: "SharePoint" },
      { name: "Third-party API Integrations" },
    ],
  },
  {
    id: "programming-data",
    title: "Programming & Data",
    icon: "braces",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Excel Automation" },
    ],
  },
];
