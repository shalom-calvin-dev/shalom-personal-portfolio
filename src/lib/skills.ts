// Skill list as confirmed by the portfolio owner. No ratings or proficiency levels by design.
export type SkillIconKey =
  | "hexagon" | "atom" | "database" | "globe" | "shield" | "key" | "code" | "palette"
  | "table" | "spreadsheet" | "plug" | "bot" | "chart" | "zap" | "app" | "braces"
  | "storage" | "fingerprint" | "share" | "files" | "workflow" | "cloud" | "layers"
  | "server" | "sigma" | "logic";

export type Skill = {
  name: string;
  /** Lucide icon key. Used when no text mark is given. */
  icon?: SkillIconKey;
  /** Short text mark (monogram) used when no suitable icon exists. */
  mark?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: SkillIconKey;
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
      { name: "Node.js", icon: "hexagon" },
      { name: "Express.js", mark: "Ex" },
      { name: "REST APIs", icon: "globe" },
      { name: "C#", mark: "C#" },
      { name: ".NET", mark: "NET" },
      { name: "PostgreSQL", icon: "database" },
      { name: "RBAC", icon: "shield" },
      { name: "Authentication & Authorization", icon: "key" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "layers",
    skills: [
      { name: "React.js", icon: "atom" },
      { name: "Next.js", mark: "N" },
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", mark: "JS" },
      { name: "HTML", icon: "code" },
      { name: "CSS", icon: "palette" },
    ],
  },
  {
    id: "power-platform",
    title: "Microsoft Power Platform",
    icon: "workflow",
    skills: [
      { name: "Power Apps (Canvas & Model-Driven)", icon: "app" },
      { name: "Power Automate", icon: "zap" },
      { name: "Power Automate Desktop", icon: "bot" },
      { name: "Power BI", icon: "chart" },
      { name: "Dataverse", icon: "database" },
      { name: "Power Fx", icon: "sigma" },
      { name: "Custom Connectors", icon: "plug" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Integrations",
    icon: "cloud",
    skills: [
      { name: "Azure Functions", icon: "braces" },
      { name: "Azure Logic Apps", icon: "logic" },
      { name: "Azure Storage", icon: "storage" },
      { name: "Azure Identity", icon: "fingerprint" },
      { name: "Microsoft Graph API", icon: "share" },
      { name: "SharePoint", icon: "files" },
      { name: "Third-party API Integrations", icon: "plug" },
    ],
  },
  {
    id: "programming-data",
    title: "Programming & Data",
    icon: "braces",
    skills: [
      { name: "Python", mark: "Py" },
      { name: "Pandas", icon: "table" },
      { name: "SQL", icon: "database" },
      { name: "MongoDB", icon: "database" },
      { name: "Excel Automation", icon: "spreadsheet" },
    ],
  },
];
