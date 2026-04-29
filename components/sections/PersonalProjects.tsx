import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  personalProjectLinks,
  type PersonalProjectId,
} from "@/data/personal-projects";
import type { Dictionary } from "@/lib/i18n/types";

function getCardCopy(dict: Dictionary, id: PersonalProjectId) {
  const pp = dict.personalProjects;
  switch (id) {
    case "lifetag":
      return pp.lifetag;
    case "kodedocs":
      return pp.kodedocs;
    case "kodelabs":
      return pp.kodelabs;
  }
}

export function PersonalProjects({ dict }: { dict: Dictionary }) {
  const p = dict.personalProjects;

  return (
    <section
      id="personales"
      aria-labelledby="personal-projects-heading"
      className="scroll-mt-24 border-t border-white/5 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          titleId="personal-projects-heading"
          description={p.description}
        />

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {personalProjectLinks.map((row) => {
            const copy = getCardCopy(dict, row.id);
            const badgeLabel =
              row.badge === "cofounder"
                ? p.badgeCofounder
                : p.badgeProduct;

            return (
              <li key={row.id}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-950 p-6 shadow-lg shadow-black/30 transition hover:border-cyan-500/35">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                      {copy.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300/95">
                      {badgeLabel}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {copy.description}
                  </p>
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    {p.visitLink}
                    <span aria-hidden className="ml-1">
                      ↗
                    </span>
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
