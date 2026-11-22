export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#credentials" },
  { label: "Contact", href: "#contact" },
] as const;

/** Mobile menu lists Home too (on desktop the name link serves as Home). */
export const mobileNavLinks = [{ label: "Home", href: "#top" }, ...navLinks] as const;
