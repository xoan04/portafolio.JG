"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-text border-border hover:brightness-105 active:brightness-95",
  secondary:
    "bg-secondary text-text border-border hover:brightness-105 active:brightness-95",
  ghost:
    "bg-card text-text border-border hover:bg-surface active:bg-surface",
  danger:
    "bg-danger text-card border-border hover:brightness-105 active:brightness-95",
};

const sizes: Record<Size, string> = {
  sm: "min-h-9 px-3 py-2 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "font-pixel relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border-[3px] shadow-[var(--shadow-soft)] transition-[transform,box-shadow,filter] duration-150 " +
  "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary " +
  "disabled:pointer-events-none disabled:opacity-45 disabled:shadow-none " +
  "hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] " +
  "active:translate-y-[2px] active:shadow-[var(--shadow-pressed)]";

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    loading,
    disabled,
  } = props;

  const classes = cn(baseClass, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading ? (
        <span
          className="inline-block h-3 w-3 animate-pulse rounded-sm border-2 border-border bg-accent"
          aria-hidden
        />
      ) : null}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-disabled={disabled || loading || undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || loading || undefined}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={disabled || loading}
      onClick={buttonProps.onClick}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
