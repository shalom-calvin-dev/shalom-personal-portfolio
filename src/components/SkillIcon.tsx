import { Braces, Cloud, Layers, Server, Workflow, type LucideIcon } from "lucide-react";
import { brandKeyFor } from "@/lib/brand-icons";
import type { CategoryIconKey, Skill } from "@/lib/skills";
import { BrandLogo } from "./BrandLogo";

/** Icons for skill *categories* (not software brands). */
export const categoryIcons: Record<CategoryIconKey, LucideIcon> = {
  server: Server,
  layers: Layers,
  workflow: Workflow,
  cloud: Cloud,
  braces: Braces,
};

/**
 * The technology icon (a brand logo or an original illustration) in front of a skill name when
 * one exists. Skills without an icon render nothing here (no empty tile, placeholder or marker):
 * the name is shown as plain text.
 */
export function SkillLogo({ skill }: { skill: Skill }) {
  const brand = brandKeyFor(skill.name);
  return brand ? <BrandLogo brand={brand} size="md" /> : null;
}
