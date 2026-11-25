import { skillCategories, skillsSection } from "@/lib/skills";
import { Reveal } from "./Reveal";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { SkillsAccordion } from "./SkillsAccordion";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate overflow-hidden border-t border-line"
    >

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-accent">{skillsSection.eyebrow}</p>
          <h2
            id="skills-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {skillsSection.heading}
          </h2>
        </Reveal>

        {/* Mobile (below md): numbered single-open accordion. */}
        <Reveal className="mt-10 md:hidden">
          <SkillsAccordion />
        </Reveal>

        {/* md and up: the original card grid, unchanged. */}
        <ul className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((category, i) => (
            <li
              key={category.id}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SkillCategoryCard category={category} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
