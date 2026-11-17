"use client";

import { useLanguage } from "../data/LanguageContext";
import { LanguageToggle } from "../data/LanguageToggle";
import { FileText, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

export default function TermsOfUsePage() {
  const { t } = useLanguage();
  const content = t.legal.termsContent;
  const ndaContent = t.legal.ndaContent;

  return (
    <div className="min-h-screen bg-[#F4F3EF] dark:bg-black text-[#1E1C1D] dark:text-zinc-100 selection:bg-[#1E1C1D] selection:text-[#F4F3EF] dark:selection:bg-zinc-800 dark:selection:text-zinc-100 transition-colors duration-200">
      <LanguageToggle />

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-8">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#6B6864] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-100 transition-colors px-3 py-1.5 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-[#DDD9D0] dark:border-zinc-800 shadow-2xs"
          >
            <ArrowLeft size={14} />
            <span>{t.legal.backToHome}</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#81807C] dark:text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.legal.complianceBadge}</span>
          </div>
        </div>

        {/* Header Hero */}
        <header className="p-6 sm:p-8 bg-white dark:bg-zinc-900/40 border border-[#DDD9D0] dark:border-zinc-800/80 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#1E1C1D] dark:text-zinc-200">
            <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-zinc-800 border border-[#DDD9D0] dark:border-zinc-700">
              <FileText size={28} className="text-[#1E1C1D] dark:text-zinc-100" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1C1D] dark:text-zinc-100">
                {content.title}
              </h1>
              <p className="text-xs font-mono text-[#81807C] dark:text-zinc-500 mt-1">
                {content.updated} • 70.178.625 LUCAS PAIVA SANTOS DE OLIVEIRA • CNPJ: 70.178.625/0001-19
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#6B6864] dark:text-zinc-300 pt-2 border-t border-[#DDD9D0] dark:border-zinc-900">
            {content.intro}
          </p>
        </header>

        {/* Terms Sections */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-[#1E1C1D] dark:text-zinc-400 flex items-center gap-2">
            <FileText size={16} />
            <span>{t.legal.tabs.terms}</span>
          </h2>

          <div className="space-y-4">
            {content.sections.map((section, idx) => (
              <article
                key={idx}
                className="p-5 sm:p-6 bg-white dark:bg-zinc-900/30 border border-[#DDD9D0] dark:border-zinc-800/80 rounded-2xl shadow-2xs space-y-2"
              >
                <h3 className="text-sm sm:text-base font-semibold text-[#1E1C1D] dark:text-zinc-200">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6864] dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* NDA & Confidentiality Module */}
        <section className="space-y-4 pt-4 border-t border-[#DDD9D0] dark:border-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#1E1C1D] dark:text-zinc-400 flex items-center gap-2">
              <Lock size={16} />
              <span>{t.legal.tabs.nda}</span>
            </h2>
            <Link
              href="/privacidade"
              className="text-xs text-[#6B6864] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-200 transition underline underline-offset-4"
            >
              {t.legal.privacyLink} →
            </Link>
          </div>

          <div className="p-5 sm:p-6 bg-white dark:bg-zinc-900/30 border border-[#DDD9D0] dark:border-zinc-800/80 rounded-2xl shadow-2xs space-y-4">
            <p className="text-xs sm:text-sm text-[#6B6864] dark:text-zinc-300 leading-relaxed">
              {ndaContent.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {ndaContent.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-zinc-950 border border-[#DDD9D0] dark:border-zinc-800/60 space-y-1.5"
                >
                  <h4 className="text-xs font-semibold text-[#1E1C1D] dark:text-zinc-200">
                    {sec.heading}
                  </h4>
                  <p className="text-[11px] text-[#6B6864] dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-[#DDD9D0] dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#81807C] dark:text-zinc-500">
          <div className="flex items-center">
            <span className="font-mono">{t.footerCnpj}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <Link href="/privacidade" className="hover:text-[#1E1C1D] dark:hover:text-zinc-300 underline underline-offset-4">
              {t.legal.privacyLink}
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-[#1E1C1D] dark:hover:text-zinc-300 underline underline-offset-4">
              {t.legal.backToHome}
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
