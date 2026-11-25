import { ArrowUp } from "lucide-react";
import { socialLinks } from "@/lib/contact";
import { profile } from "@/lib/profile";
import { CurrentYear } from "./CurrentYear";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-12 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-accent">
            {profile.title}
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <ul className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <SocialIcon id={s.id} className="size-[1.125rem]" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to Top
          </a>
        </div>
      </div>

      <div className="border-t border-line px-6 py-5 text-center text-xs text-slate-400">
        © <CurrentYear /> {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
