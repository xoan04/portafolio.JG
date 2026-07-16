"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils/cn";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {
  locale: Locale;
  dict: Pick<Dictionary, "nav" | "common">;
};

export function SiteHeader({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#intro");
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const pathWithoutLocale = useMemo(
    () => pathname.replace(/^\/(es|en)/, "") || "",
    [pathname],
  );

  const nav = useMemo(
    () => [
      { href: "#intro", label: dict.nav.home },
      { href: "#perfil", label: dict.nav.about },
      { href: "#experiencia", label: dict.nav.experience },
      { href: "#proyectos", label: dict.nav.projects },
      { href: "#personales", label: dict.nav.personalProjects },
      { href: "#habilidades", label: dict.nav.skills },
      { href: "#contacto", label: dict.nav.contact },
    ],
    [dict.nav],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [nav]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b-[3px] border-border bg-card/80 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b-[3px] border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="#intro"
          className="font-pixel shrink-0 text-[10px] text-text transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-[11px]"
        >
          JJG
          <span className="text-primary">.</span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label={dict.nav.label}
        >
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-pixel relative rounded-[10px] border-2 px-2.5 py-2 text-[8px] transition duration-200 xl:px-3 xl:text-[9px]",
                  isActive
                    ? "border-border bg-primary/35 text-text shadow-[0_3px_0_var(--shadow-pixel)]"
                    : "border-transparent bg-surface/60 text-muted hover:-translate-y-0.5 hover:border-border hover:bg-card hover:text-text hover:shadow-[0_3px_0_var(--shadow-pixel)]",
                )}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "nav-indicator"}
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 bg-accent"
                    style={{ boxShadow: "0 0 0 2px var(--border)" }}
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div
            className="flex rounded-[var(--radius-badge)] border-2 border-border bg-surface p-0.5"
            role="group"
            aria-label={dict.common.language}
          >
            <Link
              href={`/es${pathWithoutLocale}`}
              className={cn(
                "font-pixel rounded-[var(--radius-badge)] px-2.5 py-1.5 text-[9px] transition",
                locale === "es"
                  ? "bg-primary text-text"
                  : "text-muted hover:text-text",
              )}
              aria-current={locale === "es" ? "true" : undefined}
              hrefLang="es"
            >
              ES
            </Link>
            <Link
              href={`/en${pathWithoutLocale}`}
              className={cn(
                "font-pixel rounded-[var(--radius-badge)] px-2.5 py-1.5 text-[9px] transition",
                locale === "en"
                  ? "bg-primary text-text"
                  : "text-muted hover:text-text",
              )}
              aria-current={locale === "en" ? "true" : undefined}
              hrefLang="en"
            >
              EN
            </Link>
          </div>

          <Button
            href="#contacto"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {dict.common.letsTalk}
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] border-[3px] border-border bg-card text-text shadow-[var(--shadow-soft)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={
              open
                ? locale === "es"
                  ? "Cerrar menú"
                  : "Close menu"
                : locale === "es"
                  ? "Abrir menú"
                  : "Open menu"
            }
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile inventory drawer */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-t-[3px] border-border bg-card/95 backdrop-blur-md lg:hidden"
        >
          <nav
            className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-4 sm:px-6"
            aria-label={dict.nav.label}
          >
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-pixel rounded-[12px] border-[3px] px-3 py-3 text-center text-[9px] transition",
                    isActive
                      ? "border-border bg-primary/30 text-text"
                      : "border-border/40 bg-surface text-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="px-4 pb-4 sm:px-6">
            <Badge tone="accent">HUD</Badge>
          </div>
        </div>
      ) : null}
    </header>
  );
}
