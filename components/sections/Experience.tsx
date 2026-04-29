import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/types";

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          titleId="experience-heading"
          description={experience.description}
        />
        <ol className="mt-14 space-y-10">
          {experience.items.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <article className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6 shadow-lg shadow-black/20 transition hover:border-cyan-500/25 sm:p-8">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-cyan-300/90">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-mono)] text-sm text-zinc-400">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-400 marker:text-cyan-500/80">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="pl-1">
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
