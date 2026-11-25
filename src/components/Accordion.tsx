"use client";

import { ArrowRight } from "lucide-react";
import { useId, useRef, useState, type ElementType, type KeyboardEvent, type ReactNode } from "react";

export type AccordionItem = {
  id: string;
  /** Row number shown before the title, e.g. "01". Decorative (hidden from assistive tech). */
  number?: string;
  title: ReactNode;
  /** Optional second line in the header (for example a company and dates). */
  subtitle?: ReactNode;
  /** Optional small badge in the header, e.g. a count. Include sr-only text if the number alone is unclear. */
  badge?: ReactNode;
  content: ReactNode;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  /** Row that starts open. Opening any row closes the others. */
  defaultOpenId?: string | null;
  /** Heading level wrapped around each header button. */
  headingLevel?: 2 | 3 | 4;
  /**
   * From the md breakpoint up, hide the header rows and always show every panel (no clipping, no
   * extra spacing), so the same markup doubles as the plain desktop layout. Below md it is a normal
   * accordion. Use when the content should not be duplicated for mobile and desktop.
   */
  alwaysOpenFromMd?: boolean;
  className?: string;
};

/**
 * Accessible single-open accordion: numbered rows, a filled active row and an arrow on the right.
 *  - Header = <button aria-expanded aria-controls> inside a heading; panel = role="region" labelled by it.
 *  - Enter/Space toggle (native button); Arrow Up/Down, Home and End move between headers.
 *  - Collapsed panels stay in the DOM (SEO): they are hidden with CSS (visibility), not unmounted, and
 *    open/close animates the height. Animations are off under prefers-reduced-motion.
 * It has no breakpoint logic: callers decide where it is shown (e.g. wrap it in `md:hidden`).
 */
export function Accordion({
  items,
  defaultOpenId = null,
  headingLevel = 3,
  alwaysOpenFromMd = false,
  className = "",
}: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const Heading: ElementType = `h${headingLevel}`;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      buttons.current[next]?.focus();
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const open = openId === item.id;
        const headerId = `${baseId}-header-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id}>
            <Heading className={alwaysOpenFromMd ? "m-0 md:hidden" : "m-0"}>
              <button
                ref={(el) => {
                  buttons.current[index] = el;
                }}
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`flex min-h-[60px] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${
                  open
                    ? "border-accent-fill bg-accent-fill text-on-accent"
                    : "border-line bg-white/[0.04] text-white hover:border-accent/40 light:bg-[#ffffff]"
                }`}
              >
                {item.number && (
                  <span
                    aria-hidden="true"
                    className={`font-mono text-sm tabular-nums ${open ? "text-on-accent/90" : "text-slate-400"}`}
                  >
                    {item.number}
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold leading-snug">{item.title}</span>
                  {item.subtitle && (
                    <span className={`mt-0.5 block text-sm ${open ? "text-on-accent/90" : "text-slate-400"}`}>
                      {item.subtitle}
                    </span>
                  )}
                </span>
                {item.badge && (
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      open ? "bg-on-accent/10 text-on-accent" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 motion-reduce:transition-none ${
                    open ? "border-on-accent/40 bg-on-accent/15 text-on-accent" : "border-line-strong text-slate-300"
                  }`}
                >
                  {/* Right arrow when closed, turns to point down when open. */}
                  <ArrowRight
                    className={`size-4 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-90" : ""}`}
                  />
                </span>
              </button>
            </Heading>

            {/* grid-rows 0fr -> 1fr animates the height. visibility (not unmounting) hides collapsed content
                from sight, focus and assistive tech while keeping it in the DOM; it flips after the close animation. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${
                open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
              } ${alwaysOpenFromMd ? "md:visible md:grid-rows-[1fr]" : ""}`}
            >
              <div className={`min-h-0 overflow-hidden ${alwaysOpenFromMd ? "md:overflow-visible" : ""}`}>
                <div className={`pt-2 ${alwaysOpenFromMd ? "md:pt-0" : ""}`}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
