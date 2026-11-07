'use client';

import { useLanguage } from '../app/data/LanguageContext';
import { DollarSign, Check, Clock, RefreshCw, Mail, ExternalLink, ShieldCheck, Wrench, Users } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function PricingSection() {
  const { t, language } = useLanguage();

  if (!t.pricing) return null;

  // URL do seu Gig no Fiverr
  const FIVERR_GIG_URL = "https://www.fiverr.com/lucaspaiva_lp";
  
  // URL do seu LinkedIn
  const LINKEDIN_URL = "https://www.linkedin.com/in/lucaspaiva-lp/";

  // Ícones para os adendos operacionais
  const addonIcons = [
    <Users key="users" size={16} className="text-blue-400 shrink-0 mt-0.5" />,
    <Wrench key="wrench" size={16} className="text-emerald-400 shrink-0 mt-0.5" />,
    <ShieldCheck key="shield" size={16} className="text-amber-400 shrink-0 mt-0.5" />
  ];

  // Gerador de link de e-mail com assunto e template do corpo preenchidos
  const getMailtoLink = (planName: string) => {
    const email = "lucaspaivasanto21@gmail.com";
    const subject = encodeURIComponent(`Project Inquiry - ${planName} Package`);
    const body = encodeURIComponent(
      `Hi Lucas,\n\nI am interested in your ${planName} Package for my project.\n\nHere is a brief overview of what I need:\n- Project Goal: \n- Key Features required: \n- Target Timeline: \n\nLooking forward to hearing from you!`
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-zinc-400">
        <DollarSign size={18} />
        <h2 className="text-sm font-semibold tracking-wider uppercase">{t.pricing.title}</h2>
      </div>

      <p className="-mt-2 text-xs text-zinc-400">{t.pricing.subtitle}</p>

      {/* Grid de Planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {t.pricing.plans.map((plan: any, idx: number) => (
          <div
            key={idx}
            className={`rounded-xl border p-5 flex flex-col justify-between relative transition-all ${
              plan.popular
                ? 'border-zinc-700 bg-zinc-900/60 shadow-lg shadow-black/50'
                : 'border-zinc-900 bg-zinc-900/20 hover:border-zinc-800'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-zinc-100 text-zinc-950 font-semibold text-[10px] rounded-full uppercase tracking-wider">
                {t.pricing.popularTag}
              </span>
            )}

            <div>
              <h3 className="text-lg font-bold text-zinc-100">{plan.name}</h3>
              <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">{plan.tagline}</p>

              {/* Rótulo 'A partir de' para clareza comercial */}
              <div className="my-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                  {t.pricing.startingAt || ((language as string).startsWith('pt') ? 'A partir de' : 'Starting at')}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-extrabold text-zinc-100">{plan.price}</span>
                  <span className="text-xs text-zinc-500 font-mono">{plan.currency}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-zinc-400 mb-6 border-y border-zinc-900 py-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-zinc-500" />
                  <span>{plan.delivery}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw size={14} className="text-zinc-500" />
                  <span>{plan.revisions}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-xs text-zinc-300">
                {plan.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opções de Ação (Email Direto + Fiverr) */}
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-900/60">
              {/* Botão 1: Contato Direto por E-mail */}
              <a
                href={getMailtoLink(plan.name)}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-center transition flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-300"
              >
                <Mail size={14} />
                <span>
                  {(language as string).startsWith('pt')
                    ? 'Contato Direto (E-mail)'
                    : 'Direct Contact (Email)'}
                </span>
              </a>

              {/* Botão 2: Pedido Protegido via Fiverr */}
              <a
                href={FIVERR_GIG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-center transition flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300"
              >
                <ExternalLink size={14} className="text-emerald-400" />
                <span>
                  {(language as string).startsWith('pt')
                    ? 'Pedir via Fiverr'
                    : 'Order via Fiverr'}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de Serviços Adicionais / Adendos Especificados */}
      {t.pricing.addons && (
        <div className="mt-2 rounded-xl border border-zinc-900 bg-zinc-950/40 p-5">
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
            {t.pricing.addonsTitle}
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5 mb-4">
            {t.pricing.addonsSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.pricing.addons.map((addon: any, aIdx: number) => (
              <div key={aIdx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900">
                {addonIcons[aIdx % addonIcons.length]}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">{addon.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Banner de Consultoria Gratuita & Google Meet/Zoom via LinkedIn */}
      {t.pricing.consultation && (
        <div className="mt-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition hover:border-zinc-700">
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {(language as string).startsWith('pt') ? 'Consultoria Gratuita' : 'Free Discovery Call'}
              </span>
              <span className="text-xs text-zinc-500 font-mono">15-20 min • Google Meet / Zoom</span>
            </div>
            <h3 className="text-sm font-bold text-zinc-100 mt-1">
              {t.pricing.consultation.title}
            </h3>
            <p className="text-xs text-zinc-400">
              {t.pricing.consultation.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-950 hover:bg-zinc-300 transition flex items-center justify-center gap-2"
            >
              <FaLinkedin size={16} className="text-blue-600" />
              <span>{t.pricing.consultation.cta}</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}