"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Tag,
  Briefcase,
  Layers,
  HelpCircle,
  Target,
  Cpu,
  Award,
  Sparkles,
} from "lucide-react";

import { Project, ProjectCategoryTab } from "@/types/project";

export type { Project, ProjectCategoryTab };

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenContact,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 animate-in zoom-in-95 fade-in duration-300 border border-slate-100 max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f0f4ff] text-[#3f519f] border border-[#3f519f]/10">
              {project.category}
            </span>
            {project.framework && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                {project.framework}
              </span>
            )}
            <span className="text-xs font-medium text-slate-400 font-mono">
              {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shrink-0"
            aria-label="Fermer la boîte de dialogue"
          >
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Banner Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain sm:object-cover bg-slate-900/5"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>

          {/* Title & Full Intro */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-heading mb-3">
              {project.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3f519f]/10 flex items-center justify-center shrink-0">
                <Briefcase size={18} className="text-[#3f519f]" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Cadre / Contexte
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">
                  {project.client}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3f519f]/10 flex items-center justify-center shrink-0">
                <Calendar size={18} className="text-[#3f519f]" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Période
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {project.year}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3f519f]/10 flex items-center justify-center shrink-0">
                <Tag size={18} className="text-[#3f519f]" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Discipline
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1">
                  {project.category}
                </div>
              </div>
            </div>
          </div>

          {/* Structured Case Study (Contexte -> Problème -> Objectif -> Processus -> Solution -> Résultat) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3f519f]" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3f519f] font-heading">
                Étude de Cas Détaillée
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Contexte */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#3f519f]">
                  <Layers size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    1. Contexte
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.context}
                </p>
              </div>

              {/* 2. Problème */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-amber-600">
                  <HelpCircle size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    2. Problème
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* 3. Objectif */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-sky-600">
                  <Target size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    3. Objectif
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              {/* 4. Processus */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-indigo-600">
                  <Cpu size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    4. Processus
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.process}
                </p>
              </div>

              {/* 5. Solution */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-emerald-600">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    5. Solution
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* 6. Résultat */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#3f519f]">
                  <Award size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    6. Résultat
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 font-heading">
                Livrables Clés Réalisés
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100/80"
                  >
                    <CheckCircle2 size={15} className="text-[#42aae1] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="pt-5 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
              Vous avez un projet similaire ou souhaitez échanger autour de ce travail ?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-[10px] bg-[#3f519f] hover:bg-[#34468f] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Discuter de ce projet</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
