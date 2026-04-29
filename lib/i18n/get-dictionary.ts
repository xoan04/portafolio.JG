import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { en } from "./messages/en";
import { es } from "./messages/es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
