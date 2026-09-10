"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.navbar.about, href: "#a-propos" },
    { name: t.navbar.expertise, href: "#expertise" },
    { name: t.navbar.portfolio, href: "#portfolio" },
    { name: t.navbar.methodology, href: "#methodologie" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-4 sm:pt-5">
      <div className="w-full max-w-[1080px] rounded-[20px] px-4 sm:px-8 py-3 sm:py-3.5 bg-[#0d1527]/60 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Brand Name - Recharge le site au clic */}
        <a
          href="/"
          onClick={() => {
            if (window.location.pathname === "/" && !window.location.hash) {
              window.location.reload();
            }
          }}
          className="font-heading font-medium text-xl sm:text-2xl tracking-tight text-white hover:opacity-90 transition-opacity select-none shrink-0 cursor-pointer"
        >
          ChristΛll.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-6 lg:gap-7 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher Desktop (FR / EN) */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.06] border border-white/10 text-xs">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === "fr"
                  ? "bg-white text-[#0a1020] font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
                }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === "en"
                  ? "bg-white text-[#0a1020] font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
                }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenContact}
            className="px-5 lg:px-6 py-2.5 text-sm font-semibold text-[#0a1020] bg-white rounded-[10px] hover:bg-slate-100 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {t.navbar.partnership}
          </button>
        </div>

        {/* Mobile: Language toggle + Partenariat + Menu */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px]">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${language === "fr"
                  ? "bg-white text-[#0a1020] font-bold"
                  : "text-slate-400"
                }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${language === "en"
                  ? "bg-white text-[#0a1020] font-bold"
                  : "text-slate-400"
                }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 text-xs font-semibold text-[#0a1020] bg-white rounded-[10px] hover:bg-slate-100 whitespace-nowrap"
          >
            {t.navbar.partnership}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-3 right-3 bg-[#0a1020]/95 backdrop-blur-2xl border border-white/10 rounded-[20px] p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-1 py-3 rounded-[10px] bg-gradient-to-r from-[#42aae1] to-[#3f519f] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3f519f]/30 cursor-pointer"
          >
            <span>{t.navbar.startProject}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}