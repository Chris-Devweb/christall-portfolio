import { Project } from "@/types/project";

export const projectsData: Project[] = [
  // ==========================================
  // --- UI/UX DESIGN (2 PROJETS PHARES) ---
  // ==========================================
  {
    id: "trootroo",
    title: "Trootroo",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2024",
    framework: "Application de transport au Bénin",
    image: "/images/Trootroo.png",
    shortDesc:
      "Conception de l'expérience utilisateur et des interfaces d'une application dédiée à la mobilité urbaine au Bénin.",
    fullDesc:
      "Trootroo est un projet de conception d'une application dédiée au transport au Bénin. Le travail porte sur la création d'une expérience utilisateur simple et accessible, avec une attention particulière portée aux parcours liés à la mobilité. L'objectif était de transformer un besoin quotidien en une expérience digitale claire, intuitive et adaptée aux utilisateurs locaux.",
    client: "Application de transport (Bénin)",
    deliverables: [
      "Recherche utilisateur & cartographie des trajets",
      "Architecture de l'information & user flows",
      "Design d'interfaces mobiles (UI)",
      "Prototypage interactif & micro-interactions",
    ],
    context:
      "Projet axé sur les problématiques de transport et de déplacement quotidien au Bénin.",
    problem:
      "Complexité d'accès aux itinéraires et aux options de transport local pour les usagers au quotidien.",
    objective:
      "Transformer un besoin quotidien en une expérience digitale claire, intuitive et adaptée aux utilisateurs locaux.",
    process:
      "Immersion sur les habitudes de transport locales, wireframing rapide, itérations graphiques et tests de lisibilité des parcours.",
    solution:
      "Interface épurée et ergonomique, accessible d'une main avec un guidage visuel immédiat pour faciliter la mobilité.",
    result:
      "Prototypes UI/UX finalisés et validés pour le parcours usager (en attente de déploiement en production).",
  },
  {
    id: "mairie-cotonou",
    title: "Refonte du site de la Mairie de Cotonou",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2024",
    framework: "Projet académique — Mémoire",
    image: "/images/Mairie de Cotonou.png",
    shortDesc:
      "Refonte UI/UX du portail web de la Mairie de Cotonou pour moderniser l'accès aux démarches et informations citoyennes.",
    fullDesc:
      "Ce projet consiste en une refonte UI/UX du site web de la Mairie de Cotonou. L'objectif est d'améliorer l'expérience utilisateur et la qualité de l'interface afin de rendre l'accès aux informations et services plus clair et plus intuitif. Il s'agit d'un projet académique réalisé dans le cadre de mon mémoire (recherche et conception UI/UX, sans développement).",
    client: "Mairie de Cotonou (Cadre académique / Mémoire)",
    deliverables: [
      "Audit ergonomique du site municipal existant",
      "Recherche utilisateur & cartographie des besoins citoyens",
      "Restructuration de l'architecture de l'information",
      "Maquettes UI haute-fidélité desktop & mobile",
      "Dossier de mémoire & recommandations ergonomiques",
    ],
    context:
      "Refonte du site web de la Mairie de Cotonou dans le cadre de mon mémoire de fin d'études.",
    problem:
      "Navigation dense, informations municipales difficiles à trouver et interface peu adaptée aux usages mobiles modernes.",
    objective:
      "Améliorer l'interface et l'expérience utilisateur pour rendre l'accès aux informations et services plus clair et intuitif.",
    process:
      "Évaluation heuristique, restructuration de l'arborescence, conception de wireframes puis élaboration des maquettes finales sous Figma.",
    solution:
      "Une interface municipale modernisée, valorisant les services clés, les actualités et un accès direct aux démarches administratives.",
    result:
      "Projet de conception UI/UX académique validé avec succès pour le mémoire.",
  },

  /*
  // --- AUTRES PROJETS UI/UX (EN RÉSERVE) ---
  {
    id: "gbami",
    title: "Gbami",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2024",
    framework: "AFG Hackathon",
    image: "/images/Gbami.png",
    shortDesc:
      "Interface et expérience utilisateur conçues sous forte contrainte de temps lors de l'AFG Hackathon.",
    fullDesc:
      "Gbami est un projet réalisé dans le cadre de l'AFG Hackathon. Le travail a principalement porté sur la conception de l'interface et de l'expérience utilisateur du produit. Le projet constitue une expérience de conception dans un contexte de hackathon, avec la nécessité de réfléchir rapidement à une solution cohérente, fonctionnelle et visuellement claire.",
    client: "AFG Hackathon",
    deliverables: [
      "Idéation produit & cadrage express",
      "Wireframes UX basse et haute fidélité",
      "Maquettes UI finales sous contrainte de temps",
      "Pitch deck & présentation du prototype interactif",
    ],
    context:
      "Compétition d'innovation AFG Hackathon nécessitant une réponse agile et percutante.",
    problem:
      "Nécessité de concevoir une solution fonctionnelle, compréhensible et convaincante dans un temps très restreint.",
    objective:
      "Livrer une expérience utilisateur limpide et un design visuel de haute volée sous pression de temps.",
    process:
      "Définition prioritaire de la proposition de valeur, wireframing direct et création d'un mini design system pour accélérer la production UI.",
    solution:
      "Une interface fluide, directe et valorisant immédiatement les bénéfices clés pour l'utilisateur final.",
    result:
      "Prototype interactif présenté devant le jury du hackathon.",
  },
  {
    id: "amani",
    title: "Amani",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2024",
    framework: "Application autour de la psychologie",
    image: "/images/Amani.png",
    shortDesc:
      "Conception des écrans d'onboarding et d'un parcours d'accueil rassurant pour une application de psychologie.",
    fullDesc:
      "Amani est un projet digital autour de la psychologie, pour lequel j'ai travaillé notamment sur les écrans d'onboarding. L'enjeu était de créer une première expérience rassurante, compréhensible et suffisamment fluide pour accompagner l'utilisateur dès ses premiers pas dans l'application.",
    client: "Projet digital Amani",
    deliverables: [
      "Parcours d'accueil & Onboarding psychologique",
      "Design d'écrans mobiles axés sur l'empathie",
      "Charte graphique douce et rassurante",
      "Micro-textes UX (UX Writing) bienveillants",
    ],
    context:
      "Application digitale dédiée à la psychologie, au bien-être mental et à l'accompagnement émotionnel.",
    problem:
      "L'appréhension et la sensibilité des utilisateurs face aux thématiques psychologiques lors de la première utilisation.",
    objective:
      "Rendre une expérience potentiellement sensible plus claire, accessible et rassurante dès les premiers pas.",
    process:
      "Recherche sur les interfaces d'écoute et de santé mentale, sélection d'une palette apaisante et hiérarchisation graduelle de l'information.",
    solution:
      "Parcours d'onboarding en douceur évitant toute friction cognitive, avec des visuels réconfortants et un guidage étape par étape.",
    result:
      "Écrans d'onboarding finalisés créant un climat de confiance dès l'ouverture.",
  },
  {
    id: "polygone",
    title: "Polygone",
    category: "Projet Digital & Identité",
    categoryTab: "ui-ux",
    year: "2023",
    framework: "Services fiscaux / e-MECeF",
    image: "/images/Polygone.png",
    shortDesc:
      "Projet numérique lié aux services fiscaux au Bénin, combinant développement Django sur l'API e-MECeF et identité visuelle.",
    fullDesc:
      "Polygone est un projet numérique lié aux services fiscaux au Bénin et à l'écosystème e-MECeF. Le projet combine une réflexion produit avec une dimension technique autour de l'intégration de l'API e-MECeF. Il représente une expérience à la croisée du design, du produit digital et des problématiques liées à la digitalisation des services.",
    client: "Écosystème fiscal e-MECeF (Bénin)",
    deliverables: [
      "Architecture produit & flux e-MECeF",
      "Développement du connecteur Django avec l'API fiscale",
      "Identité visuelle, logo & charte Polygone",
      "Interfaces de suivi et de gestion des factures",
    ],
    context:
      "Projet lié à l'écosystème e-MECeF et aux services fiscaux au Bénin.",
    problem:
      "Complexité technique perçue lors de la mise en conformité et de l'intégration de la facturation certifiée.",
    objective:
      "Mettre en place un projet Django couplé à l'API e-MECeF tout en concevant une identité visuelle claire et professionnelle.",
    process:
      "Analyse de l'API e-MECeF, développement du socle technique Django, conception du logo et modélisation des interfaces associées.",
    solution:
      "Une approche équilibrée alliant fiabilité technique backend et simplicité visuelle de la marque.",
    result:
      "Socle de développement Django opérationnel avec identité visuelle finalisée (sans résultats de commercialisation inventés).",
  },
  {
    id: "chantier",
    title: "Chantier",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2023",
    framework: "Stage — Application de gestion BTP",
    image: "/images/Chantier.png",
    shortDesc:
      "Plateforme web et application mobile de gestion de projets et de clientèle pour le secteur du BTP.",
    fullDesc:
      "Chantier est un projet réalisé en stage autour de la gestion des projets dans le secteur du BTP. La solution est pensée comme un produit destiné à une entreprise, avec une plateforme web et une application permettant notamment de gérer sa clientèle et ses projets. Le travail s'inscrit dans une réflexion produit plus large : digitaliser et centraliser la gestion d'une activité BTP.",
    client: "Entreprise BTP (Projet de stage)",
    deliverables: [
      "Cartographie des parcours clients et chantiers",
      "Design de l'interface web (gestion & administration)",
      "Design de l'application mobile (suivi de terrain)",
      "Système de composants visuels adaptés au secteur",
    ],
    context:
      "Projet réalisé en stage au sein d'une entreprise du BTP pour moderniser ses outils de suivi.",
    problem:
      "Dispersion des données de chantiers, retards de communication entre les équipes de terrain et le bureau.",
    objective:
      "Digitaliser et centraliser la gestion d'une activité BTP via une plateforme web et une application connectée.",
    process:
      "Analyse des tâches quotidiennes des conducteurs de travaux, conception de dashboards modulaires et prototypage rapide.",
    solution:
      "Un outil centralisé offrant une vue d'ensemble sur les projets en cours, le statut des chantiers et le répertoire client.",
    result:
      "Maquettes et prototypes complets validés en interne lors du stage.",
  },
  {
    id: "businessplan",
    title: "BusinessPlan",
    category: "Produit Digital",
    categoryTab: "ui-ux",
    year: "2023",
    framework: "Stage professionnel",
    image: "/images/Business Plan.png",
    shortDesc:
      "Plateforme web guidée facilitant la création de business plans, CV et documents professionnels normés.",
    fullDesc:
      "BusinessPlan est un projet réalisé en stage autour de la création de documents professionnels. La plateforme permet notamment de concevoir des business plans, des CV et différents documents utiles aux utilisateurs. Le projet vise à rendre la création de ces documents plus accessible et structurée grâce à une expérience entièrement digitale.",
    client: "Plateforme digitale (Projet de stage)",
    deliverables: [
      "Parcours de création modulaire de documents",
      "Interface d'édition et de prévisualisation en direct",
      "Composants de formulaires et de saisie assistée",
      "Design responsive pour ordinateur et tablette",
    ],
    context:
      "Projet développé en stage autour de la simplification de documents professionnels pour porteurs de projets.",
    problem:
      "La complexité de mise en forme et de structuration d'un business plan pour les créateurs sans accompagnement.",
    objective:
      "Rendre la création de ces documents plus accessible et structurée grâce à une expérience entièrement digitale.",
    process:
      "Découpage en étapes séquentielles, design de templates clairs et tests de simplicité des champs de saisie.",
    solution:
      "Une plateforme intuitive guidant l'utilisateur de section en section avec prévisualisation immédiate du rendu.",
    result:
      "Conception UX/UI achevée et transmise pour intégration produit.",
  },
  {
    id: "healthtrack",
    title: "HealthTrack",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2023",
    framework: "Hackathon international — Santé",
    image: "/images/HealthTrack.png",
    shortDesc:
      "Application web hospitalière pour la gestion accélérée, centralisée et numérique des dossiers patients.",
    fullDesc:
      "HealthTrack est une application web destinée aux établissements hospitaliers. Elle vise à faciliter et accélérer la gestion digitale des dossiers des patients. Le projet répond à une problématique concrète de gestion de l'information médicale en proposant une approche plus rapide, centralisée et numérique du suivi des dossiers.",
    client: "Hackathon international (Santé)",
    deliverables: [
      "Tableau de bord hospitalier pour personnel soignant",
      "Module de recherche et consultation rapide de dossier",
      "Fiche patient synthétique et ergonomique",
      "Prototype haute fidélité pour démonstration",
    ],
    context:
      "Projet conçu dans le cadre d'un hackathon international sur les technologies de la santé.",
    problem:
      "La lenteur de transmission des informations médicales et les pertes de temps dans la recherche de dossiers papier.",
    objective:
      "Proposer une approche plus rapide, centralisée et numérique du suivi des dossiers pour les établissements hospitaliers.",
    process:
      "Priorisation de l'accès aux antécédents et allergies, réduction du nombre de clics pour les urgences, design épuré et rassurant.",
    solution:
      "Une interface clinique à haute lisibilité permettant une consultation instantanée et une saisie allégée pour les praticiens.",
    result:
      "Prototype complet présenté avec succès au hackathon.",
  },
  {
    id: "kidney-savers",
    title: "Kidney Savers",
    category: "UI/UX Design",
    categoryTab: "ui-ux",
    year: "2023",
    framework: "Hackathon — Santé",
    image: "/images/Kidney Savers.png",
    shortDesc:
      "Application mobile de sensibilisation à la santé rénale par l'engagement ludique et les bonnes habitudes.",
    fullDesc:
      "Kidney Savers est une application conçue pour sensibiliser les utilisateurs à la santé rénale. L'objectif était de transformer un sujet médical en une expérience plus ludique et engageante, afin d'encourager les utilisateurs à adopter de meilleures habitudes pour prendre soin de leurs reins.",
    client: "Hackathon Santé",
    deliverables: [
      "Expérience mobile gamifiée & suivi des habitudes saines",
      "Design d'interfaces mobiles attrayantes",
      "Illustrations et éléments visuels didactiques",
      "Prototype interactif de sensibilisation",
    ],
    context:
      "Hackathon thématique sur la prévention et la santé préventive.",
    problem:
      "La santé rénale est un sujet souvent perçu comme abstrait, anxiogène ou peu engageant pour les jeunes adultes.",
    objective:
      "Transformer un sujet médical en une expérience plus ludique et engageante pour encourager l'adoption de meilleures habitudes.",
    process:
      "Exploration de mécaniques de gamification, sélection de tons chaleureux et conception de parcours de suivi quotidien.",
    solution:
      "Une application mobile dynamique avec rappels d'hydratation, conseils illustrés et indicateurs visuels stimulants.",
    result:
      "Projet finalisé pour la présentation du hackathon.",
  },
  */

  // ===============================================
  // --- BRAND IDENTITY (2 PROJETS PHARES) ---
  // ===============================================
  {
    id: "brandbook-phlech",
    title: "Brandbook Phlech",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Client — Entreprise tech",
    image: "/images/Brandbook phlech.png",
    shortDesc:
      "Développement de l'identité visuelle complète et formalisation dans un brandbook pour une entreprise technologique.",
    fullDesc:
      "Phlech est un projet réalisé pour une entreprise technologique. Le travail consistait à développer son identité visuelle et à formaliser celle-ci dans un brandbook. L'objectif était de construire une identité cohérente, professionnelle et suffisamment distinctive pour accompagner l'entreprise dans sa communication.",
    client: "Phlech (Entreprise tech)",
    deliverables: [
      "Logotype & déclinaisons officielles",
      "Brandbook complet de spécifications graphiques",
      "Palette de couleurs & hiérarchie typographique",
      "Règles d'usage sur supports print & digitaux",
    ],
    context:
      "Accompagnement de l'entreprise technologique Phlech pour asseoir son image de marque.",
    problem:
      "Nécessité de disposer d'un guide officiel clair pour éviter toute dispersion graphique sur les différents canaux.",
    objective:
      "Construire une identité cohérente, professionnelle et suffisamment distinctive pour accompagner l'entreprise.",
    process:
      "Recherche d'ADN visuel technologique, création du logo, tests d'équilibre formel et rédaction détaillée du brandbook.",
    solution:
      "Un brandbook élégant posant les fondations de la marque, ses interdits d'usage et ses applications clés.",
    result:
      "Document brandbook finalisé et remis au client pour son déploiement.",
  },
  {
    id: "fehou-logo",
    title: "Identité visuelle de Fehou",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Startup",
    image: "/images/Fehou logo.png",
    shortDesc:
      "Construction de l'univers graphique et des éléments d'identité de marque pour la startup Fehou.",
    fullDesc:
      "Fehou est un projet d'identité visuelle réalisé pour une startup. Le travail porte sur la construction de son univers graphique et de ses différents éléments d'identité afin de donner à la marque une présence visuelle cohérente et reconnaissable.",
    client: "Fehou (Startup)",
    deliverables: [
      "Conception du logo & symbole de marque",
      "Charte chromatique et typographique",
      "Éléments d'identité visuelle déclinables",
      "Mockups d'application sur supports variés",
    ],
    context:
      "Création de l'identité de marque pour le lancement d'une nouvelle startup.",
    problem:
      "Besoin d'émerger rapidement sur son marché avec un signe visuel immédiatement identifiable et mémorable.",
    objective:
      "Donner à la marque une présence visuelle cohérente et reconnaissable dès son entrée sur le marché.",
    process:
      "Brainstorming créatif, esquisses formelles du logo, sélection des teintes représentatives et modélisation de la charte.",
    solution:
      "Un logo moderne et équilibré associé à une identité visuelle fraîche et adaptable à tous formats.",
    result:
      "Univers visuel complet livré à la startup.",
  },

  /*
  // --- AUTRES PROJETS BRANDING (EN RÉSERVE) ---
  {
    id: "devlord-logo",
    title: "Devlord Logo",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Identité de marque tech",
    image: "/images/Devlord Logo.png",
    shortDesc:
      "Conception du logotype et de la signature graphique d'expertise technique pour Devlord.",
    fullDesc:
      "Création du logotype et du territoire visuel pour Devlord. Le concept explore la maîtrise informatique, la puissance du développement et la rigueur architecturale à travers un signe distinctif fort.",
    client: "Devlord",
    deliverables: [
      "Logotype vectoriel haute précision",
      "Déclinaisons sur fonds sombres et clairs",
      "Grille de construction géométrique",
      "Pack d'assets digitaux (avatars, bannières)",
    ],
    context:
      "Création d'une identité visuelle affirmée dans le secteur du développement logiciel.",
    problem:
      "Exprimer la compétence technique et le leadership sans tomber dans les stéréotypes visuels.",
    objective:
      "Créer un emblème fort, moderne et instantanément reconnaissable.",
    process:
      "Itérations graphiques sur grille, équilibrage des pleins et déliés, finalisation vectorielle.",
    solution:
      "Un logo précis et percutant, alliant typographie forte et symbole emblématique.",
    result:
      "Livrables de marque finalisés et prêts pour la production.",
  },
  {
    id: "tendo-logo",
    title: "Tendo Logo",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Logotype & Identité",
    image: "/images/Tendo Logo.png",
    shortDesc:
      "Design de logotype épuré et contemporain axé sur la clarté et l'impact visuel.",
    fullDesc:
      "Conception de l'identité de marque et du logotype Tendo. Recherche d'un équilibre harmonieux entre simplicité géométrique, polyvalence et lisibilité multi-supports.",
    client: "Tendo",
    deliverables: [
      "Création du logo principal & pictogramme",
      "Guide colorimétrique et typographique",
      "Fichiers vectoriels maîtres (SVG, PNG haute résolution)",
    ],
    context:
      "Développement d'une identité de marque moderne.",
    problem:
      "Assurer une lisibilité parfaite sur écrans réduits (favicon, apps) tout en conservant une vraie personnalité.",
    objective:
      "Façonner un signe minimaliste mais porteur d'une identité propre.",
    process:
      "Explorations formelles, épuration des tracés et calage des proportions.",
    solution:
      "Un logo élégant qui s'adapte sans friction aux formats digitaux et imprimés.",
    result:
      "Fichiers sources vectoriels complets validés.",
  },
  {
    id: "vaz-fc-logo",
    title: "VAZ FC Logo",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Club sportif / Football",
    image: "/images/VAZ FC Logo.png",
    shortDesc:
      "Écusson officiel et univers visuel sportif conçus pour le club de football VAZ FC.",
    fullDesc:
      "Création de l'écusson officiel du club sportif VAZ FC. Le design synthétise l'énergie collective, la passion sportive et la fierté d'équipe dans un blason dynamique prêt pour le textile et le digital.",
    client: "Club sportif VAZ FC",
    deliverables: [
      "Blason officiel du club de football",
      "Adaptations techniques pour flocage et broderie",
      "Kit d'éléments visuels pour réseaux sociaux",
    ],
    context:
      "Conception d'une identité forte pour un club de football.",
    problem:
      "Créer un écusson prestigieux et dynamique respectant les contraintes de confection textile.",
    objective:
      "Unir les membres et supporters autour d'un blason moderne et conquérant.",
    process:
      "Étude des codes héraldiques sportifs, dessin des courbes d'énergie et tests de lisibilité sur maillots.",
    solution:
      "Un blason harmonieux aux lignes franches valorisant les couleurs et l'esprit d'équipe du club.",
    result:
      "Écusson officiel adopté par le club pour ses équipements.",
  },
  {
    id: "moveup-logo",
    title: "MoveUp Logo",
    category: "Brand Identity",
    categoryTab: "branding",
    year: "2023",
    framework: "Identité de marque & Mobilité",
    image: "/images/moveup logo.png",
    shortDesc:
      "Identité de marque et logo dynamique symbolisant l'élan ascendant et la progression continue.",
    fullDesc:
      "Conception de l'identité de marque et du logotype MoveUp. Le signe traduit visuellement la montée en puissance, l'optimisme et le progrès à travers une composition dynamique.",
    client: "MoveUp",
    deliverables: [
      "Logotype principal & icône applicative",
      "Palette de couleurs énergique",
      "Kit d'éléments pour la communication digitale",
    ],
    context:
      "Création d'une identité tournée vers l'évolution et l'action positive.",
    problem:
      "Exprimer l'idée de montée et de dynamisme de manière pure et universellement lisible.",
    objective:
      "Créer une marque inspirante et percutante au premier regard.",
    process:
      "Recherche typographique dynamique, dessin de vecteurs ascendants et harmonisation.",
    solution:
      "Un logo clair avec un angle d'élévation prononcé qui communique le mouvement.",
    result:
      "Livrables de marque finalisés.",
  },
  */

  // ====================================================
  // --- SUPPORTS DIGITAUX (2 PROJETS PHARES) ---
  // ====================================================
  {
    id: "supports-kidney-savers",
    title: "Supports digitaux — Kidney Savers",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Design graphique — Hackathon",
    image: "/images/Support digital Kidney Savers.png",
    shortDesc:
      "Campagne visuelle et supports digitaux destinés à accompagner la sensibilisation de Kidney Savers.",
    fullDesc:
      "En complément de l'application Kidney Savers, ce projet concerne la conception des supports digitaux destinés à accompagner la communication du projet. L'objectif était de traduire visuellement son message de sensibilisation autour de la santé rénale et de créer une communication cohérente avec l'univers de l'application.",
    client: "Kidney Savers (Hackathon)",
    deliverables: [
      "Visuels de communication pour réseaux sociaux",
      "Bannières digitales de promotion et d'information",
      "Fiches pédagogiques illustrées de sensibilisation",
      "Supports de présentation projet pour le hackathon",
    ],
    context:
      "Création de l'écosystème graphique de communication autour du projet Kidney Savers.",
    problem:
      "Transmettre des messages de prévention santé de façon attractive sans tomber dans le médical rébarbatif.",
    objective:
      "Traduire visuellement son message de sensibilisation et créer une communication cohérente avec l'application.",
    process:
      "Déclinaison de l'univers illustratif de l'app, composition de templates réseaux sociaux et mise en avant des messages clés.",
    solution:
      "Une suite de visuels clairs et chaleureux captant l'intérêt et incitant à la prévention.",
    result:
      "Supports utilisés lors de la présentation et du partage du projet au hackathon.",
  },
  {
    id: "skill-builder-flyer",
    title: "Flyer Skill Builder",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Événement & Formation",
    image: "/images/Skill Builder Flyer.png",
    shortDesc:
      "Flyer promotionnel et affiche digitale pour le programme de formation Skill Builder.",
    fullDesc:
      "Conception de l'affiche et du flyer pour l'événement de formation Skill Builder. Structuration claire du programme, des intervenants, des compétences visées et des modalités d'inscription.",
    client: "Skill Builder",
    deliverables: [
      "Flyer digital pour diffusion mobile & WhatsApp",
      "Version haute résolution pour tirage papier",
      "Mise en valeur de la grille d'information",
    ],
    context:
      "Campagne de communication pour des sessions de formation professionnelle.",
    problem:
      "Présenter de nombreuses informations pédagogiques sans créer de surcharge visuelle.",
    objective:
      "Donner envie d'apprendre et faciliter le passage à l'action pour les inscriptions.",
    process:
      "Hiérarchisation par blocs thématiques, contrastes de titres et clarté des dates.",
    solution:
      "Un support dynamique, lisible et structuré garantissant une transmission fluide du message.",
    result:
      "Support diffusé sur les canaux de communication de la formation.",
  },

  /*
  // --- AUTRES SUPPORTS DIGITAUX (EN RÉSERVE) ---
  {
    id: "banner-kidney-savers",
    title: "Bannière Officielle — Kidney Savers",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Design graphique — Hackathon",
    image: "/images/Banner Kidney Savers.png",
    shortDesc:
      "Bannière promotionnelle grand format pour la visibilité de l'application Kidney Savers.",
    fullDesc:
      "Création de la bannière grand format pour le projet Kidney Savers. Composition visuelle intégrant l'accroche, les personnages illustrés et l'univers graphique coloré.",
    client: "Kidney Savers",
    deliverables: [
      "Bannière grand format haute définition",
      "Adaptation pour affichage et bannières web",
      "Mise en scène visuelle de la proposition de valeur",
    ],
    context:
      "Visibilité événementielle du projet lors des présentations officielles.",
    problem:
      "Attirer le regard à distance tout en délivrant immédiatement la promesse de l'application.",
    objective:
      "Créer un visuel d'impact immédiat résumant l'énergie positive du projet.",
    process:
      "Agencement spatial soigné, typographie lisible à grande échelle et contrastes vibrants.",
    solution:
      "Une bannière attrayante mettant en scène la mascotte et le message de santé.",
    result:
      "Support affiché et diffusé durant les événements du hackathon.",
  },
  {
    id: "post-insta-christall",
    title: "Post Instagram — Direction Artistique",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2024",
    framework: "Communication personnelle",
    image: "/images/Post insta Christall.png",
    shortDesc:
      "Création visuelle pour Instagram alliant typographie moderne et composition graphique épurée.",
    fullDesc:
      "Conception graphique d'un post Instagram pour la communication personnelle. Recherche d'une esthétique haut de gamme mettant en valeur la rigueur graphique, les espacements et les choix typographiques.",
    client: "Communication personnelle",
    deliverables: [
      "Visuel carré optimisé pour les réseaux sociaux (1080x1080)",
      "Recherche d'harmonie graphique et typographique",
    ],
    context:
      "Création de contenu visuel sur les réseaux sociaux professionnels.",
    problem:
      "Se démarquer dans le flux social grâce à une composition épurée et distinguée.",
    objective:
      "Démontrer la maîtrise du détail graphique et de la mise en page créative.",
    process:
      "Sélection des typographies, gestion des espaces blancs et harmonisation chromatique.",
    solution:
      "Une composition équilibrée et soignée reflétant un positionnement design exigeant.",
    result:
      "Publication réalisée et intégrée à la ligne éditoriale.",
  },
  {
    id: "deos-rabbits-flyer",
    title: "Flyer Deo's Rabbits",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Communication commerciale",
    image: "/images/Deo's Rabbits Flyer.png",
    shortDesc:
      "Support publicitaire commercial pour la mise en valeur des offres de Deo's Rabbits.",
    fullDesc:
      "Création d'un flyer commercial pour Deo's Rabbits. Le support a été conçu pour présenter la gamme de produits, les avantages compétitifs et les points de contact pour commander.",
    client: "Deo's Rabbits",
    deliverables: [
      "Flyer promotionnel haute fidélité",
      "Format adapté pour la diffusion mobile et messagerie",
      "Mise en avant des tarifs et contacts commerciaux",
    ],
    context:
      "Campagne commerciale locale pour stimuler les ventes de produits cunicoles.",
    problem:
      "Donner une image professionnelle, soignée et appétissante aux produits d'élevage.",
    objective:
      "Valoriser l'offre et susciter les commandes directes par téléphone/WhatsApp.",
    process:
      "Traitement des images produits, organisation tarifaire et accent mis sur les coordonnées.",
    solution:
      "Un flyer percutant et rassurant facilitant la prise de contact instantanée.",
    result:
      "Support remis au commanditaire pour sa prospection commerciale.",
  },
  {
    id: "seminaire-chorale-flyer",
    title: "Flyer Séminaire Chorale",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Événement musical",
    image: "/images/Seminaire Chorale Flyer.png",
    shortDesc:
      "Affiche artistique et flyer d'invitation pour un séminaire de chant choral.",
    fullDesc:
      "Conception graphique de l'affiche officielle du Séminaire de Chorale. Composition alliant inspiration musicale, solennité et clarté des informations pratiques.",
    client: "Comité d'organisation",
    deliverables: [
      "Affiche grand format pour impression",
      "Visuel numérique pour communication sur les réseaux",
      "Direction artistique musicale harmonieuse",
    ],
    context:
      "Organisation d'un séminaire d'apprentissage et de perfectionnement choral.",
    problem:
      "Allier dimension spirituelle/musicale et lisibilité parfaite des horaires et du programme.",
    objective:
      "Mobiliser et rassembler les choristes grâce à un visuel digne et harmonieux.",
    process:
      "Sélection des teintes, travail sur les lumières et équilibre des zones de texte.",
    solution:
      "Une affiche chaleureuse et élégante traduisant l'élévation vocale et l'esprit de partage.",
    result:
      "Visuel utilisé pour l'ensemble de la campagne de l'événement.",
  },
  {
    id: "soutenance-flyer",
    title: "Flyer Soutenance Académique",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Événement académique",
    image: "/images/Soutenance Flyer.png",
    shortDesc:
      "Carton d'invitation officiel pour une soutenance de diplôme universitaire.",
    fullDesc:
      "Création d'un flyer d'invitation solennel pour une soutenance académique. Présentation du thème de recherche, du jury, du lieu et des modalités d'accueil.",
    client: "Cadre académique",
    deliverables: [
      "Invitation digitale pour transmission messagerie",
      "Format haute définition pour impression sur beau papier",
      "Typographie académique soignée",
    ],
    context:
      "Cérémonie de soutenance académique de fin de cycle.",
    problem:
      "Concevoir une invitation prestigieuse qui honore le travail universitaire réalisé.",
    objective:
      "Créer un support raffiné et formel pour inviter les pairs et proches.",
    process:
      "Mise en page sobre, choix typographiques classiques et finitions soignées.",
    solution:
      "Une invitation prestigieuse alliant clarté informative et solennité.",
    result:
      "Support remis aux invités pour la soutenance.",
  },
  {
    id: "st-valentin-flyer",
    title: "Flyer Saint-Valentin",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2024",
    framework: "Événementiel & Soirée",
    image: "/images/StValentin Flyer.png",
    shortDesc:
      "Affiche festive et visuel d'ambiance conçu pour la célébration de la Saint-Valentin.",
    fullDesc:
      "Création graphique d'un flyer événementiel pour la Saint-Valentin. Ambiance feutrée, teintes chaudes et typographie soignée pour sublimer l'événement.",
    client: "Événementiel Saint-Valentin",
    deliverables: [
      "Affiche haute résolution",
      "Visuel promotionnel pour stories et publications",
    ],
    context:
      "Promotion d'un événement thématique pour la fête de la Saint-Valentin.",
    problem:
      "Attirer l'attention avec une identité festive sans tomber dans les clichés excessifs.",
    objective:
      "Susciter le désir de participation à la soirée grâce à une esthétique chaleureuse.",
    process:
      "Travail sur les dégradés rouge/or, jeux de brillance et hiérarchisation des offres.",
    solution:
      "Une affiche élégante et séduisante invitant à la célébration.",
    result:
      "Support diffusé pour la promotion de l'événement.",
  },
  {
    id: "birthday-flyer",
    title: "Flyer Anniversaire",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2024",
    framework: "Événement privé",
    image: "/images/Birthday flyer.png",
    shortDesc:
      "Affiche commémorative et invitation personnalisée pour une fête d'anniversaire.",
    fullDesc:
      "Conception graphique d'un visuel d'anniversaire personnalisé, valorisant la personne mise à l'honneur dans un style festif, moderne et haut de gamme.",
    client: "Événement privé",
    deliverables: [
      "Affiche personnalisée haute définition",
      "Format adapté pour story et réseaux sociaux",
    ],
    context:
      "Célébration d'anniversaire et envoi d'invitations.",
    problem:
      "Créer un visuel qui marque les esprits et reflète la personnalité du célébré.",
    objective:
      "Offrir un souvenir visuel élégant et mémorable aux proches et invités.",
    process:
      "Mise en valeur photographique, composition lumineuse et titrage festif.",
    solution:
      "Un flyer dynamique et raffiné prêt à l'impression et au partage instantané.",
    result:
      "Visuel validé et diffusé pour la fête.",
  },
  {
    id: "uebb-jeunesse-flyer",
    title: "Flyer UEBB Jeunesse",
    category: "Supports Digitaux",
    categoryTab: "supports",
    year: "2023",
    framework: "Rassemblement associatif",
    image: "/images/UEBB Jeunesse Flyer.png",
    shortDesc:
      "Affiche de rassemblement et de mobilisation pour les activités de la jeunesse UEBB.",
    fullDesc:
      "Création du flyer officiel pour le rassemblement de la jeunesse UEBB. Le travail a consisté à concevoir un visuel motivant, rassembleur et clair quant aux thématiques et au déroulement.",
    client: "Jeunesse UEBB",
    deliverables: [
      "Affiche pour affichage public et digital",
      "Visuels mobiles pour diffusion WhatsApp et groupes de jeunes",
    ],
    context:
      "Campagne d'invitation à un grand rassemblement de jeunes.",
    problem:
      "Capter l'attention des jeunes et encourager une forte participation collective.",
    objective:
      "Informer avec enthousiasme et clarté sur les dates, lieux et intervenants.",
    process:
      "Sélection de tons vivants, composition dynamique et lisibilité directe des détails essentiels.",
    solution:
      "Une affiche engageante et moderne incarnant la cohésion et l'énergie de la jeunesse.",
    result:
      "Affiche largement partagée lors de la campagne de mobilisation.",
  },
  */
];
