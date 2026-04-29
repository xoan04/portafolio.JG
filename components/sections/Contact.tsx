import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/types";
import Link from "next/link";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact, common } = dict;
  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-gradient-to-b from-zinc-950 to-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          titleId="contact-heading"
          description={contact.description}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contact.items.map((item) => (
            <li key={item.key}>
              {item.href ? (
                <Link
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition hover:border-cyan-400/35 hover:bg-zinc-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white group-hover:text-cyan-200">
                    {item.label}
                  </span>
                  <span className="mt-2 text-sm text-zinc-400">{item.hint}</span>
                  <span className="mt-4 text-sm font-medium text-cyan-300">
                    {common.open}
                    <span
                      aria-hidden
                      className="ml-1 inline-block transition group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ) : (
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-2 text-sm text-zinc-400">{item.hint}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
