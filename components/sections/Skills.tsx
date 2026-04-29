import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import type { Dictionary } from "@/lib/i18n/types";

export function Skills({ dict }: { dict: Dictionary }) {
  const { skills } = dict;
  return (
    <section
      id="habilidades"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          titleId="skills-heading"
          description={skills.description}
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.items.map((s) => (
            <li key={s.key}>
              <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-5 transition hover:border-cyan-500/30 hover:bg-zinc-900/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 ring-1 ring-white/10 transition group-hover:ring-cyan-400/30">
                  <SkillIcon skillKey={s.key} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {s.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
