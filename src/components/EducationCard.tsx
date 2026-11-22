import { GraduationCap } from "lucide-react";
import type { EducationEntry } from "@/lib/credentials";

export function EducationCard({ entry }: { entry: EducationEntry }) {
  const headingId = `edu-${entry.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-px transition duration-300 hover:-translate-y-1 hover:from-purple-400/50 hover:to-blue-500/30"
    >
      <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-card p-6 sm:p-7">
        <span className="flex size-12 items-center justify-center rounded-xl border border-purple-400/25 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-200">
          <GraduationCap className="size-6" strokeWidth={1.5} aria-hidden="true" />
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
