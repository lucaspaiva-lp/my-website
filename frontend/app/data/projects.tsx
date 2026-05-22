export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export const getProjectsData = (t: any): Project[] => [
  {
    id: "fivelib",
    title: "FiveLib",
    description: t.projects["fivelib"],
    tags: ["FastAPI", "Pydantic", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/fivelibx/fivelib",
    deployUrl: "https://fivelib.vercel.app"
  },
  {
    id: "rs-impact-analysis",
    title: "RS Impact Analysis",
    description: t.projects["rs-impact-analysis"],
    tags: ["Python", "PySpark", "Pandas", "Matplotlib", "Big Data"],
    githubUrl: "https://github.com/lucaspaiva-lp/rs-impact"
  },
  {
    id: "backend-clinic",
    title: "Backend Clinic API",
    description: t.projects["backend-clinic"],
    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    githubUrl: "https://github.com/lucaspaiva-lp/backend-clinica-api"
  },
  {
    id: "rpg-textual",
    title: "RPG Textual",
    description: t.projects["rpg-textual"],
    tags: ["Python", "JSON", "CLI", "OOP"],
    githubUrl: "https://github.com/lucaspaiva-lp/rpg-textual"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: t.projects["ecommerce"],
    tags: ["FastAPI", "Tortoise ORM", "JWT", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/RodrigoDevBack/e-commerce"
  }
];