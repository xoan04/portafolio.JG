"use client";

/**
 * Capas decorativas pixel-art sutiles.
 * No reduce legibilidad: opacidad baja + pointer-events none.
 */
export function PixelBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Base gradient atmosphere */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_20%,color-mix(in_srgb,var(--secondary)_14%,transparent),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_40%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,color-mix(in_srgb,var(--pink)_10%,transparent),transparent_40%)]" />

      {/* Soft checker near edges */}
      <div className="checker-bg absolute inset-x-0 top-0 h-24 opacity-30" />
      <div className="checker-bg absolute inset-x-0 bottom-0 h-32 opacity-25" />

      {/* Distant mountains */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.12]"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        height="120"
      >
        <path
          fill="var(--border)"
          d="M0 160 L0 100 L80 100 L80 80 L160 80 L160 60 L240 60 L240 90 L320 90 L320 50 L400 50 L400 70 L480 70 L480 40 L560 40 L560 85 L640 85 L640 55 L720 55 L720 95 L800 95 L800 45 L880 45 L880 75 L960 75 L960 35 L1040 35 L1040 88 L1120 88 L1120 65 L1200 65 L1200 160 Z"
        />
      </svg>

      {/* Grass strip */}
      <div className="absolute inset-x-0 bottom-0 h-3 bg-secondary/40" />
      <div
        className="absolute inset-x-0 bottom-3 h-2 opacity-50"
        style={{
          background:
            "repeating-linear-gradient(90deg, var(--secondary) 0 8px, color-mix(in srgb, var(--secondary) 60%, var(--border)) 8px 16px)",
        }}
      />

      {/* Tiny floating sprites */}
      <span className="absolute top-[12%] left-[8%] h-2 w-3 animate-pixel-float bg-card opacity-70 shadow-[2px_2px_0_var(--shadow-pixel)]" />
      <span
        className="absolute top-[18%] right-[12%] h-2 w-4 animate-pixel-float bg-card opacity-60 shadow-[2px_2px_0_var(--shadow-pixel)]"
        style={{ animationDelay: "1.2s" }}
      />
      <span
        className="absolute top-[40%] left-[4%] h-1.5 w-1.5 bg-accent opacity-50"
        style={{ boxShadow: "0 0 0 2px var(--border)" }}
      />
      <span
        className="absolute top-[55%] right-[6%] h-1.5 w-1.5 bg-primary opacity-45"
        style={{ boxShadow: "0 0 0 2px var(--border)" }}
      />
      <span
        className="absolute top-[70%] left-[15%] h-2 w-2 rotate-45 bg-pink/50 opacity-40"
        style={{ animationDelay: "0.6s" }}
      />
      <span className="absolute top-[28%] left-[70%] h-1 w-1 bg-purple opacity-40" />
      <span className="absolute top-[75%] right-[22%] h-1 w-1 bg-orange opacity-35" />

      {/* Pixel flowers */}
      <span className="absolute bottom-10 left-[10%] flex flex-col items-center opacity-40">
        <span className="h-1.5 w-1.5 bg-pink" />
        <span className="h-3 w-0.5 bg-secondary" />
      </span>
      <span className="absolute bottom-12 right-[18%] flex flex-col items-center opacity-35">
        <span className="h-1.5 w-1.5 bg-accent" />
        <span className="h-4 w-0.5 bg-secondary" />
      </span>
      <span className="absolute bottom-8 left-[40%] flex flex-col items-center opacity-30">
        <span className="h-1.5 w-1.5 bg-purple" />
        <span className="h-3 w-0.5 bg-secondary" />
      </span>
    </div>
  );
}
