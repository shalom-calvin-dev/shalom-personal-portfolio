import {
  Briefcase,
  Cog,
  GraduationCap,
  MapPin,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import type { ExperienceEntry, ExperienceIcon } from "@/lib/experience";

const icons: Record<ExperienceIcon, LucideIcon> = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  cog: Cog,
  train: TrainFront,
};

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const Icon = icons[entry.icon];
  const headingId = `exp-${entry.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="group relative rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-px transition duration-300 hover:from-blue-400/40 hover:to-purple-500/25"
    >
      <div className="rounded-[calc(1rem-1px)] bg-card p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
              <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <h3 id={headingId} className="text-lg font-semibold text-white sm:text-xl">
                {entry.role}
              </h3>
              <p className="mt-0.5 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text font-medium text-transparent">
                {entry.company}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 sm:items-end">
            <p className="font-mono text-sm text-slate-300">
              <time dateTime={entry.start}>{entry.period.split(" – ")[0]}</time>
              {entry.period.includes(" – ") && (
                <>
                  <span aria-hidden="true"> – </span>
                  <span className="sr-only"> to </span>
                  {entry.end ? (
                    <time dateTime={entry.end}>{entry.period.split(" – ")[1]}</time>
                  ) : (
                    <span>{entry.period.split(" – ")[1]}</span>
                  )}
                </>
              )}
            </p>
            <div className="flex items-center gap-2">
              {entry.current && (
                <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                  Current
                </span>
              )}
              {entry.location && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="size-3" aria-hidden="true" />
                  {entry.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {entry.summary && (
          <p className="mt-5 text-sm leading-relaxed text-slate-400">{entry.summary}</p>
        )}

        <ul className="mt-5 space-y-2.5">
          {entry.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
              />
              {h}
            </li>
          ))}
        </ul>

        {entry.projects && (
          <div className="mt-7 border-t border-white/10 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Key projects
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {entry.projects.map((p) => (
                <li
                  key={p.name}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-purple-400/30"
                >
                  <p className="text-sm font-medium text-slate-100">{p.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
