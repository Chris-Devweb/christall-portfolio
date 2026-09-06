"use client";

import Link from "next/link";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#04060d] text-slate-400 pt-14 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 border-t border-white/[0.08]">
      <div className="w-full max-w-5xl mx-auto">
        {/* Top Grid — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/[0.08] items-start">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="#"
              className="font-heading font-medium text-xl sm:text-2xl tracking-tight text-white mb-3 sm:mb-4 block"
            >
              ChristΛll.
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-5 sm:mb-6">
              Designer UI/UX & Identité Visuelle. Conception d'expériences numériques mémorables et de marques audacieuses.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* WhatsApp */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-[#3f519f] hover:text-white flex items-center justify-center text-slate-400 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-[#bc1888] hover:text-white flex items-center justify-center text-slate-400 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-[#1877f2] hover:text-white flex items-center justify-center text-slate-400 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-[#42aae1] hover:text-white flex items-center justify-center text-slate-400 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-300 mb-1">
                Navigation
              </span>
              {[
                { label: "À propos", href: "#a-propos" },
                { label: "Domaines d'intervention", href: "#expertise" },
                { label: "Travaux sélectionnés", href: "#portfolio" },
                { label: "Méthodologie", href: "#methodologie" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quote & Contact */}
          <div className="lg:col-span-4 flex flex-col lg:items-end lg:text-right">
            <span className="text-xs font-medium uppercase tracking-wider text-[#42aae1] mb-2">
              Philosophie
            </span>
            <p className="text-base sm:text-lg font-medium text-white font-heading max-w-xs mb-3">
              &quot;Moi c&apos;est ChristΛll. Et je fais briller tes idées.&quot;
            </p>
            <span className="text-xs text-slate-400 mb-1">
              {siteConfig.email}
            </span>
            <span className="text-xs text-slate-500">
              {siteConfig.phone} · {siteConfig.location}
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ChristΛll. Tous droits réservés.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <span>Design & Direction Artistique par ChristΛll.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
