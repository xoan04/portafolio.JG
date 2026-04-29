import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "Juan José Gómez Sánchez — Ingeniero de Sistemas",
    description:
      "Frontend (React, Next.js, Tailwind) y mobile (Flutter, Firebase). Santa Marta, Colombia.",
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
    headline: "Ingeniero de Sistemas",
    lead:
      "Especializado en React, Next.js y Tailwind CSS para web moderna, y en Flutter con Firebase para apps móviles multiplataforma. Interfaces funcionales, escalables y con excelente UX.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    stats: {
      experience: { label: "Edad", value: "24 años" },
      focus: { label: "Enfoque", value: "Web & mobile" },
      location: { label: "Ubicación", value: "Santa Marta, CO" },
    },
    avatarAlt: "Foto de Juan José Gómez Sánchez",
  },
  about: {
    eyebrow: "Perfil profesional",
    title: "Ingeniería de sistemas orientada a producto",
    description:
      "Egresado de la Universidad del Magdalena. Desde 2024 trabajo de forma independiente en soluciones digitales y en proyectos móviles con Yakka Labour y Yakka Sport Jobs. Destaco por calidad de código, autonomía y trabajo en equipo.",
    highlightsTitle: "Cómo aporto valor",
    highlights: [
      "Arquitecturas de componentes reutilizables, estado con React Hooks y React Query en web.",
      "Flutter con GetX, Clean Architecture y Firebase (Auth, Firestore, Storage) en móvil.",
      "Optimización de rendimiento, carpetas modulares y despliegues en Vercel con Git/GitHub.",
    ],
    quote:
      "Me apasionan las interfaces funcionales y escalables, con foco en la experiencia de usuario y en buenas prácticas de desarrollo.",
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
      "Desarrollo frontend independiente y roles móviles en productos reales con equipos en Colombia y Australia.",
    items: [
      {
        role: "Desarrollador frontend (React / Next.js)",
        company: "Independiente",
        period: "Feb. 2024 — Actualidad",
        bullets: [
          "Interfaces web modernas, escalables y responsivas con React, Next.js y Tailwind CSS.",
          "Arquitecturas reutilizables, React Hooks y React Query; optimización y estructura modular.",
          "Landings corporativas, plataformas de aprendizaje con usuarios y módulos dinámicos, portales de empleo con filtros, autenticación y paneles admin.",
          "Despliegue y mantenimiento con Vercel; control de versiones con Git/GitHub.",
        ],
      },
      {
        role: "Desarrollador mobile (Flutter)",
        company: "Yakka Labour",
        period: "Feb. 2024 — Actualidad",
        bullets: [
          "Apps multiplataforma con Flutter y Dart; rendimiento, arquitectura limpia y UX.",
          "Estado y navegación con GetX: reactividad, inyección de dependencias y controladores desacoplados.",
          "Firebase (Auth, Firestore, Storage) para persistencia y tiempo real.",
          "App de empleo (auth, perfiles dinámicos, filtros) y app de profesionales deportivos (geolocalización, perfiles verificados).",
          "Clean Architecture y capas UI, lógica y datos.",
        ],
      },
      {
        role: "Desarrollador mobile (Flutter)",
        company: "Yakka Sport Jobs",
        period: "Ago. 2025 — Actualidad",
        bullets: [
          "Frontend de Yakka Sport Jobs Australia: conecta coaches, fisioterapeutas y staff técnico con clubes y academias en Australia.",
          "UI/UX responsiva para búsqueda de empleo, perfiles y gestión de postulaciones.",
          "Integración con APIs REST para autenticación y datos en tiempo real.",
          "Código único para Android e iOS.",
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
        "ID de emergencia con QR y NFC para personas y mascotas: alergias, medicación y contactos accesibles al instante, sin instalar app.",
    },
    kodedocs: {
      title: "KodeDocs",
      description:
        "Propuestas, contratos y facturas en un solo flujo, con firma y experiencia premium. Landing del producto bajo KodeLabs.",
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
      "Tecnologías que figuran en tu currículum y que usas en proyectos web y móviles.",
    items: [
      {
        key: "flutter",
        name: "Flutter",
        detail: "Apps multiplataforma con Dart y arquitectura limpia.",
      },
      {
        key: "dart",
        name: "Dart",
        detail: "Lenguaje base para UI reactiva y lógica en Flutter.",
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
      {
        key: "react",
        name: "React",
        detail: "Componentes, hooks y ecosistema frontend.",
      },
      {
        key: "nextjs",
        name: "Next.js",
        detail: "SSR, rutas y despliegue en Vercel.",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        detail: "Estilos utilitarios y diseño responsivo.",
      },
      {
        key: "hooks",
        name: "React Hooks",
        detail: "Estado y efectos en componentes funcionales.",
      },
      { key: "git", name: "Git", detail: "Control de versiones y flujos de trabajo." },
      {
        key: "github",
        name: "GitHub",
        detail: "Repositorios y colaboración en código.",
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
      "© Juan José Gómez Sánchez — Ingeniero de Sistemas. Next.js, Tailwind CSS y Three.js.",
    line2: "Portfolio estático — sin backend.",
  },
};
