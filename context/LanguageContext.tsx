"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en";

export interface Translations {
  navbar: {
    about: string;
    expertise: string;
    portfolio: string;
    methodology: string;
    partnership: string;
    startProject: string;
  };
  hero: {
    badgeUiUx: string;
    badgeBranding: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subtitle: string;
    viewProjects: string;
    discussProject: string;
    tagline: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    statYears: string;
    statProjects: string;
    statSatisfaction: string;
    downloadCv: string;
  };
  expertise: {
    tag: string;
    title: string;
    subtitle: string;
    cardAction: string;
    services: Array<{
      num: string;
      title: string;
      desc: string;
      result: string;
    }>;
  };
  portfolio: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterUiUx: string;
    filterBranding: string;
    filterSupports: string;
    viewDetails: string;
    modalDeliverables: string;
    modalContext: string;
    modalProblem: string;
    modalSolution: string;
    modalResult: string;
    modalDiscuss: string;
    modalClose: string;
  };
  methodology: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  contactCTA: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    button: string;
  };
  contactModal: {
    titleProject: string;
    titleHire: string;
    tabProject: string;
    tabHire: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelPhone: string;
    placeholderPhone: string;
    labelService: string;
    labelBudget: string;
    labelCompany: string;
    placeholderCompany: string;
    labelContract: string;
    labelSalary: string;
    labelMessageProject: string;
    placeholderMessageProject: string;
    labelMessageHire: string;
    placeholderMessageHire: string;
    submitText: string;
    submittingText: string;
    successTitle: string;
    successDesc: string;
    whatsappPrompt: string;
    whatsappSub: string;
    whatsappBtn: string;
    closeBtn: string;
  };
  footer: {
    tagline: string;
    rights: string;
    backToTop: string;
  };
}

