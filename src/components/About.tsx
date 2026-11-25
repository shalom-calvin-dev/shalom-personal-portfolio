import { about } from "@/lib/about";
import { getExperienceLabel } from "@/lib/experience-label";
import { HighlightCard } from "./HighlightCard";
import { Reveal } from "./Reveal";

export async function About() {
  // Same daily-cached value as the Hero and the page metadata.
  const experienceLabel = await getExperienceLabel();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden border-t border-white/5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-10 size-[30rem] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 size-[26rem] rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        {/* Single centered column with a readable line length (~70 characters). */}
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-sm tracking-wide text-blue-300">{about.eyebrow}</p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="mt-10 space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {about.paragraphs.map((p, i) => (
              // Static list, so the index is a stable key (and keeps the raw "{years}" template out of the page payload).
              <p key={i}>{p.replaceAll("{years}", experienceLabel)}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-center text-xl font-semibold text-white sm:text-2xl">
              Professional Highlights
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {about.highlights.map((h, i) => (
              <li key={h.id}>
                <Reveal delay={i * 0.1} className="h-full">
                  <HighlightCard
                    icon={h.icon}
                    title={h.title}
                    description={h.description}
                    tags={h.tags}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
