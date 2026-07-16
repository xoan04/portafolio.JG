import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsPortfolioClient } from "@/components/sections/ProjectsPortfolioClient";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function Projects({ dict, locale }: Props) {
  const p = dict.projects;

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t-[3px] border-border/15 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          titleId="projects-heading"
          description={p.description}
        />
        <ProjectsPortfolioClient dict={dict} locale={locale} />
      </div>
    </section>
  );
}
