import {
  AppWindow,
  Atom,
  BarChart3,
  Bot,
  Braces,
  Cloud,
  Code,
  Database,
  FileSpreadsheet,
  Files,
  Fingerprint,
  Globe,
  HardDrive,
  Hexagon,
  KeyRound,
  Layers,
  Palette,
  Plug,
  Server,
  Share2,
  ShieldCheck,
  Sigma,
  Table,
  Waypoints,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Skill, SkillIconKey } from "@/lib/skills";

export const icons: Record<SkillIconKey, LucideIcon> = {
  hexagon: Hexagon,
  atom: Atom,
  database: Database,
  globe: Globe,
  shield: ShieldCheck,
  key: KeyRound,
  code: Code,
  palette: Palette,
  table: Table,
  spreadsheet: FileSpreadsheet,
  plug: Plug,
  bot: Bot,
  chart: BarChart3,
  zap: Zap,
  app: AppWindow,
  braces: Braces,
  storage: HardDrive,
  fingerprint: Fingerprint,
  share: Share2,
  files: Files,
  workflow: Workflow,
  cloud: Cloud,
  layers: Layers,
  server: Server,
  sigma: Sigma,
  logic: Waypoints,
};

/** Fixed-size icon tile: a Lucide icon, or a monogram when no suitable icon exists. */
export function SkillIcon({ skill }: { skill: Skill }) {
  const Icon = skill.icon ? icons[skill.icon] : null;
  return (
    <span
      aria-hidden="true"
      className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-300 transition group-hover/skill:border-blue-400/40 group-hover/skill:text-white"
    >
      {Icon ? (
        <Icon className="size-[1.125rem]" strokeWidth={1.5} />
      ) : (
        <span className="font-mono text-xs font-semibold tracking-tight">{skill.mark}</span>
      )}
    </span>
  );
}
