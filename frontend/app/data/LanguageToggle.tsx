"use client";

import { useLanguage } from "@/app/data/LanguageContext";
import { useTheme } from "@/app/data/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Botão de alternar tema (Claro / Escuro) */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Alternar modo escuro / claro"
        title={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
        className="flex items-center justify-center w-8 h-8 rounded-md border text-xs font-medium transition-all shadow-sm select-none bg-white/90 dark:bg-zinc-900 border-[#DDD9D0] dark:border-zinc-800 text-[#6B6864] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-100 hover:border-[#1E1C1D] dark:hover:border-zinc-700 backdrop-blur-sm cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun size={15} className="text-amber-400 transition-transform hover:rotate-45" />
        ) : (
          <Moon size={15} className="text-[#1E1C1D] transition-transform hover:-rotate-12" />
        )}
      </button>

      {/* Botão de alternar idioma (EN / PT-BR) */}
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label="Alternar idioma"
        className="flex items-center gap-2 px-3 h-8 rounded-md border text-xs font-medium transition-all shadow-sm select-none bg-white/90 dark:bg-zinc-900 border-[#DDD9D0] dark:border-zinc-800 text-[#6B6864] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-100 hover:border-[#1E1C1D] dark:hover:border-zinc-700 backdrop-blur-sm cursor-pointer"
      >
        <span className={language === "EN" ? "text-[#1E1C1D] dark:text-indigo-400 font-bold" : ""}>EN</span>
        <span className="text-[#DDD9D0] dark:text-zinc-700">|</span>
        <span className={language === "PT-BR" ? "text-[#1E1C1D] dark:text-indigo-400 font-bold" : ""}>PT-BR</span>
      </button>
    </div>
  );
}