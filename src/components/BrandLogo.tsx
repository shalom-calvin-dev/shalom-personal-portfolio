import Image from "next/image";
import { brandLogos, type BrandKey } from "@/lib/brand-icons";

const sizes = {
  // tile px, logo px
  sm: { tile: "size-5", px: 14 },
  md: { tile: "size-9", px: 24 },
} as const;

/**
 * Official logo on a light tile, so brand colors stay legible in both themes.
 * Decorative: the technology name is always rendered as text next to it.
 */
export function BrandLogo({ brand, size = "md" }: { brand: BrandKey; size?: keyof typeof sizes }) {
  const { tile, px } = sizes[size];
  return (
    <span
      aria-hidden="true"
      className={`${tile} inline-flex shrink-0 items-center justify-center rounded-md bg-[#f8fafc] ring-1 ring-[#0f172a]/10`}
    >
      <Image src={brandLogos[brand].src} alt="" width={px} height={px} unoptimized />
    </span>
  );
}
