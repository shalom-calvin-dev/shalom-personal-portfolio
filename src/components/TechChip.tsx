import { brandKeyFor } from "@/lib/brand-icons";
import { BrandLogo } from "./BrandLogo";

/** Technology tag (renders an <li>). Shows its icon (brand logo or original illustration) when one exists, otherwise just the name. */
export function TechChip({
  name,
  note,
  className = "",
}: {
  name: string;
  /** Optional muted qualifier shown after the name (same text as the desktop secondary line). */
  note?: string;
  className?: string;
}) {
  const brand = brandKeyFor(name);
  return (
    <li
      className={`inline-flex items-center gap-1.5 rounded-md border border-line bg-white/[0.03] py-1 font-mono text-xs text-slate-300 ${
        brand ? "pl-1.5 pr-2.5" : "px-2.5"
      } ${className}`}
    >
      {brand && <BrandLogo brand={brand} size="sm" />}
      {note ? (
        <span>
          {name} <span className="text-slate-400">{note}</span>
        </span>
      ) : (
        name
      )}
    </li>
  );
}
