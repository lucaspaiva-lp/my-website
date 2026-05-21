export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "FiveLib",
    description: "Plataforma centralizada para documentação técnica e recursos acadêmicos voltada para estudantes de programação.",
    tags: ["Next.js", "TypeScript", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/lucaspaiva-lp/fivelib",
  },
  {
    id: "2",
    title: "Big Data - INMET & CAGED Analysis",
    description: "Análise de correlação utilizando PySpark entre dados de precipitação do INMET e saldos de emprego do CAGED no Rio Grande do Sul.",
    tags: ["Python", "PySpark", "Big Data", "Data Analysis"],
  },
  {
    id: "3",
    title: "Homelab Infrastructure",
    description: "Ambiente de servidor automatizado e auto-hospedado utilizando Docker, Samba, Plex e túneis de rede via ZeroTier.",
    tags: ["Docker", "Linux", "Samba", "ZeroTier", "Infrastructure"],
  }
];