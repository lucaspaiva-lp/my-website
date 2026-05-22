import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./data/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Paiva | Software Engineer",
  description: "Software Engineer focused on end-to-end architecture, scalable backend systems, and data-driven solutions.",
  keywords: ["Backend", "Python", "FastAPI", "Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Lucas Paiva" }],
  openGraph: {
    title: "Lucas Paiva | Software Engineer",
    description: "Software Engineer focused on end-to-end architecture, scalable backend systems, and data-driven solutions.",
    url: "https://lucaspaiva-lp.vercel.app/",
    siteName: "Lucas Paiva Portfolio",
    images: [
      {
        url: "/frontend/public/favicon-icon.png",
        width: 800,
        height: 800,
        alt: "Lucas Paiva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Paiva | Software Engineer",
    description: "Software Engineer focused on end-to-end architecture, scalable backend systems, and data-driven solutions.",
    images: ["/frontend/public/favicon-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}