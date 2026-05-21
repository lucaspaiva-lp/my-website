import { Project } from "@/app/data/projects";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-zinc-300 transition">
            <Folder size={20} />
          </div>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-zinc-300 transition"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <h3 className="text-lg font-bold text-zinc-100 tracking-tight">{project.title}</h3>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs bg-zinc-900 border border-zinc-800/60 text-zinc-400 px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}