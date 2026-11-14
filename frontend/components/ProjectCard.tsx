import { Project } from "../app/data/projects";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa"; 

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-5 bg-white dark:bg-zinc-900/40 border border-[#DDD9D0] dark:border-zinc-800/80 rounded-xl flex flex-col justify-between hover:border-[#1E1C1D] dark:hover:border-zinc-700/80 transition-all duration-200 group shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Folder size={18} className="text-[#6B6864] dark:text-zinc-500 group-hover:text-[#1E1C1D] dark:group-hover:text-zinc-400 transition-colors" />
          
          {/* Área de Ação: GitHub + Link de Deploy */}
          <div className="flex items-center gap-4 text-[#6B6864] dark:text-zinc-500">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1E1C1D] dark:hover:text-zinc-300 transition-colors flex items-center gap-1" title="Código Fonte">
                <FaGithub size={14} /> 
                <span className="text-[10px] font-mono">Code</span>
              </a>
            )}
            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="text-[#1E1C1D] dark:text-emerald-600 hover:text-[#6B6864] dark:hover:text-emerald-400 transition-colors flex items-center gap-1" title="Acessar Site">
                <span className="text-[10px] font-mono font-bold">Site</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-[#1E1C1D] dark:text-zinc-200 tracking-tight">{project.title}</h3>
          <p className="text-xs text-[#6B6864] dark:text-zinc-400 leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-[#F4F3EF] dark:bg-zinc-950 text-[#6B6864] dark:text-zinc-600 rounded text-[10px] font-mono border border-[#DDD9D0] dark:border-zinc-900">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
