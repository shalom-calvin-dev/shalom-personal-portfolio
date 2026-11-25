import { ArrowUpRight } from "lucide-react";
import { contactSection, socialLinks } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden border-t border-line"
    >

      <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <div className="rounded-xl border border-line bg-card">
            <div className="rounded-xl px-6 py-14 text-center sm:px-12 sm:py-16">
              <p className="font-mono text-sm tracking-wide text-accent">
                {contactSection.eyebrow}
              </p>
              <h2
                id="contact-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {contactSection.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {contactSection.intro}
              </p>

              <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
                {socialLinks.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} profile ${s.handle} (opens in a new tab)`}
                      className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white/[0.03] p-5 text-left transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-accent">
                        <SocialIcon id={s.id} className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-white">{s.label}</span>
                        <span className="block truncate font-mono text-xs text-slate-400">
                          {s.handle}
                        </span>
                        <span className="mt-1 block text-xs text-slate-400">{s.description}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
