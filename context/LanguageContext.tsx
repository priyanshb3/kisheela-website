"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import en from "../messages/en.json";
import hi from "../messages/hi.json";

const translations = {
  en,
  hi,
};

type Language = "en" | "hi";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);