import type { Locale } from "@/lib/i18n/config";

const BY_ID: Record<string, { es: string; en: string }> = {
  "1": {
    es: "Sitio corporativo con SEO, internacionalización y foco en conversión para el sector financiero en Colombia.",
    en: "Corporate site with SEO, i18n, and conversion focus for the financial sector in Colombia.",
  },
  "faw-morarci": {
    es: "Presencia web para concesionario FAW: formularios, catálogo y posicionamiento local.",
    en: "Web presence for FAW dealership: forms, catalog, and local SEO.",
  },
  "vertice-consulting": {
    es: "Landing y sitio institucional para consultoría, con rendimiento y SEO técnico.",
    en: "Landing and institutional site for consulting, with performance and technical SEO.",
  },
  "oceano-scuba": {
    es: "Web con reservas y contenido para centro de buceo: experiencia clara en móvil y desktop.",
    en: "Site with booking and content for a dive center: a clear experience on mobile and desktop.",
  },
  "6": {
    es: "Plataforma personalizada para subastas con integración de servicios cloud y APIs REST.",
    en: "Custom auction platform with cloud services integration and REST APIs.",
  },
  autoxpert: {
    es: "Tienda online del sector automotriz con catálogo, carrito, integración de pagos y optimización SEO.",
    en: "Automotive e-commerce with catalog, cart, payment integration, and SEO optimization.",
  },
  "9": {
    es: "MVP en Next.js y Vercel: catálogo y flujo ágil de pedidos para repuestos.",
    en: "MVP on Next.js and Vercel: catalog and a lean ordering flow for parts.",
  },
  "10": {
    es: "MVP con formularios avanzados para servicios de visa: despliegue rápido en Vercel.",
    en: "MVP with advanced forms for visa services: fast deployment on Vercel.",
  },
  "14": {
    es: "Aplicación web 2025 con autenticación, TypeScript y despliegue continuo en Vercel.",
    en: "2025 web app with authentication, TypeScript, and continuous deploy on Vercel.",
  },
  "16": {
    es: "App móvil que conecta profesionales del deporte con clubes y organizaciones deportivas en toda Australia. Publicada en Google Play.",
    en: "Mobile app connecting sports professionals with clubs and sports organizations across Australia. Published on Google Play.",
  },
};

export function getProjectDescription(id: string, locale: Locale): string {
  const row = BY_ID[id];
  if (!row) return "";
  return locale === "en" ? row.en : row.es;
}
