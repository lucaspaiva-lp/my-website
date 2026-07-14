"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../app/data/LanguageContext";

interface Certificate {
  id: string;
  tabTitle: string;
  title: string;
  issuer: string;
  year: string;
  imagePath: string;
  pdfPath: string;
}

export default function Certificates() {
  const { t } = useLanguage();

  const certificates: Certificate[] = [
    {
      id: "cs50-sql",
      tabTitle: t.certificates.tabCs50Sql,
      title: "CS50's Introduction to Databases with SQL",
      issuer: "HarvardX",
      year: "2026",
      imagePath: "/certificates/cs50s-introduction-to-databases-with-sql-2026-1.png",
      pdfPath: "https://github.com/lucaspaiva-lp/professional-certifications/blob/main/certificates/2026/cs50s-introduction-to-databases-with-sql-2026.pdf",
    },
    {
      id: "ef-set",
      tabTitle: t.certificates.tabEfSet,
      title: "EF SET English Certificate (C2 Proficient)",
      issuer: "EF Standard English Test",
      year: "2026",
      imagePath: "/certificates/ef-set-english-certificate-2026-1.png",
      pdfPath: "https://github.com/lucaspaiva-lp/professional-certifications/blob/main/certificates/2026/ef-set-english-certificate-2026.pdf",
    },
    {
      id: "oracle-dev",
      tabTitle: t.certificates.tabOracleDev,
      title: "Oracle for Developers Certificate",
      issuer: "Oracle",
      year: "2026",
      imagePath: "/certificates/oracle-for-dev-certificate-1.png",
      pdfPath: "https://github.com/lucaspaiva-lp/professional-certifications/blob/main/certificates/2026/oracle-for-dev-certificate.pdf",
    },
    {
      id: "python-logic",
      tabTitle: t.certificates.tabPythonLogic,
      title: "Programming Logic with Python",
      issuer: "Certificado de Lógica de Programação",
      year: "2026",
      imagePath: "/certificates/programming-logic-python-certificate-1.png",
      pdfPath: "https://github.com/lucaspaiva-lp/professional-certifications/blob/main/certificates/2026/programming-logic-python-certificate.pdf",
    },
  ];

  const [activeTab, setActiveTab] = useState(certificates[0].id);
  const activeCert = certificates.find((cert) => cert.id === activeTab) || certificates[0];

  return (
    <div className="w-full bg-zinc-900/30 border border-zinc-900 rounded-xl p-6 my-2 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-zinc-900 pb-2">
        <h2 className="text-xl font-semibold text-zinc-100">
          {t.certificates.title}
        </h2>
        <a
          href="https://github.com/lucaspaiva-lp/professional-certifications/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-medium flex items-center gap-1"
        >
          {t.certificates.viewAllOnGithub}
        </a>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-zinc-900 overflow-x-auto gap-2 mb-6">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            onClick={() => setActiveTab(cert.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap -mb-px border-b-2 ${
              activeTab === cert.id
                ? "border-b-2 border-zinc-200 text-zinc-100"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {cert.tabTitle}
          </button>
        ))}
      </div>

      {/* Certificate Viewer Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Preview Image */}
        <div className="md:col-span-7 flex justify-center bg-zinc-950 p-4 rounded-lg border border-zinc-900 relative min-h-[300px]">
          <div className="relative w-full h-[350px]">
            <Image
              src={activeCert.imagePath}
              alt={activeCert.title}
              fill
              className="object-contain rounded-md"
              priority
            />
          </div>
        </div>

        {/* Info & CTA */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              {activeCert.issuer}
            </span>
            <h3 className="text-lg font-bold text-zinc-100 mt-1 leading-snug">
              {activeCert.title}
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              {t.certificates.completedIn} {activeCert.year}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={activeCert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300 transition"
            >
              {t.certificates.viewOriginalPdf}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}