"use client";

import { Badge } from "@/components/ui/Badge";
import { PixelCard } from "@/components/ui/PixelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const XP_REWARDS = ["+120 XP", "+95 XP", "+110 XP", "+80 XP"];

export function Experience({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { experience } = dict;
  const chrome = getUiChrome(locale);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t-[3px] border-border/15 bg-surface/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          titleId="experience-heading"
          description={experience.description}
        />

        <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-[3px] before:bg-[repeating-linear-gradient(180deg,var(--border)_0_6px,transparent_6px_12px)] before:opacity-30 sm:before:left-[19px]">
          {experience.items.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              className="relative pl-12 sm:pl-14"
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span
                className="absolute top-6 left-1 flex h-7 w-7 items-center justify-center rounded-[8px] border-[3px] border-border bg-secondary shadow-[var(--shadow-pressed)] sm:left-2"
                aria-hidden
              >
                <Check className="h-3.5 w-3.5 text-text" strokeWidth={3} />
              </span>

              <PixelCard className="p-5 sm:p-7" hover>
                <div className="flex flex-col gap-3 border-b-2 border-border/15 pb-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge tone="secondary">{chrome.questClear}</Badge>
                      <Badge tone="accent">
                        {XP_REWARDS[index % XP_REWARDS.length]}
                      </Badge>
                    </div>
                    <h3 className="font-pixel text-[11px] leading-relaxed text-text sm:text-xs">
                      {job.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {job.company}
                    </p>
                  </div>
                  <p className="font-pixel shrink-0 text-[9px] text-muted">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-pixel mt-0.5 text-[8px] text-accent">
                        ▶
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </PixelCard>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
