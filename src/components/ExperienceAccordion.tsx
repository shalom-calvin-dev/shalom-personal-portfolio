import { MapPin } from "lucide-react";
import { experience } from "@/lib/experience";
import { Accordion, type AccordionItem } from "./Accordion";

/**
 * Mobile presentation of the Experience section: one numbered, single-open row per job (role,
 * company and dates in the header), with the current role open by default. The panel shows the
 * summary and highlights. The "Key projects" list is intentionally left out here (the Projects
 * section covers it); the desktop timeline cards in ExperienceCard.tsx still show it. The desktop
 * timeline is a separate block that is only shown from the md breakpoint up.
 */
export function ExperienceAccordion() {
  const items: AccordionItem[] = experience.map((entry, i) => ({
    id: entry.id,
    number: String(i + 1).padStart(2, "0"),
    title: entry.role,
    subtitle: (
      <>
        <span className="block">{entry.company}</span>
        <span className="block font-mono text-xs">{entry.period}</span>
      </>
    ),
    // No "Current" badge here: the date line already ends in "Present", and the badge crowds narrow headers.
    content: (
      <div className="rounded-xl border border-line bg-card p-4">
        {entry.location && (
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="size-3" aria-hidden="true" />
            {entry.location}
          </p>
        )}
        {entry.summary && (
          <p className={`text-sm leading-relaxed text-slate-400 ${entry.location ? "mt-3" : ""}`}>
            {entry.summary}
          </p>
        )}
        <ul className={`space-y-2.5 ${entry.summary || entry.location ? "mt-4" : ""}`}>
          {entry.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  const currentId = experience.find((e) => e.current)?.id ?? experience[0]?.id ?? null;

  return <Accordion items={items} defaultOpenId={currentId} />;
}
