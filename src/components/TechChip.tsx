import { brandKeyFor } from "@/lib/brand-icons";
import { BrandLogo } from "./BrandLogo";

/** Technology tag (renders an <li>). Shows its icon (brand logo or original illustration) when one exists, otherwise just the name. */
export function TechChip({ name, className = "" }: { name: string; className?: string }) {
  const brand = brandKeyFor(name);
  return (
    <li
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] py-1 font-mono text-xs text-slate-300 ${
        brand ? "pl-1.5 pr-2.5" : "px-2.5"
      } ${className}`}
    >
      {brand && <BrandLogo brand={brand} size="sm" />}
      {name}
    </li>
  );
}
