"use client";

import { cn } from "@/lib/utils/cn";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  label: string;
  value: number;
  max?: number;
  tone?: "primary" | "secondary" | "accent" | "orange" | "pink" | "purple";
  className?: string;
  showValue?: boolean;
};

const fillTone: Record<NonNullable<Props["tone"]>, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  orange: "bg-orange",
  pink: "bg-pink",
  purple: "bg-purple",
};

export function XpBar({
  label,
  value,
  max = 100,
  tone = "primary",
  className,
  showValue = true,
}: Props) {
  const reduceMotion = useReducedMotion();
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span className="font-pixel text-[10px] text-text sm:text-[11px]">
          {label}
        </span>
        {showValue ? (
          <span className="font-pixel text-[9px] text-muted">{Math.round(pct)}%</span>
        ) : null}
      </div>
      <div
        className="h-4 overflow-hidden rounded-[6px] border-2 border-border bg-surface"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          className={cn("h-full rounded-[3px]", fillTone[tone])}
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
