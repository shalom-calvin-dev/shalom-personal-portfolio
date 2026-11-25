import type { Project } from "@/lib/projects";
import { ProjectBadges, ProjectLinks, TagList, projectIcons } from "./ProjectParts";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors duration-300 hover:border-accent/40 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-accent">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 id={headingId} className="min-w-0 text-xl font-semibold text-white sm:text-2xl">
          {project.name}
        </h3>
      </div>
      <div className="mt-3">
        <ProjectBadges project={project} featured />
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-slate-400 sm:mt-5">
        {project.description}.
      </p>
      <div className="mt-5 sm:mt-6">
        <TagList tags={project.tags} label={`${project.name} technologies`} />
      </div>
      <ProjectLinks links={project.links} name={project.name} />
    </article>
  );
}
