"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "A propos", href: "#a-propos" },
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Méthodologie", href: "#methodologie" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-4 sm:pt-5">
      <div className="w-full max-w-[1060px] rounded-[20px] px-4 sm:px-9 py-3 sm:py-3.5 bg-[#0d1527]/40 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center justify-between gap-4">
        {/* Left: Brand Name */}
        <Link
          href="#"
          className="font-heading font-medium text-xl sm:text-2xl tracking-tight text-white hover:opacity-90 transition-opacity select-none shrink-0"
        >
          ChristΛll.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[35px]">
          <nav className="flex items-center gap-[35px] text-sm font-medium text-white/90">
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

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 text-sm font-semibold text-[#0a1020] bg-white rounded-[10px] hover:bg-slate-100 transition-all duration-200 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Partenariat
          </button>
        </div>

        {/* Mobile: compact buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#0a1020] bg-white rounded-[10px] hover:bg-slate-100 whitespace-nowrap"
          >
            Partenariat
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
            <span>Démarrer un projet</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
