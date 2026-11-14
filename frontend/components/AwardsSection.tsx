'use client';

import { useLanguage } from '../app/data/LanguageContext';
import { Award, ExternalLink, FileText, ShieldCheck, Calendar } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  decree: string;
  edition: string;
  code: string;
  scope: string;
  url: string;
}

export default function AwardsSection() {
  const { t } = useLanguage();

  if (!t.awards) return null;

  return (
    <section id="awards" className="flex flex-col gap-4">
      {/* Cabeçalho da Seção */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#5E5B54] dark:text-zinc-400">
          <Award size={18} />
          <h2 className="text-sm font-semibold tracking-wider uppercase text-[#1E1E1E] dark:text-zinc-100">
            {t.awards.title}
          </h2>
        </div>

        <a
          href="https://www.linkedin.com/in/lucaspaiva-lp/details/honors/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#5E5B54] dark:text-zinc-400 hover:text-[#1E1E1E] dark:hover:text-zinc-100 transition-colors font-medium flex items-center gap-1.5"
        >
          <FaLinkedin size={14} className="text-[#0A66C2]" />
          <span>{t.awards.verifyLabel}</span>
          <ExternalLink size={12} className="opacity-70" />
        </a>
      </div>

      <p className="-mt-2 text-xs text-[#5E5B54] dark:text-zinc-400">{t.awards.subtitle}</p>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
        {t.awards.items.map((item: AwardItem, idx: number) => (
          <div
            key={idx}
            className="p-5 bg-[#F7F5F0] dark:bg-zinc-900/60 border border-[#D8D3C8] dark:border-zinc-800 rounded-xl flex flex-col justify-between hover:border-[#B8B3A8] dark:hover:border-zinc-700 transition-all duration-200 shadow-sm group"
          >
            <div className="flex flex-col gap-3.5">
              
              {/* Topo: Ícone e Data */}
              <div className="flex items-center justify-between">
                <span className="p-2 bg-[#E6E2D8] dark:bg-zinc-800 text-[#1E1E1E] dark:text-zinc-200 rounded-lg border border-[#D8D3C8] dark:border-zinc-700">
                  <Award size={16} />
                </span>

                <span className="text-[11px] font-mono text-[#5E5B54] dark:text-zinc-400 bg-[#EFECE6] dark:bg-zinc-800 px-2.5 py-0.5 rounded border border-[#D8D3C8] dark:border-zinc-700 flex items-center gap-1.5">
                  <Calendar size={11} className="opacity-70" />
                  {item.date}
                </span>
              </div>

              {/* Título e Órgão */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-[#1E1E1E] dark:text-zinc-100 tracking-tight">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-[#5E5B54] dark:text-zinc-400">
                  {item.issuer}
                </span>
              </div>

              {/* Bloco de Metadados Oficiais (Portaria, Diário e Código) */}
              <div className="p-3 bg-white/80 dark:bg-zinc-800/50 rounded-lg border border-[#D8D3C8]/70 dark:border-zinc-800 flex flex-col gap-1.5">
                
                {/* Decreto / Portaria */}
                <div className="flex items-center gap-2 text-xs font-semibold font-mono text-[#1E1E1E] dark:text-zinc-200">
                  <FileText size={13} className="text-[#5E5B54] dark:text-zinc-400 shrink-0" />
                  <span>{item.decree}</span>
                </div>

                {/* Edição do Diário Oficial */}
                <div className="text-[11px] font-mono text-[#5E5B54] dark:text-zinc-400 pl-5">
                  {item.edition}
                </div>

                {/* Código de Verificação */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#5E5B54] dark:text-zinc-400 pl-5 pt-1 border-t border-[#D8D3C8]/40 dark:border-zinc-700/50">
                  <ShieldCheck size={12} className="text-[#0A66C2] shrink-0" />
                  <span>{item.code}</span>
                </div>
              </div>

              {/* Escopo / Descrição de Atuação */}
              <p className="text-xs text-[#1E1E1E] dark:text-zinc-300 font-normal leading-relaxed">
                {item.scope}
              </p>
            </div>

            {/* Rodapé do Card com Link */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-[#D8D3C8]/60 dark:border-zinc-800 flex items-center justify-between text-xs text-[#5E5B54] dark:text-zinc-400 hover:text-[#1E1E1E] dark:hover:text-zinc-100 transition-colors group/link"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <FaLinkedin size={14} className="text-[#0A66C2]" />
                <span>{t.awards.verifyLabel}</span>
              </span>
              <span className="text-xs text-[#5E5B54] dark:text-zinc-400 group-hover/link:text-[#1E1E1E] dark:group-hover/link:text-zinc-100 transition-transform group-hover/link:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}