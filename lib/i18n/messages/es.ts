import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "Juan José Gómez Sánchez — Fullstack Developer",
    description:
      "Fullstack Developer: React, Next.js, Flutter, NestJS y Prisma. Apps web y móviles end-to-end. Santa Marta, Colombia.",
  },
  common: {
    skipToContent: "Saltar al contenido",
    open: "Abrir",
    seeMore: "Ver más",
    letsTalk: "Hablemos",
    language: "Idioma",
    spanish: "Español",
    english: "Inglés",
  },
  nav: {
    label: "Principal",
    home: "Inicio",
    about: "Perfil",
    experience: "Experiencia",
    projects: "Proyectos",
    personalProjects: "Personales",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para proyectos",
    name: "Juan José Gómez Sánchez",
    headline: "Fullstack Developer",
    lead:
      "Ingeniero de Sistemas con 2+ años construyendo aplicaciones web y móviles end-to-end. React, Next.js y TypeScript en frontend; Flutter en mobile; NestJS, Prisma y PostgreSQL en backend. He entregado plataformas de empleo, e-commerce, SaaS y MVPs en Colombia, LATAM y Australia.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    stats: {
      experience: { label: "Experiencia", value: "2+ años" },
      focus: { label: "Enfoque", value: "Fullstack" },
      location: { label: "Ubicación", value: "Santa Marta, CO" },
    },
    avatarAlt: "Foto de Juan José Gómez Sánchez",
  },
  about: {
    eyebrow: "Perfil profesional",
    title: "Desarrollo fullstack orientado a producto",
    description:
      "Fullstack Developer e Ingeniero de Sistemas con 2+ años de experiencia construyendo aplicaciones web y móviles end-to-end. Sólido en frontend con React, Next.js, TypeScript y TailwindCSS, y en mobile multiplataforma con Flutter/Dart. Experiencia en backend con NestJS, Prisma y PostgreSQL para modelar APIs REST, autenticación y persistencia de datos. He entregado plataformas de empleo, e-commerce, SaaS y MVPs para clientes en Colombia, LATAM y Australia.",
    highlightsTitle: "Cómo aporto valor",
    highlights: [
      "Frontend web con React, Next.js, TypeScript, TailwindCSS, React Query, SEO e i18n.",
      "Mobile con Flutter, GetX, Clean Architecture y Firebase (Auth, Firestore, Storage).",
      "Backend con NestJS, Prisma, PostgreSQL, APIs REST y autenticación JWT.",
    ],
    quote:
      "Trabajo en paralelo en frontend web y mobile, aplicando arquitectura limpia y entrega rápida apoyado en herramientas modernas como Cursor.",
    quoteAuthor: "— Juan José Gómez Sánchez",
  },
  education: {
    eyebrow: "Formación",
    title: "Ingeniería de Sistemas",
    degree: "Ingeniería de Sistemas",
    school: "Universidad del Magdalena",
    period: "Ago. 2018 — Jul. 2024",
    detail:
      "Enfoque en desarrollo de software, estructuras de datos y tecnologías web. Proyectos académicos de frontend y móvil.",
  },
  experience: {
    eyebrow: "Experiencia laboral",
    title: "Trayectoria reciente",
    description:
      "Experiencia en productos reales de empleo, e-commerce y SaaS con equipos en Colombia, LATAM y Australia.",
    items: [
      {
        role: "Desarrollador de Front-End (Flutter)",
        company: "Yakka Sport Jobs",
        period: "Ago. 2025 — Actualidad",
        bullets: [
          "Frontend mobile de Yakka Sport Jobs Australia: conecta profesionales del deporte con clubes y organizaciones en toda Australia.",
          "UI/UX responsiva e integración de APIs REST para autenticación y datos en tiempo real.",
          "Flujos principales en producción que habilitaron el lanzamiento en el mercado australiano.",
          "Base de código única para Android e iOS con arquitectura escalable y componentes reutilizables.",
        ],
      },
      {
        role: "Desarrollador de Front-End",
        company: "MAKERSTECH.CO",
        period: "Abr. 2025 — Dic. 2025",
        bullets: [
          "Interfaces web modernas y responsivas con React, Next.js, TypeScript, TailwindCSS y Material UI.",
          "Integración de APIs REST y GraphQL conectando frontend con servicios backend.",
          "Colaboración con diseñadores, backend developers y líderes de producto en el ciclo completo de cada feature.",
          "Buenas prácticas de accesibilidad, rendimiento y mantenimiento del código.",
        ],
      },
      {
        role: "Desarrollador Mobile (Flutter)",
        company: "Yakka Labour",
        period: "Feb. 2024 — Jul. 2025",
        bullets: [
          "Apps multiplataforma con Flutter, Dart y Firebase (Authentication, Firestore, Storage).",
          "Estado y navegación con GetX: inyección de dependencias y controladores desacoplados.",
          "Clean Architecture y separación por capas (UI, lógica, datos) en apps de empleo y profesionales deportivos.",
          "Geolocalización, perfiles verificados y sincronización de datos en tiempo real.",
        ],
      },
      {
        role: "Auxiliar de TI",
        company: "Alcaldía de Ciénaga",
        period: "Sept. 2023 — Feb. 2024",
        bullets: [
          "Soporte técnico a más de 100 usuarios institucionales con tasa de resolución superior al 90%.",
          "Reducción del 40% en tiempo de respuesta mediante diagnósticos proactivos y mantenimiento preventivo.",
          "Administración de red interna en Windows Server y Linux.",
          "Documentación de procesos y mejores prácticas para estandarización del área técnica.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Portafolio",
    title: "Proyectos en los que he participado",
    description:
      "Selección de sitios web, productos a medida, MVPs y aplicaciones móviles desarrollados para distintas compañías.",
    serviceTypes: {
      web: "Sitios web",
      custom: "Software a medida",
      mvp: "MVPs y lanzamientos",
      mobile: "Apps móviles",
    },
    companyLabel: "Compañía",
    visitSite: "Visitar sitio",
    filterLabel: "Filtrar por categoría",
    filterAll: "Todos",
  },
  personalProjects: {
    eyebrow: "Proyectos personales",
    title: "Productos y estudio",
    description:
      "Iniciativas propias y el estudio KodeLabs, donde soy cofundador: productos digitales orientados a resolver problemas reales.",
    badgeCofounder: "Cofundador",
    badgeProduct: "Producto",
    visitLink: "Visitar",
    lifetag: {
      title: "LifeTag",
      description:
        "Sistema SaaS fullstack de identificación de emergencia para personas y mascotas mediante etiquetas NFC y QR, con perfiles públicos accesibles sin app y panel de administración multi-perfil.",
    },
    kodedocs: {
      title: "KodeDocs",
      description:
        "Plataforma SaaS fullstack para crear, enviar y firmar propuestas, contratos y facturas en un solo flujo, con firma digital, dashboard administrativo y enlaces compartibles. Adoptado por +500 equipos.",
    },
    kodelabs: {
      title: "KodeLabs",
      description:
        "Estudio de producto digital: landings en 48 h, MVPs, apps y sistemas a medida. Hablas directo con quien construye; proyectos en Colombia y LATAM.",
    },
  },
  skills: {
    eyebrow: "Habilidades",
    title: "Stack del CV",
    description:
      "Tecnologías del currículum aplicadas en proyectos web, mobile y backend fullstack.",
    items: [
      {
        key: "react",
        name: "React",
        detail: "Componentes, hooks, React Query y ecosistema frontend.",
      },
      {
        key: "nextjs",
        name: "Next.js",
        detail: "SSR, SEO, i18n y despliegue en Vercel.",
      },
      {
        key: "typescript",
        name: "TypeScript",
        detail: "Tipado estático en frontend y backend.",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        detail: "Estilos utilitarios y diseño responsivo mobile-first.",
      },
      {
        key: "nestjs",
        name: "NestJS",
        detail: "APIs REST, autenticación JWT y arquitectura modular.",
      },
      {
        key: "prisma",
        name: "Prisma",
        detail: "ORM con PostgreSQL para modelado y persistencia.",
      },
      {
        key: "flutter",
        name: "Flutter",
        detail: "Apps multiplataforma con Dart y Clean Architecture.",
      },
      {
        key: "getx",
        name: "GetX",
        detail: "Estado, rutas e inyección de dependencias en Flutter.",
      },
      {
        key: "firebase",
        name: "Firebase",
        detail: "Auth, Firestore y Storage en tiempo real.",
      },
      { key: "git", name: "Git", detail: "Control de versiones y flujos de trabajo." },
      {
        key: "github",
        name: "GitHub",
        detail: "Repositorios, GitHub Actions y colaboración en código.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Conectemos",
    description:
      "Datos de tu CV. WhatsApp, código en GitHub, correo y ubicación.",
    items: [
      {
        key: "email",
        label: "Correo",
        hint: "juanjosegomezsanche@gmail.com",
        href: "mailto:juanjosegomezsanche@gmail.com",
      },
      {
        key: "phone",
        label: "WhatsApp",
        hint: "+57 324 513 5343",
        href: "https://wa.me/573245135343",
        external: true,
      },
      {
        key: "github",
        label: "GitHub",
        hint: "github.com/xoan04",
        href: "https://github.com/xoan04",
        external: true,
      },
      {
        key: "location",
        label: "Ubicación",
        hint: "Santa Marta, Colombia",
        href: "https://www.openstreetmap.org/?mlat=11.2408&mlon=-74.1990&zoom=12",
        external: true,
      },
    ],
  },
  footer: {
    line1:
      "© Juan José Gómez Sánchez — Fullstack Developer. React, Next.js, Flutter y NestJS.",
    line2: "Portfolio estático — sin backend.",
  },
};
