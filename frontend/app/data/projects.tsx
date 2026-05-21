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
    description: "Centralized platform for technical academic documentation, featuring user libraries, private link management, and custom support ticket infrastructure.",
    tags: ["FastAPI", "Pydantic", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/fivelibx/fivelib",
    deployUrl: "https://fivelib.vercel.app"
  },
  {
    id: "rs-impact-analysis",
    title: "RS Impact Analysis",
    description: "Data engineering pipeline analyzing the correlation between precipitation data (INMET) and employment balances (CAGED) during climate events in Rio Grande do Sul.",
    tags: ["Python", "PySpark", "Pandas", "Matplotlib", "Big Data"],
    githubUrl: "https://github.com/lucaspaiva-lp/rs-impact"
  },
  {
    id: "backend-clinic",
    title: "Backend Clinic API",
    description: "Corporate API featuring layered architecture, strict business rule validation, technical dossiers, and comprehensive ER/architecture diagrams.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    githubUrl: "https://github.com/lucaspaiva-lp/backend-clinica-api"
  },
  {
    id: "rpg-textual",
    title: "RPG Textual",
    description: "Console-based turn-based RPG game focusing on core OOP concepts, encapsulation, and modular design.",
    tags: ["Python", "JSON", "CLI", "OOP"],
    githubUrl: "https://github.com/lucaspaiva-lp/rpg-textual"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Full-stack e-commerce engine with JWT authentication, asynchronous persistence management, and integrated email services.",
    tags: ["FastAPI", "Tortoise ORM", "JWT", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/RodrigoDevBack/e-commerce"
  }
];