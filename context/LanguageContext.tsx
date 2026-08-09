"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../messages/en.json";
import hi from "../messages/hi.json";

export type Language = "en" | "hi";

type Translations = typeof en;

const translations: Record<Language, Translations> = {
  en,
  hi,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  dict: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("kisheela_lang") as Language;
    if (savedLang === "en" || savedLang === "hi") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("kisheela_lang", lang);
    }
  };

  const getTranslation = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key missing
        let fallback: any = translations["en"];
        for (const k of keys) {
          if (fallback && typeof fallback === "object" && k in fallback) {
            fallback = fallback[k];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: getTranslation,
        dict: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};