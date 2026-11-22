import { projects, projectsSection } from "@/lib/projects";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden border-t border-white/5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 size-[30rem] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-40 size-[28rem] rounded-full bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-blue-300">{projectsSection.eyebrow}</p>
          <h2
            id="projects-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {projectsSection.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {projectsSection.intro}
          </p>
        </Reveal>

        <h3 className="sr-only">Featured projects</h3>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <FeaturedProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">More projects</h3>
        </Reveal>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
