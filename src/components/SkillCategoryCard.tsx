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
      className="h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-px transition duration-300 hover:-translate-y-1 hover:from-blue-400/50 hover:to-purple-500/30"
    >
      <div className="h-full rounded-[calc(1rem-1px)] bg-card p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
            <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <h3 id={headingId} className="text-lg font-semibold text-white">
            {category.title}
          </h3>
        </div>

        <ul className="mt-6 grid gap-x-2 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {category.skills.map((skill) => (
            <li
              key={skill.name}
              // min-h keeps every row the same height whether or not it has a logo tile.
              className={`group/skill flex min-h-[50px] items-center gap-2.5 rounded-lg border border-transparent px-1.5 py-1.5 transition hover:border-white/10 hover:bg-white/[0.03] ${
                // Very long names take a full row (same breakpoints as the grid) instead of
                // wrapping onto many lines inside a narrow column.
                skill.name.length > WIDE_NAME_LENGTH ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              <SkillLogo skill={skill} />
              <span className="min-w-0 text-pretty text-sm leading-snug text-slate-300 transition group-hover/skill:text-white">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
