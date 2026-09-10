/**
 * Configuration centralisée du site Christall Portfolio.
 * Contient les informations de contact vérifiées et les métadonnées globales.
 */

export const siteConfig = {
  name: "ChristΛll.",
  title: "ChristΛll. — Designer UI/UX & Identité Visuelle",
  description:
    "Portfolio officiel de ChristΛll. Designer UI/UX et Brand Designer passionné par l'impact visuel et l'expérience utilisateur.",
  url: "https://christall.design",
  author: "Honneur Cossou (ChristΛll)",
  email: "cossouchristall@gmail.com",
  phone: "+229 94 34 80 96",
  location: "Cotonou, Bénin",
  whatsappUrl:
    "https://wa.me/22994348096?text=Bonjour%20Christ%CE%9Bll.%20J%27ai%20besoin%20de%20vos%20services.",
  socials: {
    linkedin: "https://www.linkedin.com/in/honneur-cossou-344749301",
    facebook: "https://www.facebook.com/chris.cossou",
    instagram:
      "https://www.instagram.com/cossouhonneur?fbclid=IwY2xjawUDW85wZG9mBWV4dG4DYWVtAjEwAGJyaWQRMFh6MzhCYmtGdWQyYm9VMVFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeQ3bYMVsfQ_fo-QuZrcIe3C74hUaIgPV-7jxnbSMhZd1Iba4oplS6Bfz3zVY_aem_iar4X_1kmKAffk-JvgzKWQ",
  },
  services: [
    "UI/UX Design",
    "Identité visuelle",
    "Design graphique",
    "Supports digitaux",
    "Autre / Projet Complet",
  ] as const,
  budgets: [
    "30€ - 500€",       // ~20 000 - 330 000 XOF
    "500€ - 1 000€",    // ~330 000 - 650 000 XOF
    "1 000€ - 2 000€",  // ~650 000 - 1 300 000 XOF
    "2 000€ - 3 000€",  // ~1 300 000 - 2 000 000 XOF
    "3 000€ - 5 000€",  // ~2 000 000 - 3 300 000 XOF
    "5 000€ et +",      // ~3 300 000 XOF et +
  ] as const,
  contractTypes: [
    "CDI (Temps plein)",
    "CDD / Mission temporaire",
    "Freelance / Régie long terme",
    "Temps partiel / Consulting",
    "Autre opportunité",
  ] as const,
  salaryRanges: [
    "Taux Journalier Moyen (TJM)",
    "30 000€ - 45 000€ / an",
    "45 000€ - 65 000€ / an",
    "65 000€ - 85 000€+ / an",
    "À convenir selon profil",
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
