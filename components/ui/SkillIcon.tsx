import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { BsBoxes } from "react-icons/bs";

const iconClass = "h-8 w-8 shrink-0";

/** Iconos de tecnología vía react-icons (Simple Icons + complementos). */
export function SkillIcon({ skillKey }: { skillKey: string }) {
  switch (skillKey) {
    case "flutter":
      return (
        <SiFlutter className={`${iconClass} text-sky-400`} aria-hidden />
      );
    case "dart":
      return <SiDart className={`${iconClass} text-blue-500`} aria-hidden />;
    case "getx":
      return (
        <BsBoxes className={`${iconClass} text-violet-400`} aria-hidden />
      );
    case "firebase":
      return (
        <SiFirebase className={`${iconClass} text-amber-400`} aria-hidden />
      );
    case "react":
      return (
        <SiReact className={`${iconClass} text-cyan-400`} aria-hidden />
      );
    case "nextjs":
      return (
        <SiNextdotjs className={`${iconClass} text-zinc-100`} aria-hidden />
      );
    case "tailwind":
      return (
        <SiTailwindcss className={`${iconClass} text-sky-300`} aria-hidden />
      );
    case "hooks":
      return (
        <SiJavascript
          className={`${iconClass} text-yellow-400`}
          aria-hidden
        />
      );
    case "git":
      return <SiGit className={`${iconClass} text-orange-500`} aria-hidden />;
    case "github":
      return (
        <SiGithub className={`${iconClass} text-zinc-200`} aria-hidden />
      );
    default:
      return (
        <span
          className={`${iconClass} inline-block rounded-lg bg-zinc-700`}
          aria-hidden
        />
      );
  }
}
