import type { Dictionary } from "@/lib/i18n/types";
import Image from "next/image";
import Link from "next/link";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;
  return (
    <section
      id="intro"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* Gradiente en lugar de imagen: evita 404 si falta /assets/hero-mesh.svg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_5%,rgba(129,140,248,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_30%,rgba(52,211,153,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/55 via-zinc-950/92 to-zinc-950" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden
            />
            {hero.badge}
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            {hero.headline}
          </p>
          <h1
            id="hero-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {hero.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#proyectos"
              className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              {hero.ctaProjects}
            </Link>
            <Link
              href="#contacto"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-zinc-100 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {hero.ctaContact}
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 text-sm">
            <div>
              <dt className="text-zinc-500">{hero.stats.experience.label}</dt>
              <dd className="mt-1 font-[family-name:var(--font-mono)] text-lg font-medium text-white">
                {hero.stats.experience.value}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">{hero.stats.focus.label}</dt>
              <dd className="mt-1 font-medium text-white">
                {hero.stats.focus.value}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">{hero.stats.location.label}</dt>
              <dd className="mt-1 font-medium text-white">
                {hero.stats.location.value}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-indigo-500/20 to-emerald-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5 backdrop-blur">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-900">
              <Image
                src="/IMG_2756.png"
                alt={hero.avatarAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 280px, min(320px, 28vw)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
