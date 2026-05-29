import {
  SERVICE_TYPE_ORDER,
  type Project,
  type ProjectServiceTypeKey,
} from "./project-types";

export type { Project, ProjectServiceTypeKey } from "./project-types";
export { SERVICE_TYPE_ORDER } from "./project-types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Activos por Colombia",
    description: "",
    image: "/companies/activos.png",
    techStack: ["Next.js", "React", "SEO", "i18n"],
    serviceTypeKey: "web",
    caseStudyUrl: "https://activosporcolombia.com",
    companyId: "1",
  },
  {
    id: "faw-morarci",
    title: "FAW Autos Morarci",
    description: "",
    image: "/companies/morarci.png",
    techStack: ["Next.js", "React", "Forms", "SEO"],
    serviceTypeKey: "web",
    caseStudyUrl: "https://faw.autosmorarci.co",
    companyId: "2",
  },
  {
    id: "vertice-consulting",
    title: "Vértice Consulting",
    description: "",
    image: "/companies/VERTICE-02.png",
    techStack: ["Next.js", "Tailwind", "SEO"],
    serviceTypeKey: "web",
    caseStudyUrl: "https://verticeconsulting.co",
    companyId: "3",
  },
  {
    id: "oceano-scuba",
    title: "Océano Scuba",
    description: "",
    image: "/companies/scuba.png",
    techStack: ["Next.js", "React", "Reservas"],
    serviceTypeKey: "web",
    caseStudyUrl: "https://oceanoscuba.com.co",
    companyId: "4",
  },
  {
    id: "6",
    title: "Actibid",
    description: "",
    image: "/companies/actibid_logo.svg",
    techStack: ["React", "TypeScript", "REST", "Cloud"],
    serviceTypeKey: "custom",
    caseStudyUrl: "https://actibid.com",
    companyId: "5",
  },
  {
    id: "autoxpert",
    title: "Autoxpert",
    description: "",
    image: "/companies/Logo-a-color-Autoxpert.png",
    techStack: ["Next.js", "E-commerce", "Pagos", "SEO"],
    serviceTypeKey: "web",
    caseStudyUrl: "https://autoxpert.co",
    companyId: "6",
  },
  {
    id: "9",
    title: "Macro Partes",
    description: "",
    image: "/companies/macropartes.png",
    techStack: ["Next.js", "Vercel", "TypeScript"],
    serviceTypeKey: "mvp",
    caseStudyUrl: "https://macro-partes.vercel.app",
    companyId: "8",
  },
  {
    id: "10",
    title: "American Visa",
    description: "",
    image: "/companies/american.png",
    techStack: ["Next.js", "Vercel", "React Hook Form"],
    serviceTypeKey: "mvp",
    caseStudyUrl: "https://american-visa.vercel.app",
    companyId: "9",
  },
  {
    id: "14",
    title: "Foqqus 2025",
    description: "",
    image: "/companies/foqqus.png",
    techStack: ["Next.js", "Vercel", "Auth", "TypeScript"],
    serviceTypeKey: "mvp",
    caseStudyUrl: "https://foqqus-2025-front.vercel.app",
    companyId: "12",
  },
  {
    id: "16",
    title: "Yakka Sport",
    description: "",
    image: "/companies/yakka-sports.png",
    techStack: ["Flutter", "Dart", "REST", "Android", "iOS"],
    serviceTypeKey: "mobile",
    caseStudyUrl:
      "https://play.google.com/store/apps/details?id=com.yakka.sport",
    companyId: "15",
  },
];

export function getUniqueServiceTypeKeys(
  projectList: Project[],
): ProjectServiceTypeKey[] {
  const set = new Set<ProjectServiceTypeKey>();
  for (const p of projectList) {
    set.add(p.serviceTypeKey);
  }
  return SERVICE_TYPE_ORDER.filter((k) => set.has(k));
}

/** Cantidad de tarjetas destacadas en home (si más adelante separas `/projects`). */
export const FEATURED_PROJECTS_LIMIT = 6;

export const featuredProjects: Project[] = projects.slice(
  0,
  FEATURED_PROJECTS_LIMIT,
);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectStaticParams(): { id: string }[] {
  return projects.map((p) => ({ id: p.id }));
}

export function getRelatedProjects(current: Project, limit = 3): Project[] {
  const others = projects.filter((p) => p.id !== current.id);
  const same = others.filter(
    (p) => p.serviceTypeKey === current.serviceTypeKey,
  );
  const rest = others.filter(
    (p) => p.serviceTypeKey !== current.serviceTypeKey,
  );
  return [...same, ...rest].slice(0, limit);
}
