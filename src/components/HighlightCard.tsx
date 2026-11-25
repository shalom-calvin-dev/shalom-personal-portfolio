import { Layers, Server, Workflow, type LucideIcon } from "lucide-react";
import { TechChip } from "./TechChip";

const icons: Record<string, LucideIcon> = {
  server: Server,
  layers: Layers,
  workflow: Workflow,
};

type Props = {
  icon: string;
  title: string;
  description: string;
  tags: readonly string[];
};

export function HighlightCard({ icon, title, description, tags }: Props) {
  const Icon = icons[icon] ?? Server;
  return (
    <article className="group relative h-full rounded-xl border border-line bg-card transition-colors duration-300 hover:border-accent/40">
      <div className="flex h-full flex-col p-6 sm:p-7">
        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-tint text-accent">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {tags.map((t) => (
            <TechChip key={t} name={t} />
          ))}
        </ul>
      </div>
    </article>
  );
}
