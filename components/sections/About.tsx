"use client";

import { Badge } from "@/components/ui/Badge";
import { DialogueBox } from "@/components/ui/DialogueBox";
import { PixelCard } from "@/components/ui/PixelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { XpBar } from "@/components/ui/XpBar";
import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";

const CHARACTER_STATS = [
  { label: "Frontend", value: 96, tone: "primary" as const },
  { label: "Backend", value: 88, tone: "secondary" as const },
  { label: "Architecture", value: 84, tone: "purple" as const },
  { label: "UI Design", value: 80, tone: "pink" as const },
  { label: "Leadership", value: 78, tone: "orange" as const },
  { label: "Problem Solving", value: 92, tone: "accent" as const },
];

export function About({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { about, education } = dict;
  const chrome = getUiChrome(locale);
  return (
    <section
      id="perfil"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t-[3px] border-border/15 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          titleId="about-heading"
          description={about.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <PixelCard hover={false} className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h3 className="font-pixel text-[11px] text-text sm:text-xs">
                {chrome.characterStats}
              </h3>
              <Badge tone="accent">LV.99</Badge>
            </div>
            <div className="space-y-4">
              {CHARACTER_STATS.map((stat) => (
                <XpBar
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  tone={stat.tone}
                />
              ))}
            </div>
          </PixelCard>

          <div className="flex flex-col gap-6">
            <PixelCard hover={false} className="p-6 sm:p-8">
              <h3 className="font-pixel text-[11px] text-text sm:text-xs">
                {about.highlightsTitle}
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {about.highlights.map((text, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 border-2 border-border bg-primary"
                      style={{
                        backgroundColor:
                          i % 3 === 0
                            ? "var(--primary)"
                            : i % 3 === 1
                              ? "var(--purple)"
                              : "var(--secondary)",
                      }}
                      aria-hidden
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </PixelCard>

            <DialogueBox speaker={about.quoteAuthor.replace(/^—\s*/, "")}>
              <blockquote>{about.quote}</blockquote>
            </DialogueBox>
          </div>
        </div>

        <PixelCard hover={false} className="mt-8 p-6 sm:p-8">
          <Badge tone="purple">{education.eyebrow}</Badge>
          <h3 className="font-pixel mt-4 text-[12px] leading-relaxed text-text sm:text-sm">
            {education.degree}
          </h3>
          <p className="mt-2 text-sm text-muted">{education.school}</p>
          <p className="font-pixel mt-2 text-[9px] text-primary">
            {education.period}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {education.detail}
          </p>
        </PixelCard>
      </div>
    </section>
  );
}
