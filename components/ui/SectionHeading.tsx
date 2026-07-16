type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** id del encabezado h2 para aria-labelledby en la sección */
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-pixel inline-flex items-center gap-2 rounded-[var(--radius-badge)] border-2 border-border bg-accent/40 px-3 py-1.5 text-[9px] text-text">
        <span className="inline-block h-2 w-2 bg-secondary" aria-hidden />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="font-pixel mt-5 text-balance text-2xl leading-snug tracking-wide text-text sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      <div className="pixel-divider mx-auto mt-5 max-w-xs" aria-hidden />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
