import { skillCategories } from "@/lib/skills";
import { Accordion, type AccordionItem } from "./Accordion";
import { TechChip } from "./TechChip";

/**
 * Mobile presentation of the Technical Skills: one numbered row per stack, single-open, with the
 * stack's skills as wrapped chips directly under the row. The desktop card grid (Skills.tsx) is a
 * separate block that is only shown from the md breakpoint up.
 */
export function SkillsAccordion() {
  const items: AccordionItem[] = skillCategories.map((category, i) => ({
    id: category.id,
    number: String(i + 1).padStart(2, "0"),
    title: category.title,
    badge: (
      <>
        <span aria-hidden="true">{category.skills.length}</span>
        <span className="sr-only">{category.skills.length} skills</span>
      </>
    ),
    content: (
      <ul
        aria-label={`${category.title} skills`}
        className="flex flex-wrap gap-2 rounded-xl border border-line bg-card p-4"
      >
        {category.skills.map((skill) => (
          <TechChip key={skill.name} name={skill.name} note={skill.note} className="max-w-full" />
        ))}
      </ul>
    ),
  }));

  return <Accordion items={items} defaultOpenId={skillCategories[0].id} />;
}
