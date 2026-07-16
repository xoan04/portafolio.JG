import type { Locale } from "@/lib/i18n/config";
import { getUiChrome } from "@/lib/i18n/ui-chrome";
import type { Dictionary } from "@/lib/i18n/types";
import { Heart } from "lucide-react";

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const chrome = getUiChrome(locale);

  return (
    <footer className="relative z-10 border-t-[3px] border-border bg-surface/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
          <span>{chrome.madeWith}</span>
          <Heart className="h-4 w-4 fill-danger text-danger" aria-hidden />
          <span className="font-pixel text-xs text-text">Next.js</span>
          <span aria-hidden>·</span>
          <span className="font-pixel text-xs text-text">TypeScript</span>
          <span aria-hidden>·</span>
          <span className="font-pixel text-xs text-text">Tailwind</span>
        </p>
        <p className="text-sm text-muted">{dict.footer.line1}</p>
        <p className="font-pixel text-xs text-primary">{chrome.niceDay}</p>
      </div>
    </footer>
  );
}
