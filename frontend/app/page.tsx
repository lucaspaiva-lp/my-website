import ProfileSidebar from "../components/ProfileSidebar";
import ProjectCard from "../components/ProjectCard";
import ContributionGraph from "../components/ContributionGraph";
import { projectsData } from "./data/projects";
import { Code2, Award } from "lucide-react";

// 🛠️ Função isolada para buscar os dados do GitHub via GraphQL no lado do servidor
async function getGithubContributions() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    console.warn("GITHUB_TOKEN não encontrado. Renderizando gráfico estático de fallback.");
    return null; 
  }

  const query = `
    query {
      user(login: "lucaspaiva-lp") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Cache de 1 hora para performance
    });
    
    if (!res.ok) throw new Error("Falha ao buscar dados do GitHub");
    
    const json = await res.json();
    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Erro na requisição do GitHub:", error);
    return null;
  }
}

// 🚀 Componente Principal unificado como Server Component Assíncrono
export default async function Home() {
  // Executa a busca antes de montar a árvore de componentes
  const githubData = await getGithubContributions();

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Painel de Controle Esquerdo */}
        <ProfileSidebar />

        {/* Dashboard de Engenharia Direito */}
        <section className="flex-1 flex flex-col gap-10">
          
          {/* Gráfico de Contribuições Nativo e Conectado no Topo */}
          <ContributionGraph />
          
          {/* Seção 1: Stack Tecnológica */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Code2 size={18} />
              <h2 className="text-sm font-semibold tracking-wider uppercase">Tecnologias & Core Stack</h2>
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

          {/* Seção 2: Grid de Projetos */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Projetos em Destaque</h2>
              <p className="text-sm text-zinc-400">Aplicações, microsserviços e engenharia de dados.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Seção 3: Certificações */}
          <div className="p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Award className="text-zinc-500 shrink-0 mt-0.5" size={20} />
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-zinc-200">Certificações Técnicas</h4>
                <p className="text-xs text-zinc-400">Histórico de validações em engenharia de software e backend.</p>
              </div>
            </div>
            <a 
              href="https://github.com/lucaspaiva-lp/professional-certifications" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 transition shrink-0 text-center"
            >
              Acessar Repositório
            </a>
          </div>

          {/* Rodapé Padrão */}
          <footer className="mt-4 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
            <span>Desenvolvido por lucaspaiva-lp.</span>
            <span className="font-mono text-[10px]">v0.3.0</span>
          </footer>
        </section>

      </main>
    </div>
  );
}