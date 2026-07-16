"use client";

import { Badge } from "@/components/ui/Badge";
import { PixelCard } from "@/components/ui/PixelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";
import { motion, useReducedMotion } from "framer-motion";

type Rarity = "legendary" | "epic" | "rare";

const RARITY: Record<
  string,
  {
    rarity: Rarity;
    stars: string;
    tone: "accent" | "purple" | "primary" | "secondary" | "orange";
  }
> = {
  react: { rarity: "epic", stars: "★★★★★", tone: "primary" },
  nextjs: { rarity: "legendary", stars: "★★★★★", tone: "accent" },
  typescript: { rarity: "legendary", stars: "★★★★★", tone: "accent" },
  tailwind: { rarity: "epic", stars: "★★★★☆", tone: "primary" },
  nestjs: { rarity: "epic", stars: "★★★★☆", tone: "purple" },
  prisma: { rarity: "rare", stars: "★★★★☆", tone: "secondary" },
  flutter: { rarity: "rare", stars: "★★★★☆", tone: "primary" },
  getx: { rarity: "rare", stars: "★★★☆☆", tone: "purple" },
  firebase: { rarity: "epic", stars: "★★★★☆", tone: "orange" },
  git: { rarity: "epic", stars: "★★★★☆", tone: "orange" },
  github: { rarity: "legendary", stars: "★★★★★", tone: "accent" },
};

export function Skills({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { skills } = dict;
  const chrome = getUiChrome(locale);
  const reduceMotion = useReducedMotion();
  const rarityLabel = {
    legendary: chrome.legendary,
    epic: chrome.epic,
    rare: chrome.rare,
  };

  return (
    <section
      id="habilidades"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t-[3px] border-border/15 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          titleId="skills-heading"
          description={skills.description}
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.items.map((s, index) => {
            const meta = RARITY[s.key] ?? {
              rarity: "rare" as const,
              stars: "★★★☆☆",
              tone: "primary" as const,
            };
            const tone = meta.tone;

            return (
              <li key={s.key}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: Math.min(index * 0.04, 0.3) }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -6, scale: 1.03 }
                  }
                >
                  <PixelCard className="group h-full p-5" hover={false}>
                    <div className="flex gap-4">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border-2 border-border bg-surface shadow-[var(--shadow-pressed)] transition group-hover:bg-primary/20">
                        <SkillIcon skillKey={s.key} />
                        <span
                          className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-accent opacity-0 transition group-hover:animate-pulse group-hover:opacity-100"
                          style={{ boxShadow: "0 0 0 1px var(--border)" }}
                          aria-hidden
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-pixel text-[10px] text-text sm:text-[11px]">
                            {s.name}
                          </h3>
                          <Badge tone={tone}>
                            {rarityLabel[meta.rarity]}
                          </Badge>
                        </div>
                        <p className="font-pixel mt-1.5 text-[9px] text-accent">
                          {meta.stars}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </PixelCard>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
