// About section content. Keep claims limited to verified information.
export const about = {
  eyebrow: "About Me",
  heading: "Building reliable systems that solve real business problems",
  paragraphs: [
    "I'm a Software Engineer at Star Knowledge Ventures with 3+ years of experience designing and delivering secure REST APIs, enterprise automation solutions and scalable business applications across HR, finance, healthcare and operations.",
    "On the backend, I build with Node.js, Express.js and PostgreSQL, with a focus on secure authentication, role-based access control and dependable data handling. On the frontend, I create responsive interfaces with React.js, JavaScript, HTML and CSS.",
    "I hold the Microsoft Certified: Power Platform Solution Architect Expert (PL-600) and Microsoft Certified: Power Platform Developer Associate (PL-400) certifications, and deliver Power Apps, Power Automate workflows and Power BI dashboards on Dataverse, connecting them to web apps and third-party systems through APIs.",
  ],
  certifications: [
    "Microsoft Certified: Power Platform Solution Architect Expert (PL-600)",
    "Microsoft Certified: Power Platform Developer Associate (PL-400)",
  ],
  solutions: [
    "Leave management and approval workflows",
    "Performance evaluation workflows",
    "Site visit and work-update tracking",
    "Healthcare lab-test monitoring",
    "Multi-source data integration for BI and reporting",
    "Admin web applications and customer management backend APIs",
    "Automated reporting with RPA",
    "Live scoring and streaming APIs",
  ],
  highlights: [
    {
      id: "backend",
      icon: "server",
      title: "Backend Development",
      description:
        "Secure REST APIs that connect Power Platform, web apps and third-party systems, backed by PostgreSQL with validation and error handling.",
      tags: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "RBAC"],
    },
    {
      id: "fullstack",
      icon: "layers",
      title: "Full Stack Development",
      description:
        "Responsive web interfaces with React.js, plus a Next.js admin dashboard powered by Node.js backend APIs.",
      tags: ["React.js", "Next.js", "JavaScript", "HTML & CSS"],
    },
    {
      id: "power-platform",
      icon: "workflow",
      title: "Microsoft Power Platform",
      description:
        "Canvas and Model-Driven apps, automated workflows and BI dashboards on Dataverse, backed by PL-400 and PL-600 certifications.",
      tags: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    },
  ],
} as const;
