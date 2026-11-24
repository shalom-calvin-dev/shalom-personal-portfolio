// About section content. Keep claims limited to verified information.
export const about = {
  eyebrow: "About Me",
  heading: "An engineering background with a software focus",
  paragraphs: [
    "I'm a Software Engineer at Star Knowledge Ventures with more than three years of experience building secure APIs, business applications and workflow automation in the HR, finance, healthcare and operations domains.",
    "My path into software started in engineering. I studied Mechatronics Engineering and worked in CNC programming and industrial training before joining Star Knowledge Ventures in 2023.",
    "On the backend I work mainly with Node.js, Express.js and PostgreSQL, building REST APIs with authentication and role-based access control. On the frontend I use React.js, Next.js and JavaScript. I also build business applications on Microsoft Power Platform, using Power Apps, Power Automate and Power BI on Dataverse, and connect them to web applications and third-party systems through APIs.",
    "I'm most interested in backend engineering, system integration and automation, and I'm open to remote opportunities and relocation.",
  ],
  highlights: [
    {
      id: "backend",
      icon: "server",
      title: "Backend Development",
      description:
        "Secure REST APIs that connect Power Platform, web apps and third-party systems, backed by PostgreSQL with validation and error handling.",
      tags: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    },
    {
      id: "fullstack",
      icon: "layers",
      title: "Full Stack Development",
      description:
        "Responsive web interfaces built with React.js and Next.js, connected to Node.js backend APIs.",
      tags: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
    },
    {
      id: "power-platform",
      icon: "workflow",
      title: "Microsoft Power Platform",
      description:
        "Canvas and Model-Driven apps, automated workflows and BI dashboards built on Dataverse.",
      tags: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    },
  ],
} as const;
