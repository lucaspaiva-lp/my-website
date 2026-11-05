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
      <div className="flex items-center gap-2 text-zinc-400">
        <HelpCircle size={18} />
        <h2 className="text-sm font-semibold tracking-wider uppercase">{t.faq.title}</h2>
      </div>
      
      <p className="-mt-2 text-xs text-zinc-400">{t.faq.subtitle}</p>

      <div className="flex flex-col gap-3">
        {t.faq.items.map((item: FaqItem, idx: number) => (
          <div key={idx} className="rounded-xl border border-zinc-900 bg-zinc-900/30 overflow-hidden transition">
            <button
              onClick={() => toggleFaq(idx)}
              className="flex w-full items-center justify-between p-4 text-left text-xs font-medium text-zinc-200 hover:bg-zinc-800/40 transition-colors gap-3"
            >
              <span>{item.question}</span>
              <span className="text-zinc-500 shrink-0">
                {openIndex === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-xs leading-relaxed text-zinc-400 border-t border-zinc-900/60 pt-3 whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}