const translations: Record<Language, Translations> = {
  fr: {
    navbar: {
      about: "À propos",
      expertise: "Expertise",
      portfolio: "Portfolio",
      methodology: "Méthodologie",
      partnership: "Partenariat",
      startProject: "Démarrer un projet",
    },
    hero: {
      badgeUiUx: "UI/UX Designer",
      badgeBranding: "Branding & Visual",
      headlinePart1: "Je transforme les idées en",
      headlineHighlight: "identités",
      headlinePart2: "qui marquent.",
      subtitle: "Designer UI/UX passionné par l'impact visuel et l'expérience utilisateur.",
      viewProjects: "VOIR MES PROJETS",
      discussProject: "PARLONS DE VOTRE PROJET",
      tagline: "Basé en Afrique · Disponible à l'international",
    },
    about: {
      tag: "À PROPOS",
      title: "Designer passionné, orienté résultats",
      subtitle: "Allier sensibilité esthétique et rigueur ergonomique pour créer des produits mémorables.",
      p1: "Je suis ChristΛll (Honneur Cossou), Designer UI/UX & Brand Designer basé à Cotonou. J'accompagne les entreprises innovantes, startups et porteurs de projets dans la création d'expériences numériques percutantes et de chartes d'identité mémorables.",
      p2: "Mon travail repose sur une approche centrée sur l'humain : comprendre vos usagers, simplifier la complexité et livrer des designs modernes prêts pour le développement.",
      statYears: "Années d'expérience",
      statProjects: "Projets réalisés",
      statSatisfaction: "Clients satisfaits",
      downloadCv: "Télécharger mon CV",
    },
    expertise: {
      tag: "EXPERTISE",
      title: "Domaines d'intervention",
      subtitle: "Une offre de design holistique pour donner à votre projet la structure et l'éclat qu'il mérite.",
      cardAction: "Lancer ce projet",
      services: [
        {
          num: "01",
          title: "UI/UX Design",
          desc: "Interfaces intuitives et expériences fluides, fondées sur la recherche utilisateur et le prototypage rigoureux.",
          result: "RÉSULTAT: PRODUITS UTILISABLES, CONVERSION AMÉLIORÉE",
        },
        {
          num: "02",
          title: "Identité visuelle",
          desc: "Logotypes singuliers, palettes chromatiques raffinées et univers de marque durables.",
          result: "RÉSULTAT: RECONNAISSANCE IMMÉDIATE, COHÉRENCE PARTOUT",
        },
        {
          num: "03",
          title: "Design graphique",
          desc: "Direction artistique d'imprimés, affiches, mises en page éditoriales et supports physiques d'exception.",
          result: "RÉSULTAT: PRÉSENCE FORTE, QUALITÉ D'IMPRESSION",
        },
        {
          num: "04",
          title: "Supports digitaux",
          desc: "Déclinaison de votre univers sur le web, bannières haut de gamme et contenus sociaux engageants.",
          result: "RÉSULTAT: COHÉRENCE MULTI-CANAL, ENGAGEMENT ACCRU",
        },
      ],
    },
    portfolio: {
      tag: "TRAVAUX SÉLECTIONNÉS",
      title: "Portfolio",
      subtitle: "Une sélection de projets illustrant ma démarche : rigueur, esthétique et impact.",
      filterAll: "Tous les projets",
      filterUiUx: "UI/UX Design",
      filterBranding: "Identité Visuelle",
      filterSupports: "Supports Digitaux",
      viewDetails: "Explorer l'étude de cas",
      modalDeliverables: "Livrables clés",
      modalContext: "Contexte du projet",
      modalProblem: "Problématique",
      modalSolution: "Solution apportée",
      modalResult: "Résultats & Impact",
      modalDiscuss: "Discuter d'un projet similaire",
      modalClose: "Fermer",
    },
    methodology: {
      tag: "MÉTHODOLOGIE",
      title: "Comment nous travaillons ensemble",
      subtitle: "Un processus structuré et itératif, garantissant clarté et sérénité de l'idée au déploiement.",
      steps: [
        {
          num: "01",
          title: "Immersion & Cadrage",
          desc: "Analyse approfondie de votre écosystème, de vos cibles, de vos objectifs stratégiques et des contraintes techniques.",
        },
        {
          num: "02",
          title: "Conception & Architecture",
          desc: "Élaboration des parcours utilisateurs, wireframes, arborescence et exploration des premiers univers graphiques.",
        },
        {
          num: "03",
          title: "Design Haute-Fidélité",
          desc: "Création des maquettes finales, micro-interactions, animations et prototypes interactifs prêts à tester.",
        },
        {
          num: "04",
          title: "Livraison & Suivi",
          desc: "Transmission de design systems complets, assets optimisés et accompagnement des équipes de développement.",
        },
      ],
    },
    contactCTA: {
      tag: "PRÊT À COLLABORER ?",
      titlePart1: "Une idée en tête ?",
      titleHighlight: "Faisons-la briller.",
      titlePart2: "",
      subtitle: "Donnons vie à votre identité visuelle et redéfinissons ensemble l'expérience digitale de vos utilisateurs.",
      button: "DÉMARRER UN PROJET",
    },
    contactModal: {
      titleProject: "Démarrer un projet",
      titleHire: "Proposition d'embauche",
      tabProject: "Nouveau Projet",
      tabHire: "M'engager / Embauche",
      labelName: "Votre Nom *",
      placeholderName: "Jean Dupont",
      labelEmail: "Adresse Email *",
      placeholderEmail: "vous@entreprise.com",
      labelPhone: "Numéro de Téléphone *",
      placeholderPhone: "+229 94 XX XX XX",
      labelService: "Prestation visée *",
      labelBudget: "Budget Estimé *",
      labelCompany: "Entreprise / Organisation *",
      placeholderCompany: "Nom de votre société ou agence",
      labelContract: "Type de Contrat *",
      labelSalary: "Rémunération / Budget *",
      labelMessageProject: "Détails du projet *",
      placeholderMessageProject: "Décrivez brièvement vos objectifs, vos délais et vos besoins...",
      labelMessageHire: "Description du poste & opportunité *",
      placeholderMessageHire: "Présentez le rôle proposé, la mission, la date de démarrage souhaitée...",
      submitText: "Envoyer ma demande",
      submittingText: "Transmission sécurisée...",
      successTitle: "Demande envoyée avec succès !",
      successDesc: "Votre message a bien été transmis. Une réponse vous sera apportée sous 24h ouvrées.",
      whatsappPrompt: "📲 Voulez-vous également m'alerter directement sur WhatsApp ?",
      whatsappSub: "Votre message complet est déjà rédigé et prêt à être envoyé en un clic.",
      whatsappBtn: "Envoyer aussi sur WhatsApp",
      closeBtn: "Fermer",
    },
    footer: {
      tagline: "Designer UI/UX & Brand Designer transformant les idées en identités marquantes.",
      rights: "Tous droits réservés.",
      backToTop: "Retour en haut",
    },
  },
  en: {
    navbar: {
      about: "About",
      expertise: "Services",
      portfolio: "Portfolio",
      methodology: "Methodology",
      partnership: "Let's Talk",
      startProject: "Start a project",
    },
    hero: {
      badgeUiUx: "UI/UX Designer",
      badgeBranding: "Branding & Visual",
      headlinePart1: "I turn ambitious ideas into",
      headlineHighlight: "identities",
      headlinePart2: "that leave a mark.",
      subtitle: "UI/UX Designer passionate about visual impact and human-centered user experiences.",
      viewProjects: "VIEW MY PROJECTS",
      discussProject: "LET'S TALK ABOUT YOUR PROJECT",
      tagline: "Based in Africa · Available Worldwide",
    },
    about: {
      tag: "ABOUT ME",
      title: "Passionate designer, results-driven",
      subtitle: "Blending aesthetic precision and ergonomic rigor to build memorable digital products.",
      p1: "I am ChristΛll (Honneur Cossou), a UI/UX & Brand Designer based in Cotonou. I collaborate with innovative companies, startups, and product leaders to create compelling digital interfaces and iconic brand identities.",
      p2: "My approach is deeply user-centered: understanding your audience, breaking down complexity, and delivering pixel-perfect designs ready for implementation.",
      statYears: "Years of Experience",
      statProjects: "Completed Projects",
      statSatisfaction: "Happy Clients",
      downloadCv: "Download Resume",
    },
    expertise: {
      tag: "EXPERTISE",
      title: "Areas of Expertise",
      subtitle: "A holistic design offering tailored to give your project the structure and brilliance it deserves.",
      cardAction: "Start this project",
      services: [
        {
          num: "01",
          title: "UI/UX Design",
          desc: "Intuitive interfaces and seamless user flows driven by user research and rigorous prototyping.",
          result: "RESULT: USABLE PRODUCTS, INCREASED CONVERSION",
        },
        {
          num: "02",
          title: "Visual Identity",
          desc: "Distinctive logotypes, refined color palettes, and durable, scalable brand guidelines.",
          result: "RESULT: INSTANT RECOGNITION, COHESION EVERYWHERE",
        },
        {
          num: "03",
          title: "Graphic Design",
          desc: "Art direction for print, high-impact posters, editorial layouts, and premium physical collateral.",
          result: "RESULT: STRONG PRESENCE, HIGH PRINT QUALITY",
        },
        {
          num: "04",
          title: "Digital Assets",
          desc: "Translating your brand across web platforms, high-converting digital banners, and engaging social content.",
          result: "RESULT: MULTI-CHANNEL COHESION, HIGHER ENGAGEMENT",
        },
      ],
    },
    portfolio: {
      tag: "SELECTED WORKS",
      title: "Portfolio",
      subtitle: "A curated selection of projects demonstrating my craft: rigor, aesthetics, and lasting impact.",
      filterAll: "All Projects",
      filterUiUx: "UI/UX Design",
      filterBranding: "Brand Identity",
      filterSupports: "Digital Assets",
      viewDetails: "Explore Case Study",
      modalDeliverables: "Key Deliverables",
      modalContext: "Project Context",
      modalProblem: "Problem Statement",
      modalSolution: "Solution Provided",
      modalResult: "Results & Impact",
      modalDiscuss: "Discuss a Similar Project",
      modalClose: "Close",
    },
    methodology: {
      tag: "METHODOLOGY",
      title: "How We Work Together",
      subtitle: "A structured, iterative workflow ensuring clarity and confidence from discovery to handoff.",
      steps: [
        {
          num: "01",
          title: "Discovery & Strategy",
          desc: "In-depth research into your ecosystem, target users, business goals, and technical constraints.",
        },
        {
          num: "02",
          title: "Architecture & Wireframing",
          desc: "Mapping out user flows, information architecture, wireframes, and initial visual directions.",
        },
        {
          num: "03",
          title: "High-Fidelity Design",
          desc: "Crafting polished UI components, micro-interactions, responsive screens, and interactive prototypes.",
        },
        {
          num: "04",
          title: "Handoff & Support",
          desc: "Delivering complete design systems, developer-ready assets, and ongoing implementation support.",
        },
      ],
    },
    contactCTA: {
      tag: "READY TO COLLABORATE?",
      titlePart1: "Have an idea in mind?",
      titleHighlight: "Let's make it shine.",
      titlePart2: "",
      subtitle: "Let's bring your visual identity to life and redefine your digital user experience together.",
      button: "START A PROJECT",
    },
    contactModal: {
      titleProject: "Start a Project",
      titleHire: "Job Opportunity / Hiring",
      tabProject: "New Project",
      tabHire: "Hire Me / Role",
      labelName: "Your Name *",
      placeholderName: "John Doe",
      labelEmail: "Email Address *",
      placeholderEmail: "you@company.com",
      labelPhone: "Phone Number *",
      placeholderPhone: "+1 (555) 000-0000",
      labelService: "Target Service *",
      labelBudget: "Estimated Budget *",
      labelCompany: "Company / Organization *",
      placeholderCompany: "Your agency or company name",
      labelContract: "Contract Type *",
      labelSalary: "Compensation / Budget *",
      labelMessageProject: "Project Details *",
      placeholderMessageProject: "Briefly describe your objectives, timeline, and key requirements...",
      labelMessageHire: "Job Description & Role *",
      placeholderMessageHire: "Describe the role, expected missions, start date, and expectations...",
      submitText: "Send Request",
      submittingText: "Sending securely...",
      successTitle: "Request sent successfully!",
      successDesc: "Your message has been received. I will get back to you within 24 business hours.",
      whatsappPrompt: "📲 Would you also like to reach me directly on WhatsApp?",
      whatsappSub: "Your message is fully drafted and ready to send in one tap.",
      whatsappBtn: "Send via WhatsApp",
      closeBtn: "Close",
    },
    footer: {
      tagline: "UI/UX & Brand Designer transforming ideas into identities that leave a mark.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("christall_lang") as Language;
      if (savedLang === "fr" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("christall_lang", lang);
    } catch {
      // Ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
