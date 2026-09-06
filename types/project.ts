/**
 * Définition stricte des types de données pour les projets du portfolio.
 * Conçu pour être réutilisable côté client et côté serveur / CMS.
 */

export type ProjectCategoryTab = "ui-ux" | "branding" | "supports";

export interface ProjectCaseStudy {
  context: string;
  problem: string;
  objective: string;
  process: string;
  solution: string;
  result: string;
}

export interface Project extends ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  categoryTab: ProjectCategoryTab;
  year: string;
  framework?: string; // Ex: "Projet de mémoire", "AFG Hackathon", "Stage professionnel", "Startup", etc.
  image: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  deliverables: string[];
}
