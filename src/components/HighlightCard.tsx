import { Layers, Server, Workflow, type LucideIcon } from "lucide-react";

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
    <article className="group relative h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-px transition duration-300 hover:-translate-y-1 hover:from-blue-400/50 hover:to-purple-500/30">
      <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-card p-6 sm:p-7">
        <span className="flex size-12 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
          <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
