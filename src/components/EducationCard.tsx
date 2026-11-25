import { GraduationCap } from "lucide-react";
import type { EducationEntry } from "@/lib/credentials";

export function EducationCard({ entry }: { entry: EducationEntry }) {
  const headingId = `edu-${entry.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-xl border border-line bg-card transition-colors duration-300 hover:border-accent/40"
    >
      <div className="flex h-full flex-col p-6 sm:p-7">
        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-tint text-accent">
          <GraduationCap className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h4 id={headingId} className="mt-5 text-lg font-semibold leading-snug text-white">
          {entry.qualification}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{entry.institution}</p>
        <p className="mt-4 font-mono text-sm text-slate-300">
          <time dateTime={entry.start}>{entry.start}</time>
          <span aria-hidden="true"> – </span>
          <span className="sr-only"> to </span>
          <time dateTime={entry.end}>{entry.end}</time>
        </p>
      </div>
    </article>
  );
}
