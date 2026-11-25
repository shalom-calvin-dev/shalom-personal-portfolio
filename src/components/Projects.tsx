import { projects, projectsSection } from "@/lib/projects";
import { Accordion } from "./Accordion";
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
      className="relative isolate overflow-hidden border-t border-line"
    >

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-accent">{projectsSection.eyebrow}</p>
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

        {/* md and up: the original heading. Below md it is replaced by the accordion row. */}
        <Reveal className="mt-16 hidden md:block">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">More projects</h3>
        </Reveal>
        {/* One accordion row below md; from md up its header is hidden and the cards show as before. */}
        <Accordion
          alwaysOpenFromMd
          className="mt-10 md:mt-8"
          items={[
            {
              id: "more-projects",
              title: `More projects (${others.length})`,
              content: (
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {others.map((p, i) => (
                    <li key={p.id}>
                      <Reveal delay={(i % 3) * 0.08} className="h-full">
                        <ProjectCard project={p} />
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
