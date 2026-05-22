"use client";

import { useLanguage } from "@/app/data/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 px-3 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm select-none"
    >
      <span className={language === "EN" ? "text-indigo-400 font-bold" : ""}>EN</span>
      <span className="text-zinc-600">|</span>
      <span className={language === "PT-BR" ? "text-indigo-400 font-bold" : ""}>PT-BR</span>
    </button>
  );
}