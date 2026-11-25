// Quick check for src/lib/years-of-experience.ts (no test runner is installed in this project).
// Run from the project root:  node scripts/test-years-of-experience.mjs
// The TypeScript source is transpiled in memory with the project's own `typescript` package.
import fs from "node:fs";
import ts from "typescript";

const source = fs.readFileSync("src/lib/years-of-experience.ts", "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const mod = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);

let failed = 0;
const check = (name, actual, expected) => {
  const ok = actual === expected;
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
};

// Dates use the local-time constructor (year, monthIndex, day), the same as CAREER_START.
const years = (y, m, d) => mod.getYearsOfExperience(new Date(y, m - 1, d));
check("2026-11-24", years(2026, 11, 24), 3);
check("2027-02-28 (day before the Feb->Mar boundary)", years(2027, 2, 28), 3);
check("2027-03-01 (anniversary)", years(2027, 3, 1), 4);
check("2023-02-01 (before the career started)", years(2023, 2, 1), 0);
check("2023-03-01 (start day)", years(2023, 3, 1), 0);
check("2024-02-29", years(2024, 2, 29), 0);
check("2024-03-01", years(2024, 3, 1), 1);
check("2020-01-01 (long before the start, never negative)", years(2020, 1, 1), 0);
check("experienceLabel() format", mod.experienceLabel(new Date(2026, 10, 24)), "3+ years");
check("experienceLabel() before the first anniversary", mod.experienceLabel(new Date(2023, 8, 1)), "0+ years");

// The start date here must match the career timeline content in src/lib/experience.ts.
const timeline = fs.readFileSync("src/lib/experience.ts", "utf8");
const m = timeline.match(/id: "star-knowledge-ventures"[\s\S]*?start: "(\d{4})-(\d{2})"/);
check(
  "CAREER_START matches experience.ts (Star Knowledge Ventures start)",
  m ? `${m[1]}-${m[2]}` : "not found",
  `${mod.CAREER_START.getFullYear()}-${String(mod.CAREER_START.getMonth() + 1).padStart(2, "0")}`,
);

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nAll checks passed");
