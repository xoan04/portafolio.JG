"use client";

import { Button } from "@/components/ui/Button";
import { DialogueBox } from "@/components/ui/DialogueBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils/cn";
import { Code2, Mail, MapPin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const ICONS: Record<string, LucideIcon> = {
  email: Mail,
  phone: MessageCircle,
  github: Code2,
  location: MapPin,
};

export function Contact({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { contact, common } = dict;
  const chrome = getUiChrome(locale);
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);
  const primary =
    contact.items.find((i) => i.key === "email") ?? contact.items[0];

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t-[3px] border-border/15 bg-surface/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          titleId="contact-heading"
          description={contact.description}
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <DialogueBox speaker={chrome.recruiter} className="mb-6">
            <p className="font-pixel text-sm leading-relaxed text-text">
              {chrome.needDev}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setChoice("yes")}
                className={cn(
                  "font-pixel inline-flex items-center gap-2 rounded-[var(--radius-button)] border-[3px] px-4 py-2.5 text-sm transition",
                  choice === "yes"
                    ? "border-border bg-secondary text-text shadow-[var(--shadow-pressed)]"
                    : "border-border bg-card text-muted hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
                )}
                aria-pressed={choice === "yes"}
              >
                <span className="text-accent" aria-hidden>
                  ▶
                </span>
                {chrome.yes}
              </button>
              <button
                type="button"
                onClick={() => setChoice("no")}
                className={cn(
                  "font-pixel inline-flex items-center gap-2 rounded-[var(--radius-button)] border-[3px] px-4 py-2.5 text-sm transition",
                  choice === "no"
                    ? "border-border bg-danger/30 text-text shadow-[var(--shadow-pressed)]"
                    : "border-border bg-card text-muted hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
                )}
                aria-pressed={choice === "no"}
              >
                {chrome.no}
              </button>
            </div>
            {choice === "yes" && primary?.href ? (
              <div className="mt-5">
                <Button
                  href={primary.href}
                  external={primary.external}
                  size="md"
                >
                  {common.letsTalk}
                </Button>
              </div>
            ) : null}
            {choice === "no" ? (
              <p className="mt-4 text-sm text-muted">{chrome.comeBack}</p>
            ) : null}
          </DialogueBox>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {contact.items.map((item) => {
            const Icon = ICONS[item.key] ?? Mail;
            const content = (
              <>
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[10px] border-2 border-border bg-surface text-primary shadow-[var(--shadow-pressed)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-pixel text-base text-text">
                  {item.label}
                </span>
                <span className="mt-2 text-sm text-muted">{item.hint}</span>
                {item.href ? (
                  <span className="font-pixel mt-4 text-xs text-primary">
                    {common.open} →
                  </span>
                ) : null}
              </>
            );

            return (
              <li key={item.key}>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border-[3px] border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:rotate-1 hover:shadow-[var(--shadow-float)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-[var(--radius-card)] border-[3px] border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
