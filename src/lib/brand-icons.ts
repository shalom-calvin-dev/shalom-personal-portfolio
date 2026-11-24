/**
 * Technology icons: transparent PNGs stored in /public/brand-icons (no SVG is kept in public/).
 * Each PNG is an unedited rasterisation of an SVG source (kept in a local, git-ignored archive, or in
 * design/brand-icons/original/ for the original illustrations). Sources:
 *  - Devicon (MIT licensed, v2.18.0, see public/brand-icons/LICENSE-devicon.txt): the open-source
 *    technology logos.
 *  - Microsoft product icons supplied by the site owner, who has confirmed permission to use them
 *    (see ICON-ASSETS-NOTICE.txt at the repository root for the file list, checksums and terms).
 *  - Original neutral illustrations (design/brand-icons/original/) for RTMP, Authentication &
 *    Authorization, Third-party API, Excel, Microsoft Graph API, Office 365 Connectors, Azure
 *    Identity and Azure Storage, which replaced supplied files of unverified origin or
 *    mismatched artwork. Licence status of every file: ICON-ASSETS-NOTICE.txt (repository root).
 *  - Lucide (ISC licensed, see public/brand-icons/LICENSE-lucide.txt): the generic
 *    "arrow-left-right" request/response icon used for REST APIs (a concept, not a product).
 * A technology only gets an icon when a suitable PNG exists in that folder; everything else is
 * shown as a plain text label. Trademarks and logos belong to their respective owners.
 */
export type BrandKey =
  | "javascript" | "typescript" | "nodejs" | "express" | "react" | "nextjs" | "python"
  | "csharp" | "dotnetcore" | "postgresql" | "mongodb" | "pandas" | "html5" | "css3" | "azure"
  | "powerapps" | "powerautomate" | "powerbi" | "powerplatform" | "dataverse" | "restapi"
  | "azurefunctions" | "azurelogicapps" | "azurestorage" | "azureidentity" | "msgraph"
  | "sharepoint" | "sqlserver" | "excel" | "powerfx" | "customconnector" | "thirdpartyapi"
  | "authentication" | "rtmp" | "office365connectors";

export const brandLogos: Record<BrandKey, { label: string; src: string }> = {
  javascript: { label: "JavaScript", src: "/brand-icons/javascript.png" },
  typescript: { label: "TypeScript", src: "/brand-icons/typescript.png" },
  nodejs: { label: "Node.js", src: "/brand-icons/nodejs.png" },
  express: { label: "Express", src: "/brand-icons/express.png" },
  react: { label: "React", src: "/brand-icons/react.png" },
  nextjs: { label: "Next.js", src: "/brand-icons/nextjs.png" },
  python: { label: "Python", src: "/brand-icons/python.png" },
  csharp: { label: "C#", src: "/brand-icons/csharp.png" },
  dotnetcore: { label: ".NET", src: "/brand-icons/dotnetcore.png" },
  postgresql: { label: "PostgreSQL", src: "/brand-icons/postgresql.png" },
  mongodb: { label: "MongoDB", src: "/brand-icons/mongodb.png" },
  pandas: { label: "Pandas", src: "/brand-icons/pandas.png" },
  html5: { label: "HTML5", src: "/brand-icons/html5.png" },
  css3: { label: "CSS3", src: "/brand-icons/css3.png" },
  restapi: { label: "REST APIs", src: "/brand-icons/rest-api.png" },
  azure: { label: "Azure", src: "/brand-icons/azure.png" },
  powerapps: { label: "Power Apps", src: "/brand-icons/power-apps.png" },
  powerautomate: { label: "Power Automate", src: "/brand-icons/power-automate.png" },
  powerbi: { label: "Power BI", src: "/brand-icons/power-bi.png" },
  powerplatform: { label: "Power Platform", src: "/brand-icons/power-platform.png" },
  dataverse: { label: "Dataverse", src: "/brand-icons/dataverse.png" },
  powerfx: { label: "Power Fx", src: "/brand-icons/powerfx.png" },
  customconnector: { label: "Custom connector", src: "/brand-icons/custom-connector.png" },
  azurefunctions: { label: "Azure Functions", src: "/brand-icons/azure-functions.png" },
  azurelogicapps: { label: "Azure Logic Apps", src: "/brand-icons/azure-logic-apps.png" },
  azurestorage: { label: "Azure Storage", src: "/brand-icons/azure-storage.png" },
  azureidentity: { label: "Azure Identity", src: "/brand-icons/azure-identity.png" },
  msgraph: { label: "Microsoft Graph", src: "/brand-icons/microsoft-graph-api.png" },
  sharepoint: { label: "SharePoint", src: "/brand-icons/sharepoint.png" },
  sqlserver: { label: "SQL Server", src: "/brand-icons/sql-server.png" },
  excel: { label: "Excel", src: "/brand-icons/excel.png" },
  rtmp: { label: "RTMP", src: "/brand-icons/rtmp.png" },
  office365connectors: { label: "Office 365 Connectors", src: "/brand-icons/office-365-connectors.png" },
  thirdpartyapi: { label: "Third-party API", src: "/brand-icons/third-party-api.png" },
  authentication: { label: "Authentication & Authorization", src: "/brand-icons/authentication.png" },
};

// Technology names used in the portfolio data -> icon key. Names not listed get no icon.
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
  // Power Platform. RPA means Power Automate Desktop, which shares the Power Automate logo.
  "power apps": "powerapps",
  "power apps (canvas & model-driven)": "powerapps",
  "power automate": "powerautomate",
  "power automate cloud": "powerautomate",
  "scheduled power automate": "powerautomate",
  "power automate desktop": "powerautomate",
  "power automate desktop (rpa)": "powerautomate",
  "rpa": "powerautomate",
  "power bi": "powerbi",
  "dataverse": "dataverse",
  "microsoft power platform": "powerplatform",
  "power platform": "powerplatform",
  "power fx": "powerfx",
  "custom connectors": "customconnector",
  // Cloud, integration and data.
  "rest apis": "restapi",
  "azure functions": "azurefunctions",
  "azure logic apps": "azurelogicapps",
  "azure storage": "azurestorage",
  "azure blob storage": "azurestorage",
  "azure identity": "azureidentity",
  "microsoft graph api": "msgraph",
  "sharepoint": "sharepoint",
  "sql": "sqlserver",
  "excel": "excel",
  "excel automation": "excel",
  "rtmp": "rtmp",
  "office 365 connectors": "office365connectors",
  "third-party api integrations": "thirdpartyapi",
  "authentication & authorization": "authentication",
};

/**
 * Returns the icon key for a technology name, or undefined when no matching PNG exists.
 * Names without an entry above (e.g. "shadcn/ui") are shown as plain text labels.
 */
export function brandKeyFor(name: string): BrandKey | undefined {
  return aliases[name.trim().toLowerCase()];
}
