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
 * Fixed-size slot in front of a skill name: the official logo when one exists,
 * otherwise a small neutral marker so names stay aligned (the name itself is the text label).
 */
export function SkillLogo({ skill }: { skill: Skill }) {
  const brand = brandKeyFor(skill.name);
  if (brand) return <BrandLogo brand={brand} size="md" />;
  return (
    <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center">
      <span className="size-1.5 rounded-full bg-slate-500/60" />
    </span>
  );
}
