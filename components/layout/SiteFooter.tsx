import type { Dictionary } from "@/lib/i18n/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-zinc-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>{dict.footer.line1}</p>
        <p className="text-zinc-600">{dict.footer.line2}</p>
      </div>
    </footer>
  );
}
