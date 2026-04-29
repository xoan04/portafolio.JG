import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/types";

export function About({ dict }: { dict: Dictionary }) {
  const { about, education } = dict;
  return (
    <section
      id="perfil"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          titleId="about-heading"
          description={about.description}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8 shadow-inner shadow-black/20 backdrop-blur">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              {about.highlightsTitle}
            </h3>
            <ul className="mt-6 space-y-4 text-zinc-400">
              {about.highlights.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      i % 3 === 0
                        ? "bg-cyan-400"
                        : i % 3 === 1
                          ? "bg-indigo-400"
                          : "bg-emerald-400"
                    }`}
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-white/15 bg-zinc-900/20 p-8">
            <blockquote className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              {about.quote}
            </blockquote>
            <footer className="mt-6 text-sm font-medium text-cyan-300/90">
              {about.quoteAuthor}
            </footer>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 p-8 ring-1 ring-cyan-500/10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            {education.eyebrow}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-sm text-zinc-300">
            {education.period}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {education.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
