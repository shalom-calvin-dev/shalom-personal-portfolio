"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientYear = () => String(new Date().getFullYear());
// The prerendered HTML has no year; the browser fills it in right after hydration.
const getServerYear = () => "";

/** Renders the current year in the visitor's browser so it never goes stale. */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <span className="inline-block min-w-[2.25rem]">{year}</span>;
}
