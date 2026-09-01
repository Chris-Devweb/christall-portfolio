"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX Design",
    budget: "500€ - 1500€",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink =
    "https://wa.me/22994348096?text=Bonjour%20Christ%CE%9Bll.%20J%27ai%20besoin%20de%20vos%20services.";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      service: "UI/UX Design",
      budget: "500€ - 1500€",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with strong blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050811]/75 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Glassmorphic Modal Card */}
      <div className="relative w-full max-w-xl bg-[#0B1020]/75 backdrop-blur-3xl border border-white/15 rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10 my-8 animate-in zoom-in-95 fade-in duration-300">
        {/* Glowing Radial Circles in Modal Background */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#3f519f]/30 blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-60 h-32 bg-[#42aae1]/20 blur-[60px] pointer-events-none" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#42aae1]" />
            <h3 className="text-lg font-medium text-white font-heading">
              Démarrer un projet
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 relative z-10">
          {/* Direct WhatsApp Quick Contact option */}
          <div className="mb-6 p-3.5 rounded-[12px] bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle size={17} />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">
                  Besoin d'une réponse immédiate ?
                </div>
                <div className="text-[11px] text-emerald-300/90">
                  +229 94 34 80 96 (WhatsApp direct)
                </div>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-[8px] bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#3f519f]/25 border border-[#42aae1]/40 flex items-center justify-center text-[#42aae1] mb-5 animate-bounce">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-2xl font-medium text-white font-heading mb-2">
                Message envoyé avec succès !
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Merci {formData.name}, j'ai bien reçu votre demande à l'adresse{" "}
                <span className="text-white font-medium">{formData.email}</span>. Je vous répondrai sous 24h ouvrées.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-[10px] bg-[#4f67e2] text-white font-medium text-sm shadow-md cursor-pointer"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="cossouchristall@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    Prestation
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                  >
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Identité visuelle">Identité visuelle</option>
                    <option value="Design graphique">Design graphique</option>
                    <option value="Supports digitaux">Supports digitaux</option>
                    <option value="Autre / Projet Complet">
                      Autre / Projet Complet
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    Budget Estimé
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                  >
                    <option value="500€ - 1500€">500€ - 1 500€</option>
                    <option value="1500€ - 3000€">1 500€ - 3 000€</option>
                    <option value="3000€ - 5000€">3 000€ - 5 000€</option>
                    <option value="5000€+">5 000€ et plus</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                  Détails du projet
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Décrivez brièvement vos objectifs, vos délais et vos besoins..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-[10px] bg-[#4f67e2] hover:bg-[#435ad4] text-white font-medium text-sm shadow-[0_4px_25px_rgba(79,103,226,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <span>Envoyer la demande</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
