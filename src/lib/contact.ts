import { profile } from "./profile";

export const contactSection = {
  eyebrow: "Contact",
  heading: "Let's Build Something Together",
  intro:
    "I'm always interested in connecting with developers, exploring new opportunities and discussing interesting software engineering projects.",
} as const;

export type SocialLink = {
  id: "github" | "linkedin";
  label: string;
  /** Short handle shown under the label. */
  handle: string;
  href: string;
  description: string;
};

export const socialLinks: readonly SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "shalom-calvin-dev",
    href: profile.github,
    description: "Explore my code and open-source activity.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "shalomcalvin",
    href: profile.linkedin,
    description: "Connect with me professionally.",
  },
];
