"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import LogoWhiteWatermark from "./LogoWhiteWatermark";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between items-center pt-32 sm:pt-40 pb-6 px-4 sm:px-6 overflow-hidden bg-[linear-gradient(180deg,#0B1020_0%,#0F172A_100%)]">
      {/* Top-Right Corner Layer Blur Circle */}
      <div className="absolute -top-16 -right-16 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full bg-[#3f519f]/22 blur-[100px] pointer-events-none -z-10" />

      {/* Bottom-Left Corner Layer Blur Circle */}
      <div className="absolute -bottom-16 -left-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-[#42aae1]/20 blur-[110px] pointer-events-none -z-10" />

      {/* 2nd 3D Element in Background with Layer Blur ~5px */}
      <div className="hidden sm:block absolute right-8 md:right-20 lg:right-32 top-[26%] sm:top-[28%] w-32 md:w-36 h-32 md:h-36 pointer-events-none select-none opacity-55 blur-[5px] z-0">
        <Image
          src="/image3d.png"
          alt="3D element blur background"
          width={150}
          height={150}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Main Content Area - Remonté de 10px */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto z-10 pt-4 sm:pt-8 -translate-y-[10px]">
        {/* Category Badges */}
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-7">
          <span className="px-4 py-1.5 rounded-full text-xs font-normal text-slate-300 bg-[#12192c]/85 border border-white/10 backdrop-blur-md">
            UI/UX Designer
          </span>
          <span className="px-4 py-1.5 rounded-full text-xs font-normal text-slate-300 bg-[#12192c]/85 border border-white/10 backdrop-blur-md">
            Branding &amp; Visual
          </span>
        </div>

        {/* Headline: 2 lines exactly */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium tracking-tight text-white leading-[1.18] mb-4 font-heading max-w-4xl">
          Je transforme les idées en<br />
          <span className="text-[#8fa7df]">identités</span> qui marquent.
        </h1>

        {/* Subtitle: 1 line */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-300/80 font-normal max-w-3xl mb-9 text-center tracking-normal whitespace-normal sm:whitespace-nowrap">
          Designer UI/UX passionné par l&apos;impact visuel et l&apos;expérience utilisateur.
        </p>

        {/* Action Buttons: 2 boutons */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full z-20">
          {/* Primary CTA with Enlarged 3D Element */}
          <div className="relative flex items-center justify-center">
            {/* Enlarged 3D Floating Object */}
            <div className="absolute -left-12 sm:-left-16 -top-9 sm:-top-11 w-28 sm:w-32 h-28 sm:h-32 z-30 pointer-events-none select-none animate-float drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <Image
                src="/image3d.png"
                alt="Élément 3D"
                width={130}
                height={130}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>

            <a
              href="#portfolio"
              className="relative z-10 w-full sm:w-auto pl-12 pr-8 py-3.5 rounded-[10px] text-white font-medium text-sm tracking-wide bg-[#4f67e2] hover:bg-[#435ad4] transition-all duration-300 shadow-[0_4px_25px_rgba(79,103,226,0.45)] active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap group"
            >
              <span>VOIR MES PROJETS</span>
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Secondary Button: rounded-[10px] */}
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-[10px] text-slate-200 font-medium text-sm tracking-wide bg-[#12192c]/90 hover:bg-[#18223c] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center gap-2.5 whitespace-nowrap group cursor-pointer"
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
      <div className="w-full max-w-5xl mx-auto pt-6 border-t border-white/[0.08] flex items-center justify-start text-[11px] text-slate-400/80 font-normal relative z-10">
        <span>Basé en Afrique · Disponible à l&apos;international</span>
      </div>
    </section>
  );
}
