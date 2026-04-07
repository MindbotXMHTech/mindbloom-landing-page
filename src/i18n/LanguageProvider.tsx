import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language, LocalizedText } from "./types";

const LANGUAGE_STORAGE_KEY = "mindbloom-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (text: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "th";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === "th" || storedLanguage === "en") {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("th") ? "th" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === "th" ? "en" : "th"));
  }, []);

  const t = useCallback(
    (text: LocalizedText) => text[language],
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, toggleLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
