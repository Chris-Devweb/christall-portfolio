"use client";

import Image from "next/image";
import { LayoutGrid, PenTool, FileText, Monitor, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ExpertiseProps {
  onSelectService?: (serviceName: string) => void;
}

const serviceIcons = [LayoutGrid, PenTool, FileText, Monitor];
const canonicalServices = [
  "UI/UX Design",
  "Identité visuelle",
  "Design graphique",
  "Supports digitaux",
];

export default function Expertise({ onSelectService }: ExpertiseProps) {
  const { t } = useLanguage();

  return (
    <section
      id="expertise"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Decorative Losange — only on very wide screens */}
      <div className="hidden xl:block absolute -left-10 top-1/3 w-48 h-48 pointer-events-none select-none opacity-40 animate-float">
        <Image
          src="/losange.png"
          alt="Décoration Losange"
          width={190}
          height={190}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#3f519f]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#3f519f]">
            {t.expertise.tag}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-4 font-heading max-w-2xl">
          {t.expertise.title}
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl">
          {t.expertise.subtitle}
        </p>

        {/* 4 Cards — Clickable to initiate project contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {t.expertise.services.map((item, idx) => {
            const IconComponent = serviceIcons[idx] || LayoutGrid;
            const canonicalService = canonicalServices[idx] || item.title;

            return (
              <div
                key={item.num}
                onClick={() => onSelectService?.(canonicalService)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectService?.(canonicalService);
                  }
                }}
                className="group relative p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-white border border-slate-100/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(63,81,159,0.12)] hover:border-[#3f519f]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3f519f]"
              >
                <div>
                  {/* Card Top: Icon & Number */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f0f4ff] flex items-center justify-center text-[#3f519f] group-hover:bg-[#3f519f] group-hover:text-white transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-[#3f519f] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 group-hover:text-[#3f519f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Card Result Badge & Action Prompt */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#3f519f] uppercase">
                    {item.result}
                  </span>
                  <span className="text-xs font-semibold text-[#4f67e2] group-hover:underline flex items-center gap-1">
                    <span>{t.expertise.cardAction}</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
