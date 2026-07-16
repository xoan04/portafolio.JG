"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DialogueBox } from "@/components/ui/DialogueBox";
import { XpBar } from "@/components/ui/XpBar";
import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { hero } = dict;
  const chrome = getUiChrome(locale);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="intro"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      {/* Floating pixel decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <span className="absolute top-28 left-[12%] h-2 w-2 animate-pixel-float bg-accent opacity-60" />
        <span
          className="absolute top-40 right-[18%] h-2 w-3 animate-pixel-float bg-primary opacity-50"
          style={{ animationDelay: "0.8s" }}
        />
        <span
          className="absolute bottom-24 left-[22%] h-1.5 w-1.5 bg-pink opacity-50"
          style={{ boxShadow: "0 0 0 2px var(--border)" }}
        />
        <span className="absolute top-1/2 right-[8%] h-2 w-2 rotate-45 bg-purple/50 opacity-40" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge tone="secondary" icon={<span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />}>
            {hero.badge}
          </Badge>

          <p className="font-pixel mt-5 text-[10px] text-primary sm:text-[11px]">
            LV.99 · {hero.headline}
          </p>

          <h1
            id="hero-heading"
            className="font-pixel mt-3 text-balance text-3xl leading-snug tracking-wide text-text sm:text-4xl lg:text-5xl"
          >
            {hero.name}
          </h1>

          <div className="mt-5 max-w-md">
            <XpBar
              label="XP"
              value={92}
              tone="accent"
              showValue={false}
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.lead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#proyectos" variant="primary" size="lg">
              {hero.ctaProjects}
            </Button>
            <Button href="#contacto" variant="ghost" size="lg">
              {hero.ctaContact}
            </Button>
          </div>

          <DialogueBox className="mt-8 max-w-lg" speaker={chrome.npc}>
            <p>
              <span className="font-pixel mr-2 text-[9px] text-accent">▶</span>
              {hero.stats.focus.value} · {hero.stats.location.value} ·{" "}
              {hero.stats.experience.value}
            </p>
          </DialogueBox>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t-[3px] border-border/20 pt-6 text-sm">
            <div className="rounded-[12px] border-2 border-border bg-card p-3 shadow-[var(--shadow-pressed)]">
              <dt className="font-pixel text-[8px] text-muted">
                {hero.stats.experience.label}
              </dt>
              <dd className="mt-1 font-pixel text-[10px] text-text">
                {hero.stats.experience.value}
              </dd>
            </div>
            <div className="rounded-[12px] border-2 border-border bg-card p-3 shadow-[var(--shadow-pressed)]">
              <dt className="font-pixel text-[8px] text-muted">
                {hero.stats.focus.label}
              </dt>
              <dd className="mt-1 font-pixel text-[10px] text-text">
                {hero.stats.focus.value}
              </dd>
            </div>
            <div className="rounded-[12px] border-2 border-border bg-card p-3 shadow-[var(--shadow-pressed)]">
              <dt className="font-pixel text-[8px] text-muted">
                {hero.stats.location.label}
              </dt>
              <dd className="mt-1 text-xs font-medium text-text">
                {hero.stats.location.value}
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div
            className="absolute -inset-3 rounded-[18px] bg-primary/20 blur-xl"
            aria-hidden
          />
          <div className="animate-pixel-float relative overflow-hidden rounded-[var(--radius-card)] border-[3px] border-border bg-card p-2 shadow-[var(--shadow-float)]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-surface">
              <Image
                src="/IMG_2756.png"
                alt={hero.avatarAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 260px, min(300px, 26vw)"
                style={{ imageRendering: "auto" }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 px-1 pb-1">
              <Badge tone="primary">{chrome.player}</Badge>
              <span className="font-pixel text-[8px] text-muted">HP 100</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
