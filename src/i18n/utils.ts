import type { Language, LocalizedText } from "./types";

export function getLocalizedText(
  text: LocalizedText,
  language: Language,
): string {
  return text[language];
}
