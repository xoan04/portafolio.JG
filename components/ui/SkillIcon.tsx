import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsBoxes } from "react-icons/bs";
import { Server } from "lucide-react";

const iconClass = "h-7 w-7 shrink-0";

/** Iconos de tecnología vía react-icons + Lucide. */
export function SkillIcon({ skillKey }: { skillKey: string }) {
  switch (skillKey) {
    case "flutter":
      return (
        <SiFlutter className={`${iconClass} text-primary`} aria-hidden />
      );
    case "dart":
      return <SiDart className={`${iconClass} text-primary`} aria-hidden />;
    case "getx":
      return (
        <BsBoxes className={`${iconClass} text-purple`} aria-hidden />
      );
    case "firebase":
      return (
        <SiFirebase className={`${iconClass} text-orange`} aria-hidden />
      );
    case "react":
      return (
        <SiReact className={`${iconClass} text-primary`} aria-hidden />
      );
    case "nextjs":
      return (
        <SiNextdotjs className={`${iconClass} text-text`} aria-hidden />
      );
    case "typescript":
      return (
        <SiTypescript className={`${iconClass} text-primary`} aria-hidden />
      );
    case "tailwind":
      return (
        <SiTailwindcss className={`${iconClass} text-primary`} aria-hidden />
      );
    case "nestjs":
      return (
        <Server className={`${iconClass} text-danger`} aria-hidden />
      );
    case "prisma":
      return (
        <SiPrisma className={`${iconClass} text-secondary`} aria-hidden />
      );
    case "node":
      return (
        <SiNodedotjs className={`${iconClass} text-secondary`} aria-hidden />
      );
    case "hooks":
      return (
        <SiJavascript
          className={`${iconClass} text-accent`}
          aria-hidden
        />
      );
    case "git":
      return <SiGit className={`${iconClass} text-orange`} aria-hidden />;
    case "github":
      return (
        <SiGithub className={`${iconClass} text-text`} aria-hidden />
      );
    default:
      return (
        <span
          className={`${iconClass} inline-block rounded-lg border-2 border-border bg-surface`}
          aria-hidden
        />
      );
  }
}
