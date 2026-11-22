import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Sitemap entries must be absolute URLs, so this stays empty until the real site URL is
// configured (NEXT_PUBLIC_SITE_URL, or automatically on Vercel). See src/lib/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [{ url: new URL("/", siteUrl).toString(), changeFrequency: "monthly", priority: 1 }];
}
