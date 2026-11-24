import type { Project } from "@/lib/projects";
import { ProjectBadges, ProjectLinks, TagList, projectIcons } from "./ProjectParts";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-px transition duration-300 hover:-translate-y-1 hover:from-blue-400/50 hover:to-purple-500/30"
    >
      <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-card p-4 md:p-6">
        <span className="flex size-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 id={headingId} className="mt-4 text-base font-semibold text-white md:mt-5">
          {project.name}
        </h3>
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
      </div>
    </article>
  );
}
