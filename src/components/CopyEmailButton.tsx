"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const COPIED_MS = 2000;

/** Select-and-copy fallback for browsers or contexts without the async Clipboard API. */
function legacyCopy(text: string): boolean {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(el);
  }
}

/**
 * Copies `text` and shows "Copied" for 2 seconds. "Copy" and "Copied" share one grid cell and the
 * hidden one stays in the layout (invisible), so the button never changes size. A polite live region
 * announces the result to screen readers.
 */
export function CopyEmailButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = legacyCopy(text);
    }
    if (!ok) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), COPIED_MS);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy email address ${text}`}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-6 text-sm font-semibold text-slate-100 transition-colors hover:border-accent/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
      >
        <span className="relative inline-flex size-4 items-center justify-center" aria-hidden="true">
          <Copy className={`absolute size-4 ${copied ? "invisible" : ""}`} />
          <Check className={`absolute size-4 text-accent ${copied ? "" : "invisible"}`} />
        </span>
        <span className="grid" aria-hidden="true">
          <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>Copy</span>
          <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>Copied</span>
        </span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </>
  );
}
