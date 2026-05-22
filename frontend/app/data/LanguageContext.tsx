"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./en.json";
import pt from "./pt.json";

type Language = "EN" | "PT-BR";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lng") as Language;
    if (savedLang === "EN" || savedLang === "PT-BR") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "EN" ? "PT-BR" : "EN";
    setLanguage(nextLang);
    localStorage.setItem("preferred-lng", nextLang);
  };

  const t = language === "EN" ? en : pt;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}