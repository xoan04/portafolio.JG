import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
  speaker?: string;
};

export function DialogueBox({ children, title, className, speaker }: Props) {
  return (
    <div
      className={cn(
        "dialogue-tail relative rounded-[var(--radius-card)] border-[3px] border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6",
        className,
      )}
      role="region"
      aria-label={title ?? speaker ?? "Dialogue"}
    >
      {(title || speaker) && (
        <div className="mb-3 flex items-center gap-2">
          <span
            className="inline-block h-2.5 w-2.5 bg-primary"
            style={{ boxShadow: "2px 0 0 var(--border), 0 2px 0 var(--border)" }}
            aria-hidden
          />
          <p className="font-pixel text-[10px] text-primary sm:text-[11px]">
            {speaker ?? title}
          </p>
        </div>
      )}
      <div className="text-sm leading-relaxed text-text sm:text-base">
        {children}
      </div>
    </div>
  );
}
