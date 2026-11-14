'use client';

import { useLanguage } from '../app/data/LanguageContext';
import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!t.faq) return null;

  return (
    <section id="faq" className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#6B6864] dark:text-zinc-400">
        <HelpCircle size={18} />
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#1E1C1D] dark:text-zinc-400">{t.faq.title}</h2>
      </div>
      
      <p className="-mt-2 text-xs text-[#6B6864] dark:text-zinc-400">{t.faq.subtitle}</p>

      <div className="flex flex-col gap-3">
        {t.faq.items.map((item: FaqItem, idx: number) => (
          <div key={idx} className="rounded-xl border border-[#DDD9D0] dark:border-zinc-900 bg-white dark:bg-zinc-900/30 overflow-hidden transition shadow-sm">
            <button
              onClick={() => toggleFaq(idx)}
              className="flex w-full items-center justify-between p-4 text-left text-xs font-medium text-[#1E1C1D] dark:text-zinc-200 hover:bg-[#F4F3EF] dark:hover:bg-zinc-800/40 transition-colors gap-3 cursor-pointer"
            >
              <span>{item.question}</span>
              <span className="text-[#81807C] dark:text-zinc-500 shrink-0">
                {openIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-xs leading-relaxed text-[#6B6864] dark:text-zinc-400 border-t border-[#DDD9D0] dark:border-zinc-900/60 pt-3 whitespace-pre-line bg-[#FAF9F6] dark:bg-transparent">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
