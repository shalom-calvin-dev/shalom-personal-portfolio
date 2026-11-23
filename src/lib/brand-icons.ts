/**
 * Official technology logos, taken unmodified from the Devicon project (MIT licensed, v2.18.0).
 * Files live in /public/brand-icons. Logos are only listed here when a genuine logo exists;
 * everything else (e.g. Power Apps, Power BI, SharePoint) is shown as a plain text label.
 * Trademarks and logos belong to their respective owners.
 */
export type BrandKey =
  | "javascript" | "typescript" | "nodejs" | "express" | "react" | "nextjs" | "python"
  | "csharp" | "dotnetcore" | "postgresql" | "mongodb" | "pandas" | "html5" | "css3" | "azure";

export const brandLogos: Record<BrandKey, { label: string; src: string }> = {
  javascript: { label: "JavaScript", src: "/brand-icons/javascript.svg" },
  typescript: { label: "TypeScript", src: "/brand-icons/typescript.svg" },
  nodejs: { label: "Node.js", src: "/brand-icons/nodejs.svg" },
  express: { label: "Express", src: "/brand-icons/express.svg" },
  react: { label: "React", src: "/brand-icons/react.svg" },
  nextjs: { label: "Next.js", src: "/brand-icons/nextjs.svg" },
  python: { label: "Python", src: "/brand-icons/python.svg" },
  csharp: { label: "C#", src: "/brand-icons/csharp.svg" },
  dotnetcore: { label: ".NET", src: "/brand-icons/dotnetcore.svg" },
  postgresql: { label: "PostgreSQL", src: "/brand-icons/postgresql.svg" },
  mongodb: { label: "MongoDB", src: "/brand-icons/mongodb.svg" },
  pandas: { label: "Pandas", src: "/brand-icons/pandas.svg" },
  html5: { label: "HTML5", src: "/brand-icons/html5.svg" },
  css3: { label: "CSS3", src: "/brand-icons/css3.svg" },
  azure: { label: "Microsoft Azure", src: "/brand-icons/azure.svg" },
};

// Technology names used in the portfolio data -> logo key. Names not listed get no logo.
const aliases: Record<string, BrandKey> = {
  "javascript": "javascript",
  "typescript": "typescript",
  "node.js": "nodejs",
  "express.js": "express",
  "react": "react",
  "react.js": "react",
  "next.js": "nextjs",
  "python": "python",
  "c#": "csharp",
  ".net": "dotnetcore",
  "postgresql": "postgresql",
  "mongodb": "mongodb",
  "pandas": "pandas",
  "html": "html5",
  "css": "css3",
  "azure": "azure",
};

/**
 * Returns the logo key for a technology name, or undefined when no genuine logo is available.
 * The Azure logo is used for "Azure" itself only; individual Azure services (Functions, Logic Apps,
 * Storage, Identity, Blob Storage) have no logo here and are shown as text labels.
 */
export function brandKeyFor(name: string): BrandKey | undefined {
  return aliases[name.trim().toLowerCase()];
}
