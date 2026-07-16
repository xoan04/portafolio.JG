import type { Locale } from "@/lib/i18n/config";

/** Textos de presentación del tema pixel (no sustituyen el copy del CV). */
export function getUiChrome(locale: Locale) {
  if (locale === "en") {
    return {
      player: "PLAYER",
      characterStats: "Character Stats",
      questClear: "QUEST CLEAR",
      unlocked: "UNLOCKED",
      thankYou: "THANK YOU FOR PLAYING",
      madeWith: "Made with",
      niceDay: "Have a nice day!",
      needDev: "Need a Full Stack Developer?",
      yes: "Yes",
      no: "No",
      comeBack: "Come back anytime — the adventure continues.",
      npc: "NPC",
      recruiter: "Recruiter NPC",
      legendary: "Legendary",
      epic: "Epic",
      rare: "Rare",
    };
  }
  return {
    player: "JUGADOR",
    characterStats: "Stats del personaje",
    questClear: "MISIÓN OK",
    unlocked: "DESBLOQUEADO",
    thankYou: "¡GRACIAS POR JUGAR!",
    madeWith: "Hecho con",
    niceDay: "¡Que tengas un buen día!",
    needDev: "¿Necesitas un Full Stack Developer?",
    yes: "Sí",
    no: "No",
    comeBack: "Vuelve cuando quieras — la aventura continúa.",
    npc: "NPC",
    recruiter: "NPC Reclutador",
    legendary: "Legendario",
    epic: "Épico",
    rare: "Raro",
  };
}
