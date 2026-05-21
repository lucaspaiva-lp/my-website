import { Project } from "../app/data/projects";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl flex flex-col justify-between hover:border-zinc-700/80 transition-colors duration-200 group">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Folder size={18} className="text-zinc-500 group-hover:text-zinc-400 transition-colors" />
          <div className="flex items-center gap-3 text-zinc-500">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors" title="Repositório">
                <span className="text-xs font-mono">Repo</span>
              </a>
            )}
            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors" title="Produção">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-zinc-200 tracking-tight">{project.title}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-zinc-900 text-zinc-500 rounded text-[10px] font-mono border border-zinc-900">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}