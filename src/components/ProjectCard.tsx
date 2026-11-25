import type { Project } from "@/lib/projects";
import { ProjectBadges, ProjectLinks, TagList, projectIcons } from "./ProjectParts";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex h-full flex-col rounded-xl border border-line bg-card p-4 transition-colors duration-300 hover:border-accent/40 md:p-6"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-accent">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 id={headingId} className="min-w-0 text-base font-semibold text-white">
          {project.name}
        </h3>
      </div>
      <div className="mt-3">
        <ProjectBadges project={project} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 md:mt-4">
        {project.description}.
      </p>
      {project.tags.length > 0 && (
        <div className="mt-4 md:mt-5">
          <TagList tags={project.tags} label={`${project.name} technologies`} />
        </div>
      )}
      <ProjectLinks links={project.links} name={project.name} />
    </article>
  );
}
