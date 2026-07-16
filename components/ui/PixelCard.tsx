"use client";

import { cn } from "@/lib/utils/cn";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  float?: boolean;
};

export function PixelCard({
  children,
  className,
  hover = true,
  float = false,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border-[3px] border-border bg-card shadow-[var(--shadow-soft)]",
        float && !reduceMotion && "animate-pixel-float",
        className,
      )}
      whileHover={
        hover && !reduceMotion ? { y: -4, rotate: 1 } : undefined
      }
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {children}
      {hover ? (
        <span
          className="animate-pixel-shine pointer-events-none absolute inset-0 z-20"
          aria-hidden
        />
      ) : null}
    </motion.div>
  );
}
