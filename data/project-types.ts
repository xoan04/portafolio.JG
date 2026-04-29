export type ProjectServiceTypeKey = "web" | "custom" | "mvp" | "mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  serviceTypeKey: ProjectServiceTypeKey;
  /** URL interna (#) o externa (https://) */
  caseStudyUrl: string;
  /** ID en `data/companies.ts` para bloque “La compañía”. */
  companyId: string;
  /** Capturas adicionales bajo `public/` (p. ej. `/projects/foo.png`). */
  gallery?: string[];
}

export const SERVICE_TYPE_ORDER: ProjectServiceTypeKey[] = [
  "web",
  "custom",
  "mvp",
  "mobile",
];
