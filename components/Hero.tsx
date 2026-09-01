"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import LogoWhiteWatermark from "./LogoWhiteWatermark";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between items-center pt-36 sm:pt-44 pb-6 px-4 sm:px-6 overflow-hidden bg-[linear-gradient(180deg,#0B1020_0%,#0F172A_100%)]">
      {/* Top-Right Corner Layer Blur Circle */}
      <div className="absolute -top-20 -right-20 w-[280px] sm:w-[420px] lg:w-[500px] h-[280px] sm:h-[420px] lg:h-[500px] rounded-full bg-[#3f519f]/22 blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      {/* Bottom-Left Corner Layer Blur Circle */}
      <div className="absolute -bottom-20 -left-20 w-[280px] sm:w-[420px] lg:w-[520px] h-[280px] sm:h-[420px] lg:h-[520px] rounded-full bg-[#42aae1]/20 blur-[80px] sm:blur-[110px] pointer-events-none -z-10" />

      {/* 2nd 3D Element in Background — hidden on mobile to keep it clean */}
      <div className="hidden lg:block absolute right-16 xl:right-32 top-[28%] w-32 xl:w-36 h-32 xl:h-36 pointer-events-none select-none opacity-50 blur-[5px] z-0">
        <Image
          src="/image3d.png"
          alt="3D element blur background"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto z-10">
        {/* Category Badges */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-7 flex-wrap">
          <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-slate-300 bg-[#12192c]/85 border border-white/10 backdrop-blur-md">
            UI/UX Designer
          </span>
          <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-slate-300 bg-[#12192c]/85 border border-white/10 backdrop-blur-md">
            Branding & Visual
          </span>
        </div>

        {/* Headline: 2 lines — scales down nicely on mobile */}
        <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[62px] font-medium tracking-tight text-white leading-[1.18] mb-4 font-heading max-w-4xl px-2">
          Je transforme les idées en<br />
          <span className="text-[#8fa7df]">identités</span> qui marquent.
        </h1>

        {/* Subtitle — wraps naturally on mobile */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-300/80 font-normal max-w-sm sm:max-w-xl md:max-w-2xl mb-8 sm:mb-9 text-center leading-relaxed px-2">
          Designer UI/UX passionné par l'impact visuel et l'expérience utilisateur.
        </p>

        {/* Action Buttons */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full z-20 px-2">
          {/* Primary CTA — 3D element only shown sm+ to avoid overflow on mobile */}
          <div className="relative flex items-center justify-center w-full sm:w-auto">
            <div className="hidden sm:block absolute -left-14 -top-9 w-28 h-28 z-30 pointer-events-none select-none animate-float drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/image3d.png"
                alt="Élément 3D"
                width={130}
                height={130}
                className="object-contain"
                priority
              />
            </div>

            <a
              href="#portfolio"
              className="relative z-10 w-full sm:w-auto sm:pl-12 px-8 py-3.5 rounded-[10px] text-white font-medium text-sm tracking-wide bg-[#4f67e2] hover:bg-[#435ad4] transition-all duration-300 shadow-[0_4px_25px_rgba(79,103,226,0.45)] active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap group"
            >
              <span>VOIR MES PROJETS</span>
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Secondary Button */}
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-[10px] text-slate-200 font-medium text-sm tracking-wide bg-[#12192c]/90 hover:bg-[#18223c] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center gap-2.5 whitespace-nowrap group cursor-pointer"
          >
            <span>PARLONS DE VOTRE PROJET</span>
            <ArrowRight
              size={16}
              className="text-slate-400 group-hover:text-white transition-all group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Logo blanc animé — taille parfaite conservée */}
        <div className="relative -mt-12 sm:-mt-16 md:-mt-20 w-full flex justify-center pointer-events-none select-none z-0">
          <div className="w-[140px] sm:w-[220px] md:w-[280px] lg:w-[320px] opacity-30 sm:opacity-35 blur-[2px] animate-logo-float drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            <LogoWhiteWatermark className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Bottom Footer Line / Location Tag */}
      <div className="w-full max-w-5xl mx-auto pt-5 border-t border-white/[0.08] flex items-center justify-start text-[10px] sm:text-[11px] text-slate-400/80 font-normal relative z-10">
        <span>Basé en Afrique · Disponible à l'international</span>
      </div>
    </section>
  );
}
