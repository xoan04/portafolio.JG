"use client";

import { getCompanyById } from "@/data/companies";
import { getProjectDescription } from "@/data/project-i18n";
import {
  getUniqueServiceTypeKeys,
  projects as allProjectsStatic,
} from "@/data/projects";
import type { Project, ProjectServiceTypeKey } from "@/data/project-types";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

type FilterValue = "all" | ProjectServiceTypeKey;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ProjectCard({
  project,
  dict,
  locale,
}: {
  project: Project;
  dict: Dictionary;
  locale: Locale;
}) {
  const company = getCompanyById(project.companyId);
  const body =
    getProjectDescription(project.id, locale) || project.description;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30 transition hover:border-cyan-500/30 hover:shadow-cyan-500/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 33vw, 100vw"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
          {project.title}
        </h3>
        {body ? (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            {body}
          </p>
        ) : null}
        {company ? (
          <p className="mt-3 text-xs text-zinc-500">
            <span className="text-zinc-500">{dict.projects.companyLabel}: </span>
            <span className="font-medium text-zinc-300">{company.name}</span>
          </p>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        {project.gallery && project.gallery.length > 0 ? (
          <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.gallery.map((src) => (
              <li
                key={src}
                className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-white/10"
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
        {isExternal(project.caseStudyUrl) ? (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            {dict.projects.visitSite}
            <span
              aria-hidden
              className="ml-1 transition group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        ) : (
          <Link
            href={project.caseStudyUrl}
            className="mt-5 inline-flex w-fit text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            {dict.projects.visitSite}
            <span
              aria-hidden
              className="ml-1 transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function ProjectsPortfolioClient({ dict, locale }: Props) {
  const p = dict.projects;
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
        <p id={groupId} className="text-sm font-medium text-zinc-400">
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
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                  isActive
                    ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-100"
                    : "border-white/10 bg-zinc-900/50 text-zinc-300 hover:border-white/20 hover:bg-zinc-800/80"
                }`}
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
              <h3 className="mb-6 border-b border-white/10 pb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-cyan-200/95">
                {p.serviceTypes[key]}
              </h3>
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {inGroup.map((project) => (
                  <li key={project.id}>
                    <ProjectCard
                      project={project}
                      dict={dict}
                      locale={locale}
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
