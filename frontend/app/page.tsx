import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/app/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      {/* Container principal responsivo */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Coluna Esquerda - Perfil Fixo */}
        <ProfileSidebar />

        {/* Coluna Direita - Grid de Projetos */}
        <section className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Projetos em Destaque</h2>
            <p className="text-sm text-zinc-400">Aplicações, ferramentas de infraestrutura e ecossistema backend.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Rodapé técnico e limpo */}
          <footer className="mt-12 pt-6 border-t border-zinc-900 text-xs text-zinc-600 text-center md:text-left">
            <span>Mapeado e executado por lucaspaiva-lp.</span>
          </footer>
        </section>

      </main>
    </div>
  );
}