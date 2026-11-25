import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Sitemap entries must be absolute URLs; they come from SITE_URL in src/lib/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL("/", siteUrl).toString(), changeFrequency: "monthly", priority: 1 }];
}
