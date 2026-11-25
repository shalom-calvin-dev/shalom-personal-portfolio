import type { SkillCategory } from "@/lib/skills";
import { SkillLogo, categoryIcons } from "./SkillIcon";

/** Skill names longer than this many characters span the full width of a two-column list. */
const WIDE_NAME_LENGTH = 21;

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = categoryIcons[category.icon];
  const headingId = `skills-${category.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="h-full rounded-xl border border-line bg-card transition-colors duration-300 hover:border-accent/40"
    >
      <div className="h-full p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-accent">
            <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <h3 id={headingId} className="text-lg font-semibold text-white">
            {category.title}
          </h3>
        </div>

        <ul
          className={`mt-6 grid gap-y-2.5 ${
            // A single-column category keeps one skill per row at every width.
            category.singleColumn ? "grid-cols-1" : "gap-x-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          }`}
        >
          {category.skills.map((skill) => (
            <li
              key={skill.name}
              // min-h keeps every row the same height whether or not it has a logo tile.
              className={`group/skill flex min-h-[50px] items-center gap-2.5 rounded-lg border border-transparent px-1.5 py-1.5 transition hover:border-line hover:bg-white/[0.03] ${
                // Very long names take a full row (same breakpoints as the grid) instead of
                // wrapping onto many lines inside a narrow column. (Not needed in one column,
                // where a column span would add an unwanted second column.)
                !category.singleColumn && skill.name.length > WIDE_NAME_LENGTH
                  ? "sm:col-span-2 lg:col-span-1 xl:col-span-2"
                  : ""
              }`}
            >
              <SkillLogo skill={skill} />
              {skill.note ? (
                <span className="min-w-0">
                  <span className="block text-pretty text-sm leading-snug text-slate-300 transition group-hover/skill:text-white">
                    {skill.name}
                  </span>
                  <span className="block text-xs leading-snug text-slate-400">{skill.note}</span>
                </span>
              ) : (
                <span className="min-w-0 text-pretty text-sm leading-snug text-slate-300 transition group-hover/skill:text-white">
                  {skill.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
