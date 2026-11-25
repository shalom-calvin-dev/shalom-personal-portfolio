import { cacheLife } from "next/cache";
import { experienceLabel } from "./years-of-experience";

/**
 * The years-of-experience label (e.g. "3+ years") for server code: the page and the metadata.
 *
 * This project uses Cache Components, where `export const revalidate = ...` is not allowed. The
 * equivalent is a cached function with a cache lifetime: "days" revalidates after 1 day (86400 s),
 * so the value (and the prerendered page and metadata that use it) refreshes at most a day after
 * the anniversary. Computing it here, on the server, also avoids any hydration mismatch.
 */
export async function getExperienceLabel(): Promise<string> {
  "use cache";
  cacheLife("days");
  return experienceLabel();
}
