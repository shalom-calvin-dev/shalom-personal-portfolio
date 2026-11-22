import { certifications, credentialsSection, education } from "@/lib/credentials";
import { CertificationCard } from "./CertificationCard";
import { EducationCard } from "./EducationCard";
import { Reveal } from "./Reveal";

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="relative isolate overflow-hidden border-t border-white/5"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-10 size-[28rem] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-10 size-[26rem] rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-mono text-sm tracking-wide text-blue-300">
            {credentialsSection.eyebrow}
          </p>
          <h2
            id="credentials-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {credentialsSection.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div aria-labelledby="certifications-heading" role="group">
            <Reveal>
              <h3
                id="certifications-heading"
                className="text-sm font-semibold uppercase tracking-widest text-slate-300"
              >
                Certifications
              </h3>
            </Reveal>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <li key={c.id}>
                  <Reveal delay={i * 0.1} className="h-full">
                    <CertificationCard cert={c} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div aria-labelledby="education-heading" role="group">
            <Reveal>
              <h3
                id="education-heading"
                className="text-sm font-semibold uppercase tracking-widest text-slate-300"
              >
                Education
              </h3>
            </Reveal>
            <ul className="mt-6 grid gap-6">
              {education.map((e) => (
                <li key={e.id}>
                  <Reveal delay={0.1} className="h-full">
                    <EducationCard entry={e} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
