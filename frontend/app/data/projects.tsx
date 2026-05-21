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
    id: "fivelib",
    title: "FiveLib",
    description: "Plataforma centralizada para documentação técnica acadêmica, gerenciamento de links privados e infraestrutura de suporte a tickets.",
    tags: ["FastAPI", "Pydantic", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/fivelibx/fivelib",
    deployUrl: "https://fivelib.vercel.app"
  },
  {
    id: "backend-clinic",
    title: "Backend Clinic API",
    description: "API corporativa desenvolvida com arquitetura em camadas, validação rígida de regras de negócio, dossiê técnico e diagramas de ER.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    githubUrl: "https://github.com/lucaspaiva-lp/backend-clinica-api"
  },
  {
    id: "big-data-analysis",
    title: "INMET & CAGED Analysis",
    description: "Análise quantitativa de correlação via PySpark entre índices de precipitação meteorológica e saldo de empregos formais no RS.",
    tags: ["Python", "PySpark", "Big Data", "Data Analysis"],
    githubUrl: "https://github.com/lucaspaiva-lp"
  },
  {
    id: "homelab-infra",
    title: "Homelab Infrastructure",
    description: "Orquestração e automação de servidor auto-hospedado (Samba, Plex) integrado logicamente via túneis privados ZeroTier.",
    tags: ["Docker", "Linux", "Samba", "ZeroTier", "Infrastructure"]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Engine",
    description: "Engine completa de e-commerce com autenticação via JWT, gerenciamento de persistência assíncrona e serviços integrados de e-mail.",
    tags: ["FastAPI", "Tortoise ORM", "JWT", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/RodrigoDevBack/e-commerce"
  },
  {
    id: "rpg-textual",
    title: "RPG Textual CLI",
    description: "Jogo de simulação baseado em console focado estritamente na aplicação prática de pilares de POO e design modular.",
    tags: ["Python", "JSON", "CLI", "OOP"],
    githubUrl: "https://github.com/lucaspaiva-lp/rpg-textual"
  }
];