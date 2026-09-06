"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Palette,
  Monitor,
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import { Project, ProjectCategoryTab } from "@/types/project";
import { projectsData } from "@/data/projects";

interface PortfolioProps {
  onOpenContact: () => void;
}

const ITEMS_PER_PAGE = 4;

const categoryTabs: {
  id: string;
  label: string;
  tab?: ProjectCategoryTab;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
  { id: "all", label: "Tous les travaux", icon: Layers },
  { id: "ui-ux", label: "UI/UX Design", tab: "ui-ux", icon: Monitor },
  { id: "branding", label: "Brand Identity", tab: "branding", icon: Palette },
  { id: "supports", label: "Supports Digitaux", tab: "supports", icon: Sparkles },
];

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtrage mémoïsé des projets selon l'onglet actif
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projectsData;
    return projectsData.filter((project) => project.categoryTab === activeTab);
  }, [activeTab]);

  // Calculs de pagination
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length);
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* En-tête de section */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#3f519f]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#3f519f]">
            PORTFOLIO RÉEL &amp; ÉTUDES DE CAS
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-4 font-heading max-w-2xl">
          Travaux &amp; réalisations
        </h2>

        {/* Sous-titre */}
        <p className="text-slate-500 text-base sm:text-lg mb-8 max-w-2xl">
          Une collection authentique de projets en UI/UX design, identité de marque et supports digitaux. Explorez chaque étude de cas pour découvrir le processus de conception.
        </p>

        {/* Onglets thématiques */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categoryTabs.map((tab) => {
            const count =
              tab.id === "all"
                ? projectsData.length
                : projectsData.filter((p) => p.categoryTab === tab.id).length;
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer border ${
                  isActive
                    ? "bg-[#3f519f] text-white border-[#3f519f] shadow-sm shadow-[#3f519f]/20"
                    : "bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-slate-500"} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200/70 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compteur & Métadonnées de pagination */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-6 px-1">
          <span>
            Affichage de <strong className="text-slate-800">{startIndex + 1}</strong> à{" "}
            <strong className="text-slate-800">{endIndex}</strong> sur{" "}
            <strong className="text-slate-800">{filteredProjects.length}</strong> projets
          </span>
          <span className="font-mono text-xs">
            Page {safeCurrentPage} sur {totalPages}
          </span>
        </div>

        {/* Liste des cartes de projets */}
        <div className="flex flex-col gap-6 sm:gap-8 min-h-[600px]">
          {currentProjects.map((project) => (
            <article
              key={project.id}
              className="group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(63,81,159,0.08)] hover:border-[#42aae1]/30 transition-all duration-300 flex flex-col md:grid md:grid-cols-12 gap-5 sm:gap-7 items-center"
            >
              {/* Image du projet */}
              <div className="w-full md:col-span-5 relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/90 shadow-inner">
                <Image
                  src={project.image}
                  alt={`Aperçu visuel du projet ${project.title}`}
                  fill
                  className="object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105 bg-slate-900/5"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Détails du projet */}
              <div className="w-full md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Badges & Discipline */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f0f4ff] text-[#3f519f] border border-[#3f519f]/10">
                      {project.category}
                    </span>
                    {project.framework && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                        {project.framework}
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400 ml-auto">
                      {project.year}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-heading group-hover:text-[#3f519f] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description courte */}
                  <p className="text-slate-600 text-xs sm:text-sm sm:leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Aperçu des livrables */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.deliverables.slice(0, 3).map((deliverable, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"
                      >
                        {deliverable}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-[11px] text-slate-400 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                        +{project.deliverables.length - 3} autres
                      </span>
                    )}
                  </div>
                </div>

                {/* Bouton d'action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 sm:px-5 py-2.5 rounded-[10px] bg-[#3f519f] hover:bg-[#34468f] text-white font-medium text-xs tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-95 group/btn"
                  >
                    <span>VOIR L&apos;ÉTUDE DE CAS</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>

                  <span className="text-xs text-slate-400 italic">
                    Contexte &rarr; Résultat
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contrôles de pagination (Number Scroll) */}
        {totalPages > 1 && (
          <nav
            aria-label="Navigation des pages du portfolio"
            className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100"
          >
            {/* Bouton Précédent */}
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage <= 1}
              aria-label="Page précédente"
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                safeCurrentPage <= 1
                  ? "opacity-40 border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm cursor-pointer"
              }`}
            >
              <ChevronLeft size={16} />
              <span>Précédent</span>
            </button>

            {/* Numéros de page */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isSelected = pageNum === safeCurrentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Aller à la page ${pageNum}`}
                    aria-current={isSelected ? "page" : undefined}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer border ${
                      isSelected
                        ? "bg-[#3f519f] text-white border-[#3f519f] shadow-md shadow-[#3f519f]/25 scale-105"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Bouton Suivant */}
            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage >= totalPages}
              aria-label="Page suivante"
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                safeCurrentPage >= totalPages
                  ? "opacity-40 border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm cursor-pointer"
              }`}
            >
              <span>Suivant</span>
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>

      {/* Modale d'étude de cas détaillée */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
