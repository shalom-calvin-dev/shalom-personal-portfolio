import { Download } from "lucide-react";
import { profile } from "@/lib/profile";

/**
 * Secondary outline "Download Résumé" button (same look as the Hero "Contact Me" button).
 * The PDF label/date text lives in profile.resumeLabel and is rendered by the caller next to it.
 */
export function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={profile.resumeUrl}
      download
      rel="noopener"
      aria-label={`Download resume (${profile.resumeLabel})`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <Download className="size-4" aria-hidden="true" />
      Download Resume
    </a>
  );
}
