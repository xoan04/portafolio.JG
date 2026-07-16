"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PixelCard } from "@/components/ui/PixelCard";
import { getCompanyById } from "@/data/companies";
import { getProjectDescription } from "@/data/project-i18n";
import {
  getUniqueServiceTypeKeys,
  projects as allProjectsStatic,
} from "@/data/projects";
import type { Project, ProjectServiceTypeKey } from "@/data/project-types";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { useId, useMemo, useState } from "react";

type FilterValue = "all" | ProjectServiceTypeKey;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

const DIFFICULTY: Record<
  string,
  {
    label: string;
    tone: "primary" | "secondary" | "accent" | "orange" | "pink";
  }
> = {
  web: { label: "★☆☆", tone: "primary" },
  custom: { label: "★★☆", tone: "orange" },
  mvp: { label: "★★★", tone: "accent" },
  mobile: { label: "★★☆", tone: "pink" },
};

function ProjectCard({
  project,
  dict,
  locale,
  unlockedLabel,
}: {
  project: Project;
  dict: Dictionary;
  locale: Locale;
  unlockedLabel: string;
}) {
  const company = getCompanyById(project.companyId);
  const body =
    getProjectDescription(project.id, locale) || project.description;
  const difficulty = DIFFICULTY[project.serviceTypeKey] ?? {
    label: "★★☆",
    tone: "primary" as const,
  };

  return (
    <article>
      <PixelCard className="group flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge tone="secondary">{unlockedLabel}</Badge>
            <Badge tone={difficulty.tone}>{difficulty.label}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-pixel text-[11px] leading-relaxed text-text sm:text-xs">
            {project.title}
          </h3>
          {body ? (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {body}
            </p>
          ) : null}
          {company ? (
            <p className="mt-3 text-xs text-muted">
              <span>{dict.projects.companyLabel}: </span>
              <span className="font-medium text-text">{company.name}</span>
            </p>
          ) : null}
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tag) => (
              <li key={tag}>
                <Badge tone="muted">{tag}</Badge>
              </li>
            ))}
          </ul>
          {project.gallery && project.gallery.length > 0 ? (
            <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {project.gallery.map((src) => (
                <li
                  key={src}
                  className="relative h-14 w-20 shrink-0 overflow-hidden rounded-[8px] border-2 border-border"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-5">
            <Button
              href={project.caseStudyUrl}
              external={isExternal(project.caseStudyUrl)}
              variant="primary"
              size="sm"
            >
              {dict.projects.visitSite}
            </Button>
          </div>
        </div>
      </PixelCard>
    </article>
  );
}

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function ProjectsPortfolioClient({ dict, locale }: Props) {
  const p = dict.projects;
  const unlockedLabel = locale === "en" ? "UNLOCKED" : "DESBLOQUEADO";
  const baseId = useId();
  const groupId = `${baseId}-filter`;

  const typeKeys = useMemo(
    () => getUniqueServiceTypeKeys(allProjectsStatic),
    [],
  );

  const [filter, setFilter] = useState<FilterValue>("all");

  const visibleTypeKeys = useMemo(() => {
    if (filter === "all") return typeKeys;
    return typeKeys.filter((k) => k === filter);
  }, [filter, typeKeys]);

  const filterOptions: { value: FilterValue; label: string }[] = useMemo(
    () => [
      { value: "all", label: p.filterAll },
      ...typeKeys.map((key) => ({
        value: key as FilterValue,
        label: p.serviceTypes[key],
      })),
    ],
    [p.filterAll, p.serviceTypes, typeKeys],
  );

  return (
    <div className="mt-10">
      <div
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        role="group"
        aria-labelledby={groupId}
      >
        <p id={groupId} className="font-pixel text-[10px] text-muted">
          {p.filterLabel}
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="toolbar"
          aria-label={p.filterLabel}
        >
          {filterOptions.map((opt) => {
            const isActive = filter === opt.value;
            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => setFilter(opt.value)}
                aria-pressed={isActive}
                className={cn(
                  "font-pixel rounded-[var(--radius-badge)] border-[3px] px-3.5 py-2 text-[9px] transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  isActive
                    ? "border-border bg-primary text-text shadow-[var(--shadow-pressed)]"
                    : "border-border bg-card text-muted hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 space-y-16">
        {visibleTypeKeys.map((key) => {
          const inGroup = allProjectsStatic.filter(
            (x) => x.serviceTypeKey === key,
          );
          if (inGroup.length === 0) return null;
          return (
            <div key={key}>
              <h3 className="font-pixel mb-6 border-b-[3px] border-border/20 pb-3 text-[12px] text-text sm:text-sm">
                {p.serviceTypes[key]}
              </h3>
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {inGroup.map((project) => (
                  <li key={project.id}>
                    <ProjectCard
                      project={project}
                      dict={dict}
                      locale={locale}
                      unlockedLabel={unlockedLabel}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
