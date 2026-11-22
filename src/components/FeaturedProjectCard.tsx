import type { Project } from "@/lib/projects";
import { ProjectBadges, ProjectLinks, TagList, projectIcons } from "./ProjectParts";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-2xl bg-gradient-to-br from-blue-400/50 via-white/10 to-purple-500/50 p-px transition duration-300 hover:-translate-y-1 hover:from-blue-400/80 hover:to-purple-500/80"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-card p-7 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-4">
          <span className="flex size-14 items-center justify-center rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-500/25 to-purple-500/25 text-blue-200">
            <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-[#ffffff]">
            Featured
          </span>
        </div>

        <h3 id={headingId} className="relative mt-6 text-xl font-semibold text-white sm:text-2xl">
          {project.name}
        </h3>
        <div className="relative mt-3">
          <ProjectBadges project={project} />
        </div>
        <p className="relative mt-5 flex-1 text-base leading-relaxed text-slate-400">
          {project.description}.
        </p>
        <div className="relative mt-6">
          <TagList tags={project.tags} label={`${project.name} technologies`} />
        </div>
        <div className="relative">
          <ProjectLinks links={project.links} name={project.name} />
        </div>
      </div>
    </article>
  );
}
