import { Award, Check } from "lucide-react";
import { about } from "@/lib/about";
import { HighlightCard } from "./HighlightCard";
import { Reveal } from "./Reveal";

export function About() {
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
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-blue-300">{about.eyebrow}</p>
          <h2
            id="about-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                Solutions I build
              </h3>
              <ul className="mt-4 space-y-3">
                {about.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-blue-400"
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 border-t border-white/10 pt-6 text-sm font-semibold uppercase tracking-widest text-slate-300">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {about.certifications.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-300">
                    <Award
                      className="mt-0.5 size-4 shrink-0 text-purple-400"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
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
