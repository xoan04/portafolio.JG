/** Enlaces a proyectos personales / KodeLabs (textos en i18n). */

export type PersonalProjectBadge = "product" | "cofounder";

export type PersonalProjectId = "lifetag" | "kodedocs" | "kodelabs";

export type PersonalProjectLink = {
  id: PersonalProjectId;
  url: string;
  badge: PersonalProjectBadge;
};

export const personalProjectLinks: PersonalProjectLink[] = [
  {
    id: "lifetag",
    url: "https://life-tag-mu.vercel.app/",
    badge: "product",
  },
  {
    id: "kodedocs",
    url: "https://docs.kodelabs.dev/landing",
    badge: "product",
  },
  {
    id: "kodelabs",
    url: "https://kodelabs.dev/en",
    badge: "cofounder",
  },
];
