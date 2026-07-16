import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type BadgeTone =
  | "primary"
  | "secondary"
  | "accent"
  | "orange"
  | "pink"
  | "purple"
  | "danger"
  | "muted";

const tones: Record<BadgeTone, string> = {
  primary: "bg-primary/25 text-text",
  secondary: "bg-secondary/35 text-text",
  accent: "bg-accent/40 text-text",
  orange: "bg-orange/25 text-text",
  pink: "bg-pink/25 text-text",
  purple: "bg-purple/25 text-text",
  danger: "bg-danger/25 text-text",
  muted: "bg-surface text-muted",
};

type Props = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
  icon?: ReactNode;
};

export function Badge({
  children,
  tone = "primary",
  className,
  icon,
}: Props) {
  return (
    <span
      className={cn(
        "font-pixel inline-flex items-center gap-1.5 rounded-[var(--radius-badge)] border-2 border-border px-2.5 py-1 text-[9px] leading-none",
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
