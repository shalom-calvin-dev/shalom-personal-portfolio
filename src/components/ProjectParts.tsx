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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
      {professional && <Building2 className="size-3" aria-hidden="true" />}
      {professional ? `Professional · ${project.organization}` : "Personal project"}
    </span>
  );
}

/** Flat accent badge. Sits at the right end of the project meta row (see ProjectBadges). */
export function FeaturedBadge() {
  return (
    <span className="ml-auto inline-flex items-center rounded-full border border-accent/30 bg-accent-tint px-2.5 py-1 text-xs font-semibold text-accent">
      Featured
    </span>
  );
}

/** Professional/personal badge plus the optional domain label. Featured cards add the Featured badge on the right. */
export function ProjectBadges({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <KindBadge project={project} />
      {project.domain && (
        <span className="inline-flex items-center rounded-full border border-line bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
          <span className="sr-only">Domain: </span>
          {project.domain}
        </span>
      )}
      {project.client && (
        <span className="inline-flex items-center rounded-full border border-line bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
          Client: {project.client}
        </span>
      )}
      {featured && <FeaturedBadge />}
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
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-accent/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {l.label}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
