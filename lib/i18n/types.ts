export type Dictionary = {
  meta: { title: string; description: string };
  common: {
    skipToContent: string;
    open: string;
    seeMore: string;
    letsTalk: string;
    language: string;
    spanish: string;
    english: string;
  };
  nav: {
    label: string;
    home: string;
    about: string;
    experience: string;
    projects: string;
    personalProjects: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    headline: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
    stats: {
      experience: { label: string; value: string };
      focus: { label: string; value: string };
      location: { label: string; value: string };
    };
    avatarAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
    quote: string;
    quoteAuthor: string;
  };
  education: {
    eyebrow: string;
    title: string;
    degree: string;
    school: string;
    period: string;
    detail: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      bullets: string[];
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    serviceTypes: {
      web: string;
      custom: string;
      mvp: string;
      mobile: string;
    };
    companyLabel: string;
    visitSite: string;
    filterLabel: string;
    filterAll: string;
  };
  personalProjects: {
    eyebrow: string;
    title: string;
    description: string;
    badgeCofounder: string;
    badgeProduct: string;
    visitLink: string;
    lifetag: { title: string; description: string };
    kodedocs: { title: string; description: string };
    kodelabs: { title: string; description: string };
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ key: string; name: string; detail: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      key: string;
      label: string;
      hint: string;
      href?: string;
      external?: boolean;
    }>;
  };
  footer: { line1: string; line2: string };
};
