import { experience } from "./experience";

// Titles and descriptions come from experience.ts (single source of truth).
// Tags are only added where the technology is confirmed.
export type ProjectIconKey =
  | "clipboard" | "calendar" | "review" | "merge" | "wallet"
  | "health" | "users" | "dashboard" | "report" | "trophy";

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  /** Display title. */
  name: string;
  description: string;
  icon: ProjectIconKey;
  /** Domain label, only where supported by the project details. */
  domain?: string;
  /** Anonymized client description for confidential client work. Never the client's real name. */
  client?: string;
  /** "professional" = delivered for an employer; "personal" = public/personal project. */
  kind: "professional" | "personal";
  /** Employer, for professional projects. */
  organization?: string;
  featured?: boolean;
  tags: readonly string[];
  /** Only add real, verified URLs. Buttons render only when links exist. */
  links?: readonly ProjectLink[];
};

const employerProjects =
  experience.find((e) => e.id === "star-knowledge-ventures")?.projects ?? [];

function source(id: string) {
  const match = employerProjects.find((p) => p.id === id);
  if (!match) throw new Error(`Project "${id}" not found in experience.ts`);
  return { name: match.name, description: match.description };
}

const employer = "Star Knowledge Ventures";

export const projectsSection = {
  eyebrow: "Projects",
  heading: "Selected work",
  intro:
    "Applications and automation solutions I've built as a Software Engineer at Star Knowledge Ventures.",
} as const;

export const projects: readonly Project[] = [
  {
    id: "customer-management",
    ...source("customer-management"),
    icon: "users",
    kind: "professional",
    organization: employer,
    featured: true,
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "admin-management",
    ...source("admin-management"),
    icon: "dashboard",
    domain: "Administration",
    kind: "professional",
    organization: employer,
    featured: true,
    tags: ["Next.js", "shadcn/ui", "Node.js"],
  },
  {
    id: "sports-scoring",
    ...source("sports-scoring"),
    icon: "trophy",
    domain: "Sports",
    kind: "professional",
    organization: employer,
    featured: true,
    tags: ["Node.js", "RTMP"],
  },
  {
    id: "quarter-end-close",
    ...source("quarter-end-close"),
    icon: "review",
    domain: "Finance",
    client: "Global Manufacturing Company",
    kind: "professional",
    organization: employer,
    featured: true,
    tags: [
      "Power Apps",
      "Power Fx",
      "SharePoint",
      "Power Automate",
      "Azure Functions",
      "Azure Blob Storage",
      "Office 365 Connectors",
    ],
  },
  {
    id: "site-visitor",
    ...source("site-visitor"),
    icon: "clipboard",
    domain: "Civil Engineering",
    kind: "professional",
    organization: employer,
    tags: ["Power Apps", "Power Automate"],
  },
  {
    id: "leave-portal",
    ...source("leave-portal"),
    icon: "calendar",
    domain: "HR",
    kind: "professional",
    organization: employer,
    tags: ["Power Apps", "Power Automate"],
  },
  {
    id: "performance-evaluation",
    ...source("performance-evaluation"),
    icon: "review",
    domain: "HR",
    kind: "professional",
    organization: employer,
    tags: ["Power Apps", "Power Automate"],
  },
  {
    id: "data-integration",
    ...source("data-integration"),
    icon: "merge",
    kind: "professional",
    organization: employer,
    tags: ["Power Apps", "Power Automate Desktop", "Scheduled Power Automate", "Power BI"],
  },
  {
    id: "financial",
    ...source("financial"),
    icon: "wallet",
    domain: "Finance",
    kind: "professional",
    organization: employer,
    tags: [
      "Power Apps",
      "Power BI",
      "Power Automate Cloud",
      "Power Automate Desktop (RPA)",
      "Python",
    ],
  },
  {
    id: "osd",
    ...source("osd"),
    icon: "health",
    domain: "Healthcare",
    kind: "professional",
    organization: employer,
    tags: ["Power Apps", "Power Automate"],
  },
  {
    id: "daily-reporting",
    ...source("daily-reporting"),
    icon: "report",
    domain: "Finance",
    kind: "professional",
    organization: employer,
    tags: ["Power Automate Desktop", "RPA", "Excel", "Python"],
  },
];
