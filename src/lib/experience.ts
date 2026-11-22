// Career content for the portfolio. Keep claims limited to verified information.
export type ExperienceIcon = "briefcase" | "graduation" | "cog" | "train";

export type ExperienceEntry = {
  id: string;
  icon: ExperienceIcon;
  company: string;
  role: string;
  location?: string;
  /** Human-readable period shown in the UI. */
  period: string;
  /** Machine-readable start/end for <time>. `end` is omitted for current roles. */
  start: string;
  end?: string;
  current?: boolean;
  summary?: string;
  highlights: readonly string[];
  projects?: readonly ExperienceProject[];
};

/**
 * Single source of truth for project titles and descriptions (also used by projects.ts).
 * `id` is a neutral internal identifier; `name` is the public display title.
 */
export type ExperienceProject = {
  id: string;
  name: string;
  description: string;
};

export const experienceSection = {
  eyebrow: "Experience",
  heading: "A career built on engineering fundamentals",
} as const;

export const experience: readonly ExperienceEntry[] = [
  {
    id: "star-knowledge-ventures",
    icon: "briefcase",
    company: "Star Knowledge Ventures",
    role: "Software Engineer",
    location: "India",
    period: "March 2023 – Present",
    start: "2023-03",
    current: true,
    highlights: [
      "Designed and delivered enterprise-grade Power Apps (Canvas and Model-Driven) and Power BI dashboards.",
      "Built secure backend REST APIs with Node.js and Express.js, enabling integration between Power Platform, web apps and third-party systems.",
      "Automated end-to-end business workflows using Power Automate and REST APIs.",
      "Implemented role-based security and access control to support data integrity and compliance.",
      "Designed and managed PostgreSQL databases, with validation and error handling.",
      "Developed responsive web interfaces using HTML, CSS, JavaScript and React.js.",
    ],
    projects: [
      {
        id: "site-visitor",
        name: "Civil Engineering Site Visit Management",
        description: "Centralized tracking of site visits and work updates, developed for civil engineers",
      },
      {
        id: "leave-portal",
        name: "Employee Leave Management & Approval Portal",
        description: "End-to-end leave management with approvals and reporting",
      },
      {
        id: "performance-evaluation",
        name: "Employee Performance Evaluation System",
        description: "Self-assessment and review workflow automation",
      },
      {
        id: "data-integration",
        name: "Power Platform Data Integration & Reporting Automation",
        description:
          "Automated multi-source data aggregation for BI and reporting, managed within Power Platform using Power Apps, Power Automate Desktop, scheduled Power Automate flows and Power BI reports",
      },
      {
        id: "financial",
        name: "Financial Management & Power BI Reporting Application",
        description:
          "Developed Power Apps functionality to create, view, update and delete financial records (CRUD), with integrated Power BI reports for financial reporting and insights. Automation components use Power Automate (cloud and desktop RPA) and Python",
      },
      {
        id: "osd",
        name: "Patient Lab Test Monitoring Application",
        description: "Centralized monitoring of patient lab tests across multiple locations",
      },
      {
        id: "customer-management",
        name: "Customer Management – Backend API Development",
        description:
          "Developed the backend REST APIs for a customer management mobile application using Node.js, Express.js and PostgreSQL. The mobile application itself was developed by another developer",
      },
      {
        id: "admin-management",
        name: "Admin Management Web Application",
        description: "Admin management web application. Developed both the Next.js (shadcn/ui) frontend and the Node.js backend APIs",
      },
      {
        id: "daily-reporting",
        name: "Scheduled Bank & Stock Reporting Automation",
        description:
          "Automation solution using Power Automate Desktop with Excel and Python scripting, run on a schedule for reporting involving bank and stock-related links",
      },
      {
        id: "sports-scoring",
        name: "Sports Scoring & Live Streaming Platform",
        description: "Node.js APIs for live scoring, team selection and RTMP-based streaming",
      },
      {
        id: "quarter-end-close",
        name: "Quarter-End Financial Close & Document Management System",
        description:
          "An enterprise Power Platform solution for quarter-end financial document collection, review and approval across 70+ business units, featuring role-based access, automated workflows, audit tracking and centralized reporting",
      },
    ],
  },
  {
    id: "deltron-fze",
    icon: "graduation",
    company: "Deltron FZE",
    role: "Apprentice Trainee",
    location: "Sharjah",
    period: "August 2022 – November 2022",
    start: "2022-08",
    end: "2022-11",
    highlights: [
      "Completed technical training in industrial software tools and engineering workflows.",
    ],
  },
  {
    id: "bell-o-seal-valves",
    icon: "cog",
    company: "Bell O Seal Valves Pvt. Ltd.",
    role: "CNC Programmer",
    period: "August 2019 – March 2022",
    start: "2019-08",
    end: "2022-03",
    highlights: [
      "Programmed CNC machines (VTC, HTC and VMC) for high-precision valve components.",
      "Interpreted engineering drawings and applied G-code to ensure dimensional accuracy.",
    ],
  },
  {
    id: "konkan-railways-academy",
    icon: "train",
    company: "Konkan Railways Academy",
    role: "Internship",
    period: "2019",
    start: "2019",
    end: "2019",
    highlights: [
      "Gained hands-on exposure to railway technology systems, maintenance workflows and operational engineering processes.",
    ],
  },
];
