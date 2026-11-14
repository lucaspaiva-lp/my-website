"use client";

import ProfileSidebar from "./ProfileSidebar";
import ProjectCard from "./ProjectCard";
import Certificates from "./Certificates";
import FaqSection from "./FaqSection";
import PricingSection from "./PricingSection";
import { getProjectsData } from "../app/data/projects";
import { useLanguage } from "../app/data/LanguageContext";
import { LanguageToggle } from "../app/data/LanguageToggle";
import { Code2, Award } from "lucide-react";

export default function DashboardContent({ githubData }: { githubData: any }) {
  const { t } = useLanguage();
  const translatedProjects = getProjectsData(t);

  return (
    <div className="min-h-screen bg-[#F4F3EF] dark:bg-black text-[#1E1C1D] dark:text-zinc-100 selection:bg-[#1E1C1D] selection:text-[#F4F3EF] dark:selection:bg-zinc-800 dark:selection:text-zinc-100 relative transition-colors duration-200">
      {/* Botão de alternar tema e idioma posicionados de forma fixa */}
      <LanguageToggle />

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Control Panel */}
        <ProfileSidebar />

        {/* Right Engineering Dashboard */}
        <section className="flex-1 flex flex-col gap-10">
          
          {/* Section 1: Tech Stack */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#6B6864] dark:text-zinc-400">
              <Code2 size={18} />
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#1E1C1D] dark:text-zinc-400">{t.techStackTitle}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#1E1C1D] dark:text-zinc-300 shadow-sm">Python</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#1E1C1D] dark:text-zinc-300 shadow-sm">FastAPI</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#1E1C1D] dark:text-zinc-300 shadow-sm">SQL / PostgreSQL</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#1E1C1D] dark:text-zinc-300 shadow-sm">PySpark</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#1E1C1D] dark:text-zinc-300 shadow-sm">Docker</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#6B6864] dark:text-zinc-400 shadow-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 rounded-md text-xs font-mono text-[#6B6864] dark:text-zinc-400 shadow-sm">Next.js</span>
            </div>
          </div>

          {/* Section 2: Projects Grid */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-[#1E1C1D] dark:text-zinc-100">{t.featuredProjectsTitle}</h2>
              <p className="text-sm text-[#6B6864] dark:text-zinc-400">{t.featuredProjectsSub}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {translatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* COMPONENTE DE CERTIFICADOS INTERATIVOS */}
          <Certificates />

          {/* Section 3: Certifications */}
          <div className="p-4 bg-white/70 dark:bg-zinc-900/30 border border-[#DDD9D0] dark:border-zinc-900 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Award className="text-[#6B6864] dark:text-zinc-500 shrink-0 mt-0.5" size={20} />
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-[#1E1C1D] dark:text-zinc-200">{t.certificationsTitle}</h4>
                <p className="text-xs text-[#6B6864] dark:text-zinc-400">{t.certificationsSub}</p>
              </div>
            </div>
            <a 
              href="https://github.com/lucaspaiva-lp/professional-certifications" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-[#1E1C1D] dark:bg-zinc-900 hover:bg-[#383536] dark:hover:bg-zinc-800 border border-[#1E1C1D] dark:border-zinc-800 rounded-lg text-xs font-medium text-[#F4F3EF] dark:text-zinc-300 transition shrink-0 text-center shadow-sm"
            >
              {t.certificationsBtn}
            </a>
          </div>

          {/* ─── SEÇÃO DE PRECIFICAÇÃO E SERVIÇOS ─── */}
          <PricingSection />

          {/* ─── SEÇÃO DE FAQ ─── */}
          <FaqSection />

          {/* Footer */}
          <footer className="mt-4 pt-6 border-t border-[#DDD9D0] dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#81807C] dark:text-zinc-600">
            <span>{t.footerDevelopedBy}</span>
            <span className="font-mono text-[10px] text-[#9E9B95] dark:text-zinc-600">v1.0.5</span>
          </footer>
        </section>

      </main>
    </div>
  );
}
