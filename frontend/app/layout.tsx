import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./data/LanguageContext";
import { ThemeProvider } from "./data/ThemeContext";
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
        url: "https://lucaspaiva-lp.vercel.app/favicon-icon.png",
        width: 512,
        height: 512,
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
    images: ["https://lucaspaiva-lp.vercel.app/favicon-icon.png"],
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('preferred-theme')==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F3EF] dark:bg-black text-[#1E1C1D] dark:text-zinc-100 transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
