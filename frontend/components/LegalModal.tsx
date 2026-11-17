"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, FileText, Lock, X, Check, Copy, ExternalLink } from "lucide-react";
import { useLanguage } from "../app/data/LanguageContext";
import Link from "next/link";

export type LegalTab = "privacy" | "terms" | "nda";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export default function LegalModal({ isOpen, onClose, initialTab = "privacy" }: LegalModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [copied, setCopied] = useState(false);

  // Handle ESC key and scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lucaspaiva-lp@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const currentContent =
    activeTab === "privacy"
      ? t.legal.privacyContent
      : activeTab === "terms"
      ? t.legal.termsContent
      : t.legal.ndaContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click handler */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-white dark:bg-zinc-950 border border-[#DDD9D0] dark:border-zinc-800 rounded-2xl shadow-2xl z-10 overflow-hidden transition-all">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#DDD9D0] dark:border-zinc-900 bg-[#FAF9F6] dark:bg-zinc-900/50">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#DDD9D0] dark:border-zinc-800 text-emerald-600 dark:text-emerald-500 shadow-sm shrink-0 mt-0.5">
                <ShieldCheck size={22} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-[#1E1C1D] dark:text-zinc-100">
                  {t.legal.modalTitle}
                </h3>
                <p className="text-xs text-[#6B6864] dark:text-zinc-400 mt-0.5">
                  {t.legal.modalSubtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#81807C] hover:text-[#1E1C1D] dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-[#EBE7DF] dark:hover:bg-zinc-800 transition cursor-pointer"
              aria-label={t.legal.closeBtn}
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 border-b border-[#DDD9D0] dark:border-zinc-800/80 -mb-5 sm:-mb-6 overflow-x-auto pb-0">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
                activeTab === "privacy"
                  ? "border-[#1E1C1D] dark:border-emerald-500 text-[#1E1C1D] dark:text-zinc-100 font-semibold"
                  : "border-transparent text-[#81807C] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-200"
              }`}
            >
              <ShieldCheck size={14} className={activeTab === "privacy" ? "text-emerald-600 dark:text-emerald-500" : ""} />
              <span>{t.legal.tabs.privacy}</span>
            </button>

            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
                activeTab === "terms"
                  ? "border-[#1E1C1D] dark:border-emerald-500 text-[#1E1C1D] dark:text-zinc-100 font-semibold"
                  : "border-transparent text-[#81807C] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-200"
              }`}
            >
              <FileText size={14} />
              <span>{t.legal.tabs.terms}</span>
            </button>

            <button
              onClick={() => setActiveTab("nda")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
                activeTab === "nda"
                  ? "border-[#1E1C1D] dark:border-emerald-500 text-[#1E1C1D] dark:text-zinc-100 font-semibold"
                  : "border-transparent text-[#81807C] dark:text-zinc-400 hover:text-[#1E1C1D] dark:hover:text-zinc-200"
              }`}
            >
              <Lock size={13} />
              <span>{t.legal.tabs.nda}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5 text-[#1E1C1D] dark:text-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DDD9D0] dark:border-zinc-900 pb-3">
            <h4 className="text-sm sm:text-base font-semibold text-[#1E1C1D] dark:text-zinc-100">
              {currentContent.title}
            </h4>
            <span className="text-[11px] font-mono text-[#81807C] dark:text-zinc-500">
              {currentContent.updated}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-[#6B6864] dark:text-zinc-300">
            {currentContent.intro}
          </p>

          {/* DPO / Institutional Badge Box */}
          <div className="p-3.5 bg-[#FAF9F6] dark:bg-zinc-900/60 border border-[#DDD9D0] dark:border-zinc-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-500 shrink-0" />
              <div>
                <span className="font-semibold text-[#1E1C1D] dark:text-zinc-200">
                  {t.legal.dpoContactLabel}
                </span>{" "}
                <span className="font-mono text-[#6B6864] dark:text-zinc-400">
                  lucaspaiva-lp@outlook.com
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white dark:bg-zinc-800 border border-[#DDD9D0] dark:border-zinc-700 hover:bg-[#EBE7DF] dark:hover:bg-zinc-700 transition cursor-pointer text-[#1E1C1D] dark:text-zinc-200 shrink-0 self-start sm:self-auto shadow-xs"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{copied ? t.legal.copied : t.legal.copyEmail}</span>
            </button>
          </div>

          {/* Sections List */}
          <div className="space-y-4 pt-1">
            {currentContent.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-zinc-900/30 border border-[#DDD9D0] dark:border-zinc-900 rounded-xl space-y-1.5 shadow-2xs"
              >
                <h5 className="text-xs font-semibold text-[#1E1C1D] dark:text-zinc-200">
                  {sec.heading}
                </h5>
                <p className="text-xs text-[#6B6864] dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#DDD9D0] dark:border-zinc-900 bg-[#FAF9F6] dark:bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-[#81807C] dark:text-zinc-500 text-[11px]">
            <Link
              href={activeTab === "terms" ? "/termos" : "/privacidade"}
              onClick={onClose}
              className="hover:text-[#1E1C1D] dark:hover:text-zinc-200 flex items-center gap-1 transition underline-offset-4 hover:underline"
            >
              <span>{t.legal.openStandalone}</span>
              <ExternalLink size={11} />
            </Link>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#1E1C1D] dark:bg-zinc-200 hover:bg-[#383536] dark:hover:bg-white text-[#F4F3EF] dark:text-zinc-900 rounded-xl text-xs font-medium transition cursor-pointer shadow-sm text-center"
          >
            {t.legal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
