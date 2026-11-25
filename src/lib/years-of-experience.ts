/**
 * Years of professional experience, computed from a fixed career start date so the value
 * increments by itself. (Named years-of-experience.ts because experience.ts already holds the
 * career timeline content.)
 *
 * Do not call these without an argument during a plain server render: reading the current time
 * outside a cache scope is a "blocking route" error under Cache Components. Use
 * getExperienceLabel() from ./experience-label, which caches the value for a day.
 */

/** March 2023: Software Engineer at Star Knowledge Ventures. (Month is 0-based.) */
export const CAREER_START = new Date(2023, 2, 1);

/** Whole completed years since CAREER_START, never below 0. */
export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const anniversaryReached =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() && now.getDate() >= CAREER_START.getDate());
  if (!anniversaryReached) years -= 1;
  return Math.max(0, years);
}

/** e.g. "3+ years". */
export function experienceLabel(now: Date = new Date()): string {
  return `${getYearsOfExperience(now)}+ years`;
}
