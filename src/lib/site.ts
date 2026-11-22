/**
 * Public site URL, used for canonical links, Open Graph URLs, robots.txt and the sitemap.
 *
 * Intentionally NOT hardcoded. It is resolved from the environment, in this order:
 *   1. NEXT_PUBLIC_SITE_URL           (set this once the final URL/domain is known, e.g. https://example.com)
 *   2. VERCEL_PROJECT_PRODUCTION_URL  (provided automatically by Vercel on deployments)
 * When neither is set (e.g. local development), `siteUrl` is undefined and the
 * URL-dependent metadata (canonical, sitemap entries, absolute social URLs) is simply omitted.
 */
function resolveSiteUrl(): URL | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const raw = explicit || (vercelHost ? `https://${vercelHost}` : undefined);
  if (!raw) return undefined;
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}

export const siteUrl = resolveSiteUrl();
