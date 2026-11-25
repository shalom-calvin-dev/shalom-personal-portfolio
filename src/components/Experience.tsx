import { experience, experienceSection } from "@/lib/experience";
import { ExperienceAccordion } from "./ExperienceAccordion";
import { ExperienceCard } from "./ExperienceCard";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden border-t border-white/5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 size-[28rem] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 size-[26rem] rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-blue-300">
            {experienceSection.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {experienceSection.heading}
          </h2>
        </Reveal>

        {/* Mobile (below md): numbered single-open accordion, current role open. */}
        <Reveal className="mt-10 md:hidden">
          <ExperienceAccordion />
        </Reveal>

        {/* md and up: the original timeline, unchanged (including its "Key projects" list). */}
        <ol className="relative mt-14 hidden space-y-10 md:block">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[0.6875rem] top-2 w-px bg-gradient-to-b from-blue-400/60 via-purple-400/30 to-transparent sm:left-[0.9375rem]"
          />
          {experience.map((entry, i) => (
            <li key={entry.id} className="relative pl-9 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 flex size-6 items-center justify-center rounded-full border border-blue-400/40 bg-dot sm:size-8"
              >
                <span
                  className={`size-2 rounded-full sm:size-2.5 ${
                    entry.current
                      ? "bg-gradient-to-br from-blue-400 to-purple-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]"
                      : "bg-slate-500"
                  }`}
                />
              </span>
              <Reveal delay={i === 0 ? 0 : 0.05}>
                <ExperienceCard entry={entry} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
