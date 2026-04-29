import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Juan José Gómez Sánchez — Systems Engineer",
    description:
      "Frontend (React, Next.js, Tailwind) and mobile (Flutter, Firebase). Santa Marta, Colombia.",
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
    headline: "Systems Engineer",
    lead:
      "Focused on React, Next.js, and Tailwind CSS for modern web, and Flutter with Firebase for cross‑platform mobile apps. I build functional, scalable interfaces with strong UX.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    stats: {
      experience: { label: "Age", value: "24" },
      focus: { label: "Focus", value: "Web & mobile" },
      location: { label: "Location", value: "Santa Marta, CO" },
    },
    avatarAlt: "Photo of Juan José Gómez Sánchez",
  },
  about: {
    eyebrow: "Professional profile",
    title: "Systems engineering with a product mindset",
    description:
      "Graduate of Universidad del Magdalena. Since 2024 I have worked independently on digital solutions and on mobile products with Yakka Labour and Yakka Sport Jobs. I emphasize code quality, autonomy, and teamwork.",
    highlightsTitle: "How I add value",
    highlights: [
      "Reusable component architectures, React Hooks and React Query on the web.",
      "Flutter with GetX, Clean Architecture, and Firebase (Auth, Firestore, Storage) on mobile.",
      "Performance tuning, modular folders, and Vercel deployments with Git/GitHub.",
    ],
    quote:
      "I care about functional, scalable interfaces, user experience, and solid engineering practices.",
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
      "Independent frontend work and mobile roles on real products with teams in Colombia and Australia.",
    items: [
      {
        role: "Frontend developer (React / Next.js)",
        company: "Freelance",
        period: "Feb. 2024 — Present",
        bullets: [
          "Modern, scalable, responsive web UIs with React, Next.js, and Tailwind CSS.",
          "Reusable architectures, React Hooks, and React Query; performance and modular structure.",
          "Corporate landing pages, learning platforms with user management, and job portals with filters, auth, and admin panels.",
          "Deployments and maintenance on Vercel; version control with Git/GitHub.",
        ],
      },
      {
        role: "Mobile developer (Flutter)",
        company: "Yakka Labour",
        period: "Feb. 2024 — Present",
        bullets: [
          "Cross‑platform apps with Flutter and Dart; performance, clean architecture, and UX.",
          "State and navigation with GetX: reactivity, dependency injection, and decoupled controllers.",
          "Firebase (Auth, Firestore, Storage) for persistence and real‑time data.",
          "Job‑search app (auth, dynamic profiles, filters) and sports‑professionals app (geolocation, verified profiles).",
          "Clean Architecture with UI, domain, and data layers.",
        ],
      },
      {
        role: "Mobile developer (Flutter)",
        company: "Yakka Sport Jobs",
        period: "Aug. 2025 — Present",
        bullets: [
          "Frontend for Yakka Sport Jobs Australia: connects coaches, physios, and technical staff with clubs and academies across Australia.",
          "Responsive UI/UX for job search, profiles, and application flows.",
          "REST APIs for authentication and live data.",
          "Single codebase for Android and iOS.",
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
        "Emergency ID with QR and NFC for people and pets—allergies, meds, and contacts available instantly, no app install.",
    },
    kodedocs: {
      title: "KodeDocs",
      description:
        "Proposals, contracts, and invoices in one flow with e‑signature and a polished experience. Product landing under KodeLabs.",
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
      "Technologies listed on your résumé and used across web and mobile work.",
    items: [
      {
        key: "flutter",
        name: "Flutter",
        detail: "Cross‑platform apps with Dart and clean architecture.",
      },
      {
        key: "dart",
        name: "Dart",
        detail: "Core language for reactive UI and app logic.",
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
        key: "react",
        name: "React",
        detail: "Components, hooks, and the frontend ecosystem.",
      },
      {
        key: "nextjs",
        name: "Next.js",
        detail: "SSR, routing, and Vercel deployments.",
      },
      {
        key: "tailwind",
        name: "Tailwind CSS",
        detail: "Utility‑first styling and responsive layouts.",
      },
      {
        key: "hooks",
        name: "React Hooks",
        detail: "State and side effects in functional components.",
      },
      {
        key: "git",
        name: "Git",
        detail: "Version control and collaborative workflows.",
      },
      {
        key: "github",
        name: "GitHub",
        detail: "Repositories and code collaboration.",
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
      "© Juan José Gómez Sánchez — Systems Engineer. Next.js, Tailwind CSS, and Three.js.",
    line2: "Static portfolio — no backend.",
  },
};
