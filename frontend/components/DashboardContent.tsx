"use client";

import ProfileSidebar from "./ProfileSidebar";
import ProjectCard from "./ProjectCard";
import ContributionGraph from "./ContributionGraph";
import { getProjectsData } from "../app/data/projects";
import { useLanguage } from "../app/data/LanguageContext";
import { LanguageToggle } from "../app/data/LanguageToggle";
import { Code2, Award } from "lucide-react";

export default function DashboardContent({ githubData }: { githubData: any }) {
  const { t } = useLanguage();
  const translatedProjects = getProjectsData(t);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 relative">
      {/* Botão de alternar idioma posicionado de forma fixa */}
      <LanguageToggle />

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Left Control Panel */}
        <ProfileSidebar />

        {/* Right Engineering Dashboard */}
        <section className="flex-1 flex flex-col gap-10">
          
          {/* Contribution Graph */}
          <ContributionGraph githubData={githubData} />
          
          {/* Section 1: Tech Stack */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Code2 size={18} />
              <h2 className="text-sm font-semibold tracking-wider uppercase">{t.techStackTitle}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-300">Python</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-300">FastAPI</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-300">SQL / PostgreSQL</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-300">PySpark</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-300">Docker</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-400">TypeScript</span>
              <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-400">Next.js</span>
            </div>
          </div>

          {/* Section 2: Projects Grid */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">{t.featuredProjectsTitle}</h2>
              <p className="text-sm text-zinc-400">{t.featuredProjectsSub}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {translatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Section 3: Certifications */}
          <div className="p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Award className="text-zinc-500 shrink-0 mt-0.5" size={20} />
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-zinc-200">{t.certificationsTitle}</h4>
                <p className="text-xs text-zinc-400">{t.certificationsSub}</p>
              </div>
            </div>
            <a 
              href="https://github.com/lucaspaiva-lp/professional-certifications" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 transition shrink-0 text-center"
            >
              {t.certificationsBtn}
            </a>
          </div>

          {/* Footer */}
          <footer className="mt-4 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
            <span>{t.footerDevelopedBy}</span>
            <span className="font-mono text-[10px]">v1.0.5</span>
          </footer>
        </section>

      </main>
    </div>
  );
}