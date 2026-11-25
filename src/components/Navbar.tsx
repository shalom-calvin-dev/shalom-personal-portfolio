import { navLinks } from "@/lib/nav";
import { profile } from "@/lib/profile";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-x-6 px-6 py-3 sm:px-8">
        <a
          href="#top"
          className="rounded-md text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {profile.name}
        </a>

        {/* Desktop links (lg and up). Below lg the hamburger menu is used instead. */}
        <nav aria-label="Primary" className="hidden gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 rounded-md px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
