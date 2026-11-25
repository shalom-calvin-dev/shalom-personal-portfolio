import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/credentials";

export function CertificationCard({ cert }: { cert: Certification }) {
  const headingId = `cert-${cert.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-xl border border-line bg-card transition-colors duration-300 hover:border-accent/40"
    >
      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="relative flex items-start justify-between gap-4">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent-tint text-accent">
            <Award className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="rounded-full border border-accent/30 bg-accent-tint px-3 py-1 font-mono text-xs font-medium text-accent">
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
          className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-accent/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Verify Credential
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
