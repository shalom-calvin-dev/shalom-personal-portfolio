"use client";

import Image from "next/image";
import { useState } from "react";
import { brandLogos, type BrandKey } from "@/lib/brand-icons";

const sizes = {
  // tile px, logo px
  sm: { tile: "size-5", px: 14 },
  md: { tile: "size-9", px: 24 },
} as const;

/**
 * Technology icon (transparent PNG) on a light tile, so colors stay legible in both themes.
 * Decorative: the technology name is always rendered as text next to it.
 * If the image file is missing or fails to load, the whole tile is dropped so the page never
 * shows an empty box or a broken-image icon; the name simply appears as plain text.
 */
export function BrandLogo({ brand, size = "md" }: { brand: BrandKey; size?: keyof typeof sizes }) {
  const [failed, setFailed] = useState(false);
  const { tile, px } = sizes[size];
  if (failed) return null;
  return (
    <span
      aria-hidden="true"
      className={`${tile} inline-flex shrink-0 items-center justify-center rounded-md bg-[#f8fafc] ring-1 ring-[#0f172a]/10`}
    >
      <Image
        src={brandLogos[brand].src}
        alt=""
        width={px}
        height={px}
        unoptimized
        onError={() => setFailed(true)}
        // Also covers an image that already failed before React attached the error handler.
        ref={(img) => {
          if (img && img.complete && img.naturalWidth === 0) setFailed(true);
        }}
      />
    </span>
  );
}
