import { Terminal, Link2, Mail, FileText, Award } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <aside className="w-full md:w-80 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 h-fit md:sticky md:top-8 flex flex-col items-center text-center backdrop-blur-sm">
      <div className="w-24 h-24 bg-zinc-800 rounded-full border-2 border-zinc-700 overflow-hidden mb-4">
        <div className="w-full h-full bg-gradient-to-b from-zinc-700 to-zinc-900" />
      </div>

      <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Lucas Paiva</h1>
      <p className="text-sm text-zinc-400 mt-2 font-medium">Backend-focused Developer</p>
      
      <p className="text-xs text-zinc-500 mt-3 max-w-xs leading-relaxed">
        Experiência em sistemas orientados a SQL, arquitetura de backend e APIs com Python/FastAPI.
      </p>

      {/* Ícones genéricos atualizados para compatibilidade com Lucide recente */}
      <div className="flex gap-4 mt-5 text-zinc-400">
        <a href="https://github.com/lucaspaiva-lp" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-zinc-200 transition">
          <Terminal size={20} />
        </a>
        <a href="#" title="LinkedIn" className="hover:text-zinc-200 transition">
          <Link2 size={20} />
        </a>
        <a href="#" title="E-mail" className="hover:text-zinc-200 transition">
          <Mail size={20} />
        </a>
      </div>

      <hr className="w-full border-zinc-800 my-6" />

      <div className="w-full flex flex-col gap-3">
        <a 
          href="#" 
          className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-200 rounded-xl text-sm font-medium transition group"
        >
          <span className="flex items-center gap-3">
            <FileText size={18} className="text-zinc-400" />
            Currículo / Resume
          </span>
          <span className="text-zinc-600 group-hover:text-zinc-400 transition">→</span>
        </a>

        <a 
          href="#" 
          className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-200 rounded-xl text-sm font-medium transition group"
        >
          <span className="flex items-center gap-3">
            <Award size={18} className="text-zinc-400" />
            Certificações
          </span>
          <span className="text-zinc-600 group-hover:text-zinc-400 transition">→</span>
        </a>
      </div>
    </aside>
  );
}