"use client";

import { Mail, FileText, Award, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../app/data/LanguageContext";

export default function ProfileSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full md:w-80 bg-white/80 dark:bg-zinc-900/50 border border-[#DDD9D0] dark:border-zinc-800 rounded-2xl p-6 h-fit md:sticky md:top-8 flex flex-col items-center text-center backdrop-blur-sm shadow-sm transition-colors duration-200">
      
      <div className="w-24 h-24 rounded-full border-2 border-[#1E1C1D] dark:border-zinc-700 overflow-hidden mb-4 bg-[#EBE7DF] dark:bg-zinc-800">
        <img 
          src="/profile.png" 
          alt="Lucas Paiva" 
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-xl font-bold text-[#1E1C1D] dark:text-zinc-100 tracking-tight">Lucas Paiva</h1>
      <p className="text-sm text-[#6B6864] dark:text-zinc-400 mt-2 font-medium">{t.sidebar.role}</p>
      
      <p className="text-xs text-[#81807C] dark:text-zinc-500 mt-3 max-w-xs leading-relaxed">
        {t.sidebar.bio}
      </p>

      {/* Nota de Contato */}
      <div className="mt-4 p-3 bg-[#F4F3EF] dark:bg-zinc-950/50 border border-[#DDD9D0] dark:border-zinc-800/50 rounded-lg flex items-start gap-2 text-[11px] text-[#6B6864] dark:text-zinc-400 text-left">
        <MessageSquare size={14} className="shrink-0 mt-0.5 text-[#1E1C1D] dark:text-emerald-500" />
        <p>{t.sidebar.contactNote}</p>
      </div>

      <div className="flex gap-5 mt-5 text-[#6B6864] dark:text-zinc-400">
        <a href="https://github.com/lucaspaiva-lp" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-[#1E1C1D] dark:hover:text-white transition-colors duration-200">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/lucaspaiva-lp" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-[#1E1C1D] dark:hover:text-blue-500 transition-colors duration-200">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:lucaspaiva-lp@outlook.com" title="E-mail" className="hover:text-[#1E1C1D] dark:hover:text-emerald-500 transition-colors duration-200">
          <Mail size={22} />
        </a>
      </div>

      <hr className="w-full border-[#DDD9D0] dark:border-zinc-800 my-6" />

      <div className="w-full flex flex-col gap-3">
        <a 
          href="https://github.com/lucaspaiva-lp/lucaspaiva-lp/blob/main/cv/(EN)Lucas_Paiva_Backend_Developer.pdf" 
          className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-zinc-900 hover:bg-[#F4F3EF] dark:hover:bg-zinc-800/80 border border-[#DDD9D0] dark:border-zinc-800 text-[#1E1C1D] dark:text-zinc-200 rounded-xl text-sm font-medium transition group shadow-sm"
        >
          <span className="flex items-center gap-3">
            <FileText size={18} className="text-[#6B6864] dark:text-zinc-400 group-hover:text-[#1E1C1D] dark:group-hover:text-zinc-200 transition" />
            {t.sidebar.resumeBtn}
          </span>
          <span className="text-[#81807C] dark:text-zinc-600 group-hover:text-[#1E1C1D] dark:group-hover:text-zinc-400 transition">→</span>
        </a>

        <a 
          href="https://github.com/lucaspaiva-lp/professional-certifications" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-4 py-3 bg-white dark:bg-zinc-900 hover:bg-[#F4F3EF] dark:hover:bg-zinc-800/80 border border-[#DDD9D0] dark:border-zinc-800 text-[#1E1C1D] dark:text-zinc-200 rounded-xl text-sm font-medium transition group shadow-sm"
        >
          <span className="flex items-center gap-3">
            <Award size={18} className="text-[#6B6864] dark:text-zinc-400 group-hover:text-[#1E1C1D] dark:group-hover:text-zinc-200 transition" />
            {t.sidebar.certificationsBtn}
          </span>
          <span className="text-[#81807C] dark:text-zinc-600 group-hover:text-[#1E1C1D] dark:group-hover:text-zinc-400 transition">→</span>
        </a>
      </div>
    </aside>
  );
}
