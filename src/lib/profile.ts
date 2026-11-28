export const profile = {
  name: "Shalom Calvin",
  title: "Software Engineer",
  company: "Star Knowledge Ventures",
  focus: ["Backend Development", "Full Stack Development", "Microsoft Power Platform"],
  intro:
    "I'm a Software Engineer building scalable backend solutions, modern web applications and business automation solutions using Microsoft Power Platform.",
  // The one place the contact address lives (Contact section, Hero, JSON-LD all read it).
  email: "shalomcalvin222@gmail.com",
  // Served from /public. Label text is shown next to the download buttons; update the date when the PDF changes.
  resumeUrl: "/Shalom-Calvin-Resume.pdf",
  resumeLabel: "PDF · updated Nov 2026",
  github: "https://github.com/shalom-calvin-dev",
  linkedin: "https://www.linkedin.com/in/shalomcalvin",
  technologies: [
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "C#",
    ".NET",
    "Python",
    "Microsoft Power Platform",
    "Power BI",
    "Power Apps",
    "Power Automate",
    "Azure",
  ],
  // Path under /public. Set to null to fall back to the placeholder.
  portrait: "/profile.jpg" as string | null,
} as const;
