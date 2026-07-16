"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PixelCard } from "@/components/ui/PixelCard";
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
      className="scroll-mt-24 border-t-[3px] border-border/15 bg-surface/35 py-20 sm:py-24"
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
              row.badge === "cofounder" ? p.badgeCofounder : p.badgeProduct;
            const tone =
              row.badge === "cofounder"
                ? ("purple" as const)
                : ("primary" as const);

            return (
              <li key={row.id}>
                <PixelCard className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-pixel text-[12px] leading-relaxed text-text sm:text-sm">
                      {copy.title}
                    </h3>
                    <Badge tone={tone}>{badgeLabel}</Badge>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {copy.description}
                  </p>
                  <div className="mt-6">
                    <Button href={row.url} external variant="secondary" size="sm">
                      {p.visitLink}
                    </Button>
                  </div>
                </PixelCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
