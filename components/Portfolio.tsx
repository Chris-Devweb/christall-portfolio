"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

interface PortfolioProps {
  onOpenContact: () => void;
}

export const projectsData: Project[] = [
  {
    id: "hotel-de-cotonou",
    title: "Hôtel de Cotonou",
    category: "Branding & Identité",
    year: "2024",
    image: "/images/project_cotonou.jpg",
    shortDesc:
      "Création d'une identité visuelle d'exception alliant héritage béninois et standing hôtelier haut de gamme.",
    fullDesc:
      "Refonte complète de l'identité de marque pour un complexe hôtelier 5 étoiles. Le projet allie le raffinement de l'hôtellerie de luxe internationale aux symboles traditionnels de la royauté et de la flore béninoise.",
    client: "Groupe Hôtelier Cotonou Palace",
    deliverables: [
      "Logotype royal & Blason héraldique",
      "Charte graphique & Guidelines complètes",
      "Papeterie haut de gamme & Enveloppes dorées",
      "Signalétique intérieure & extérieure",
      "Supports de conciergerie & Menus de restaurant",
    ],
    challenge:
      "Moderniser l'image d'un établissement emblématique sans dénaturer son ancrage historique et son prestige patrimonial.",
    solution:
      "Un emblème héraldique raffiné couronné d'un palmier stylisé, associé à une palette sobre noir & crème et une typographie sérif intemporelle.",
  },
  {
    id: "amani-botanicals",
    title: "Amani",
    category: "Packaging & Design",
    year: "2024",
    image: "/images/project_amani.jpg",
    shortDesc:
      "Direction artistique et packaging d'une gamme de soins botaniques naturels haut de gamme.",
    fullDesc:
      "Conception du design produit et du territoire graphique pour une maison de cosmétiques biologiques et véganes. Une approche minimaliste sombre mettant en avant la pureté des formules.",
    client: "Amani Botanical Skincare",
    deliverables: [
      "Design de flacons en verre noir mat & étiquettes texturées",
      "Packaging secondaire & Boîtages éco-conçus",
      "Direction artistique photographique studio",
      "Guide de déploiement retail & e-commerce",
    ],
    challenge:
      "Se démarquer dans un marché saturé de cosmétiques verts en adoptant une esthétique sombre, mystérieuse et ultra-désirable.",
    solution:
      "Flaconnage noir mat monolithique, sérigraphie blanche épurée et hiérarchie typographique clinique assurant clarté et distinction absolue.",
  },
  {
    id: "nexmo-mobility",
    title: "Nexmo",
    category: "UI/UX & Mobile App",
    year: "2023",
    image: "/images/project_nexmo.jpg",
    shortDesc:
      "Application mobile de mobilité urbaine intuitive avec recherche en temps réel et réservation instantanée.",
    fullDesc:
      "Design complet d'une application mobile de transport multimodal pensée pour simplifier les trajets quotidiens dans les métropoles africaines en pleine expansion.",
    client: "Nexmo Mobility Technologies",
    deliverables: [
      "Recherche utilisateur & Cartographie des parcours",
      "Design System mobile (iOS & Android)",
      "Prototypage interactif haute fidélité",
      "Micro-interactions & Animations de navigation",
      "Tests d'utilisabilité & Optimisation du taux de conversion",
    ],
    challenge:
      "Concevoir une interface cartographique fluide, utilisable en mouvement et sous une forte luminosité extérieure.",
    solution:
      "Une interface ultra-épurée avec des contrastes renforcés, un guidage étape par étape accessible au pouce et une latence visuelle minimale.",
  },
  {
    id: "oxygene-architecture",
    title: "Oxygène",
    category: "Direction Artistique",
    year: "2023",
    image: "/images/project_oxygene.jpg",
    shortDesc:
      "Scénographie visuelle et identité événementielle pour un festival d'architecture contemporaine.",
    fullDesc:
      "Création de l'univers visuel et du système graphique pour une biennale internationale d'architecture et de design urbain. Exploration des textures brutes et des perspectives dynamiques.",
    client: "Biennale d'Architecture Contemporaine",
    deliverables: [
      "Affiches sérigraphiées grand format & Bannières urbaines",
      "Catalogue d'exposition relié de 240 pages",
      "Identité dynamique & Motion design pour écrans géants",
      "Scénographie signalétique des pavillons",
    ],
    challenge:
      "Traduire la complexité volumétrique de l'architecture moderne dans un langage graphique bidimensionnel percutant.",
    solution:
      "Une approche graphique brutaliste en noir et blanc à fort contraste, mettant en valeur les perspectives hélicoïdales et la lumière naturelle.",
  },
];

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Decorative Losange on Right Side */}
      <div className="hidden xl:block absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none select-none opacity-35 animate-float-slow">
        <Image
          src="/losange.png"
          alt="Décoration Losange"
          width={190}
          height={190}
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#3f519f]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#3f519f]">
            PORTFOLIO
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-4 font-heading max-w-2xl">
          Travaux sélectionnés
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg mb-14 max-w-2xl">
          Une sélection de projets récents alliant rigueur esthétique et impact stratégique.
        </p>

        {/* Project Cards List */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(63,81,159,0.08)] hover:border-[#42aae1]/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              {/* Left Column: Project Image Thumbnail */}
              <div className="md:col-span-5 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/80 shadow-xs">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Right Column: Project Details */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Top Bar: Title & Category */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading group-hover:text-[#3f519f] transition-colors">
                      {project.title}
                    </h3>
                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-[#f0f4ff] text-[#3f519f]">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Bar: CTA Button & Year */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 rounded-[10px] bg-[#3f519f] hover:bg-[#34468f] text-white font-medium text-xs tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-95 group/btn"
                  >
                    <span>VOIR LE PROJET</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>

                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
