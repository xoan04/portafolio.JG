import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Juan José Gómez Sánchez — Fullstack Developer",
    description:
      "Fullstack Developer: React, Next.js, Flutter, NestJS, and Prisma. End-to-end web and mobile apps. Santa Marta, Colombia.",
  },
  common: {
    skipToContent: "Skip to content",
    open: "Open",
    seeMore: "See more",
    letsTalk: "Let’s talk",
    language: "Language",
    spanish: "Spanish",
    english: "English",
  },
  nav: {
    label: "Primary",
    home: "Home",
    about: "Profile",
    experience: "Experience",
    projects: "Projects",
    personalProjects: "Personal",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Open to projects",
    name: "Juan José Gómez Sánchez",
    headline: "Fullstack Developer",
    lead:
      "Systems Engineer with 2+ years building end-to-end web and mobile applications. React, Next.js, and TypeScript on the frontend; Flutter on mobile; NestJS, Prisma, and PostgreSQL on the backend. I have shipped employment platforms, e-commerce, SaaS, and MVPs across Colombia, Latin America, and Australia.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    stats: {
      experience: { label: "Experience", value: "2+ years" },
      focus: { label: "Focus", value: "Fullstack" },
      location: { label: "Location", value: "Santa Marta, CO" },
    },
    avatarAlt: "Photo of Juan José Gómez Sánchez",
  },
  about: {
    eyebrow: "Professional profile",
    title: "Product-oriented fullstack development",
    description:
      "Fullstack Developer and Systems Engineer with 2+ years of experience building end-to-end web and mobile applications. Strong in frontend with React, Next.js, TypeScript, and TailwindCSS, and cross-platform mobile with Flutter/Dart. Backend experience with NestJS, Prisma, and PostgreSQL for REST APIs, authentication, and data persistence. I have delivered employment platforms, e-commerce, SaaS, and MVPs for clients in Colombia, Latin America, and Australia.",
    highlightsTitle: "How I add value",
    highlights: [
      "Web frontend with React, Next.js, TypeScript, TailwindCSS, React Query, SEO, and i18n.",
      "Mobile with Flutter, GetX, Clean Architecture, and Firebase (Auth, Firestore, Storage).",
      "Backend with NestJS, Prisma, PostgreSQL, REST APIs, and JWT authentication.",
    ],
    quote:
      "I work across web and mobile frontend in parallel, applying clean architecture and fast delivery supported by modern tools like Cursor.",
    quoteAuthor: "— Juan José Gómez Sánchez",
  },
  education: {
    eyebrow: "Education",
    title: "Systems Engineering",
    degree: "B.Sc. Systems Engineering",
    school: "Universidad del Magdalena",
    period: "Aug. 2018 — Jul. 2024",
    detail:
      "Coursework in software development, data structures, and web technologies. Academic projects in frontend and mobile.",
  },
  experience: {
    eyebrow: "Work experience",
    title: "Recent path",
    description:
      "Experience on real employment, e-commerce, and SaaS products with teams in Colombia, Latin America, and Australia.",
    items: [
      {
        role: "Front-End Developer (Flutter)",
        company: "Yakka Sport Jobs",
        period: "Aug. 2025 — Present",
        bullets: [
          "Mobile frontend for Yakka Sport Jobs Australia: connects sports professionals with clubs and organizations across Australia.",
          "Responsive UI/UX and REST API integration for authentication and real-time data.",
          "Core product flows shipped to production, enabling launch in the Australian market.",
          "Single codebase for Android and iOS with scalable architecture and reusable components.",
        ],
      },
      {
        role: "Front-End Developer",
        company: "MAKERSTECH.CO",
        period: "Apr. 2025 — Dec. 2025",
        bullets: [
          "Modern, responsive web interfaces with React, Next.js, TypeScript, TailwindCSS, and Material UI.",
          "REST and GraphQL API integration connecting the frontend with backend services.",
          "Collaboration with designers, backend developers, and product leads through the full feature lifecycle.",
          "Accessibility, performance, and maintainability best practices.",
        ],
      },
      {
        role: "Mobile Developer (Flutter)",
        company: "Yakka Labour",
        period: "Feb. 2024 — Jul. 2025",
        bullets: [
          "Cross-platform apps with Flutter, Dart, and Firebase (Authentication, Firestore, Storage).",
          "State and navigation with GetX: dependency injection and decoupled controllers.",
          "Clean Architecture and layered separation (UI, logic, data) in job-search and sports-professional apps.",
          "Geolocation, verified profiles, and real-time data synchronization.",
        ],
      },
      {
        role: "IT Assistant",
        company: "Alcaldía de Ciénaga",
        period: "Sept. 2023 — Feb. 2024",
        bullets: [
          "Technical support for 100+ institutional users with a resolution rate above 90%.",
          "40% reduction in average response time through proactive diagnostics and preventive maintenance.",
          "Internal network administration on Windows Server and Linux.",
          "Process documentation and best practices for technical area standardization.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects I’ve worked on",
    description:
      "A selection of websites, custom software, MVPs, and mobile apps built for different companies.",
    serviceTypes: {
      web: "Websites",
      custom: "Custom software",
      mvp: "MVPs & launches",
      mobile: "Mobile apps",
    },
    companyLabel: "Company",
    visitSite: "Visit site",
    filterLabel: "Filter by category",
    filterAll: "All",
  },
  personalProjects: {
    eyebrow: "Personal projects",
    title: "Products & studio",
    description:
      "Own initiatives and KodeLabs, where I’m a co‑founder—digital products built to solve real problems.",
    badgeCofounder: "Co‑founder",
    badgeProduct: "Product",
    visitLink: "Visit",
    lifetag: {
      title: "LifeTag",
      description:
        "Fullstack SaaS emergency ID system for people and pets via NFC and QR tags, with public profiles accessible without an app and a multi-profile admin panel.",
    },
    kodedocs: {
      title: "KodeDocs",
      description:
        "Fullstack SaaS platform to create, send, and sign proposals, contracts, and invoices in one flow, with digital signatures, an admin dashboard, and shareable links. Adopted by 500+ teams.",
    },
    kodelabs: {
      title: "KodeLabs",
      description:
        "Digital product studio: 48h landings, MVPs, apps, and custom systems. You talk straight to the builders—work across Colombia and Latin America.",
    },
  },
  skills: {
    eyebrow: "Skills",
    title: "CV stack",
    description:
      "Technologies from the résumé applied across web, mobile, and fullstack backend work.",
    items: [
      {
        key: "react",
        name: "React",
        detail: "Components, hooks, React Query, and the frontend ecosystem.",
      },
      {
        key: "nextjs",
        name: "Next.js",
        detail: "SSR, SEO, i18n, and Vercel deployments.",
      },
      {
        key: "typescript",
        name: "TypeScript",
        detail: "Static typing across frontend and backend.",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        detail: "Utility-first styling and mobile-first responsive design.",
      },
      {
        key: "nestjs",
        name: "NestJS",
        detail: "REST APIs, JWT authentication, and modular architecture.",
      },
      {
        key: "prisma",
        name: "Prisma",
        detail: "ORM with PostgreSQL for modeling and persistence.",
      },
      {
        key: "flutter",
        name: "Flutter",
        detail: "Cross-platform apps with Dart and Clean Architecture.",
      },
      {
        key: "getx",
        name: "GetX",
        detail: "State, routes, and dependency injection in Flutter.",
      },
      {
        key: "firebase",
        name: "Firebase",
        detail: "Auth, Firestore, and Storage in real time.",
      },
      {
        key: "git",
        name: "Git",
        detail: "Version control and collaborative workflows.",
      },
      {
        key: "github",
        name: "GitHub",
        detail: "Repositories, GitHub Actions, and code collaboration.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s connect",
    description:
      "From your CV: WhatsApp, GitHub, email, and location.",
    items: [
      {
        key: "email",
        label: "Email",
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
        label: "Location",
        hint: "Santa Marta, Colombia",
        href: "https://www.openstreetmap.org/?mlat=11.2408&mlon=-74.1990&zoom=12",
        external: true,
      },
    ],
  },
  footer: {
    line1:
      "© Juan José Gómez Sánchez — Fullstack Developer. React, Next.js, Flutter, and NestJS.",
    line2: "Static portfolio — no backend.",
  },
};
