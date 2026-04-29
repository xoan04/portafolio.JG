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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
