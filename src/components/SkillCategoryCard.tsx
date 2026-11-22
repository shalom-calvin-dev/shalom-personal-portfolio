import type { SkillCategory } from "@/lib/skills";
import { SkillIcon, icons } from "./SkillIcon";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = icons[category.icon];
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

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {category.skills.map((skill) => (
            <li
              key={skill.name}
              className="group/skill flex items-center gap-3 rounded-lg border border-transparent px-1.5 py-1.5 transition hover:border-white/10 hover:bg-white/[0.03]"
            >
              <SkillIcon skill={skill} />
              <span className="text-sm leading-snug text-slate-300 transition group-hover/skill:text-white">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
