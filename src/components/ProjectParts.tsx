import {
  Building2,
  CalendarCheck,
  ClipboardList,
  ExternalLink,
  FileBarChart,
  GitMerge,
  HeartPulse,
  LayoutDashboard,
  ClipboardCheck,
  Trophy,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Project, ProjectIconKey, ProjectLink } from "@/lib/projects";
import { TechChip } from "./TechChip";

export const projectIcons: Record<ProjectIconKey, LucideIcon> = {
  clipboard: ClipboardList,
  calendar: CalendarCheck,
  review: ClipboardCheck,
  merge: GitMerge,
  wallet: Wallet,
  health: HeartPulse,
  users: Users,
  dashboard: LayoutDashboard,
  report: FileBarChart,
  trophy: Trophy,
};

export function TagList({ tags, label }: { tags: readonly string[]; label: string }) {
  if (tags.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {tags.map((t) => (
        <TechChip key={t} name={t} />
      ))}
    </ul>
  );
}

export function KindBadge({ project }: { project: Project }) {
  const professional = project.kind === "professional";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        professional
          ? "border-blue-400/30 bg-blue-400/10 text-blue-200"
          : "border-purple-400/30 bg-purple-400/10 text-purple-200"
      }`}
    >
      {professional && <Building2 className="size-3" aria-hidden="true" />}
      {professional ? `Professional · ${project.organization}` : "Personal project"}
    </span>
  );
}

/** Professional/personal badge plus the optional domain label. */
export function ProjectBadges({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <KindBadge project={project} />
      {project.domain && (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
          <span className="sr-only">Domain: </span>
          {project.domain}
        </span>
      )}
      {project.client && (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
          Client: {project.client}
        </span>
      )}
    </div>
  );
}

export function ProjectLinks({ links, name }: { links?: readonly ProjectLink[]; name: string }) {
  if (!links || links.length === 0) return null;
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.label}: ${name} (opens in a new tab)`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            {l.label}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
