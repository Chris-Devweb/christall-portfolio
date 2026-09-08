"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LogoWhiteWatermark from "./LogoWhiteWatermark";
import { useLanguage } from "@/context/LanguageContext";

interface ContactCTAProps {
  onOpenContact: () => void;
}

export default function ContactCTA({ onOpenContact }: ContactCTAProps) {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-[linear-gradient(180deg,#0B1020_0%,#0F172A_100%)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-[#3f519f]/15 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Logo Watermark */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] h-[220px] sm:h-[350px] pointer-events-none select-none opacity-[0.04] blur-[2px] -z-10">
        <LogoWhiteWatermark className="w-full h-full" />
      </div>

      {/* Decorative Losange — hidden on small screens */}
      <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-44 h-44 pointer-events-none select-none opacity-40 animate-float-slow">
        <Image
          src="/losange.png"
          alt="Décoration Losange"
          width={180}
          height={180}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="relative rounded-[20px] sm:rounded-[28px] bg-[#0d1527]/50 backdrop-blur-2xl border border-white/[0.08] py-12 sm:py-16 lg:py-20 px-5 sm:px-10 lg:px-12 text-center overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] sm:w-[460px] h-[180px] sm:h-[240px] bg-[#3f519f]/28 blur-[60px] sm:blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Top Tag */}
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300/80 mb-5">
              {language === "fr" ? "PRÊT À COLLABORER ?" : "READY TO COLLABORATE?"}
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-4 font-heading max-w-3xl">
              {language === "fr" ? (
                <>
                  Une idée en tête ?{" "}
                  <span className="text-[#8fa7df]">Faisons-la briller.</span>
                </>
              ) : (
                <>
                  Have an idea in mind?{" "}
                  <span className="text-[#8fa7df]">Let&apos;s make it shine.</span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-[15px] text-slate-300/80 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-9 leading-relaxed font-normal">
              {language === "fr"
                ? "Donnons vie à votre identité visuelle et redéfinissons ensemble l'expérience digitale de vos utilisateurs."
                : "Let's bring your visual identity to life and redefine your digital user experience together."}
            </p>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-[10px] bg-[#4f67e2] hover:bg-[#435ad4] text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-[0_4px_25px_rgba(79,103,226,0.45)] hover:shadow-[0_6px_30px_rgba(79,103,226,0.6)] active:scale-95 flex items-center gap-2 cursor-pointer mb-4 sm:mb-5"
            >
              <span>{language === "fr" ? "DÉMARRER UN PROJET" : "START A PROJECT"}</span>
              <ArrowUpRight size={17} />
            </button>

            {/* Subtext */}
            <span className="text-xs text-slate-400/70 font-normal">
              {language === "fr"
                ? "Réponse rapide et confidentielle."
                : "Prompt & confidential reply."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
