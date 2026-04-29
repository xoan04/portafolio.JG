"use client";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Props = {
  locale: Locale;
  dict: Pick<Dictionary, "nav" | "common">;
};

export function SiteHeader({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-white/10 bg-zinc-950/75 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="#intro"
          className="shrink-0 font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          JJG<span className="text-cyan-400">.</span>
        </Link>
        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1"
          aria-label={dict.nav.label}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 lg:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div
            className="flex rounded-full border border-white/10 bg-zinc-900/50 p-0.5 text-xs font-semibold"
            role="group"
            aria-label={dict.common.language}
          >
            <Link
              href={`/es${pathWithoutLocale}`}
              className={`rounded-full px-2.5 py-1.5 transition lg:px-3 ${
                locale === "es"
                  ? "bg-cyan-500/20 text-cyan-200"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={locale === "es" ? "true" : undefined}
              hrefLang="es"
            >
              ES
            </Link>
            <Link
              href={`/en${pathWithoutLocale}`}
              className={`rounded-full px-2.5 py-1.5 transition lg:px-3 ${
                locale === "en"
                  ? "bg-cyan-500/20 text-cyan-200"
                  : "text-zinc-400 hover:text-white"
              }`}
              aria-current={locale === "en" ? "true" : undefined}
              hrefLang="en"
            >
              EN
            </Link>
          </div>
          <Link
            href="#contacto"
            className="hidden rounded-full bg-cyan-500/15 px-3 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/40 transition hover:bg-cyan-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:inline-flex"
          >
            {dict.common.letsTalk}
          </Link>
        </div>
      </div>
    </header>
  );
}
