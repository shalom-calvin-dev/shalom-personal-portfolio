import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/credentials";

export function CertificationCard({ cert }: { cert: Certification }) {
  const headingId = `cert-${cert.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-2xl bg-gradient-to-br from-blue-400/40 via-white/10 to-purple-500/40 p-px transition duration-300 hover:-translate-y-1 hover:from-blue-400/70 hover:to-purple-500/70"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-card p-6 sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-xl border border-blue-400/25 bg-gradient-to-br from-blue-500/25 to-purple-500/25 text-blue-200">
            <Award className="size-6" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 font-mono text-xs font-medium text-blue-200">
            {cert.code}
          </span>
        </div>

        <p className="relative mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {cert.issuer}
        </p>
        <h4 id={headingId} className="relative mt-2 flex-1 text-lg font-semibold leading-snug text-white">
          {cert.title}
        </h4>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify credential: ${cert.title} (opens in a new tab)`}
          className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Verify Credential
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
