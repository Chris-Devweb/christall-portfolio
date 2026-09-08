"use client";

import { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  AlertCircle,
  Briefcase,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { useLanguage } from "@/context/LanguageContext";

export type ContactModalMode = "project" | "hire";

interface ContactModalProps {
  isOpen: boolean;
  initialMode?: ContactModalMode;
  initialService?: string;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  initialMode = "project",
  initialService,
  onClose,
}: ContactModalProps) {
  const [mode, setMode] = useState<ContactModalMode>(initialMode);
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: (initialService || siteConfig.services[0]) as string,
    budget: siteConfig.budgets[0] as string,
    company: "",
    contractType: siteConfig.contractTypes[0] as string,
    remuneration: siteConfig.salaryRanges[0] as string,
    message: "",
    website_hp: "", // Honeypot anti-bot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappForwardUrl, setWhatsappForwardUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Synchronisation lors de l'ouverture
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setErrorMessage(null);
      setFieldErrors({});
      if (initialService) {
        setFormData((prev) => ({ ...prev, service: initialService }));
      }
    }
  }, [isOpen, initialMode, initialService]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 && data.details) {
          setFieldErrors(data.details);
          setErrorMessage(data.error || "Veuillez corriger les erreurs ci-dessous.");
        } else if (response.status === 429) {
          setErrorMessage("Trop de tentatives d'envoi. Veuillez patienter quelques minutes.");
        } else {
          setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.");
        }
        setIsSubmitting(false);
        return;
      }

      if (data.whatsappUrl) {
        setWhatsappForwardUrl(data.whatsappUrl);
        // Ouverture automatique de WhatsApp dans un nouvel onglet avec le message pré-rempli
        try {
          window.open(data.whatsappUrl, "_blank");
        } catch {
          // Ignoré si le navigateur bloque l'ouverture automatique (le bouton reste accessible)
        }
      }

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Impossible de joindre le serveur. Vérifiez votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFieldErrors({});
    setWhatsappForwardUrl(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: siteConfig.services[0],
      budget: siteConfig.budgets[0],
      company: "",
      contractType: siteConfig.contractTypes[0],
      remuneration: siteConfig.salaryRanges[0],
      message: "",
      website_hp: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050811]/75 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Glass Modal Card */}
      <div className="relative w-full max-w-xl bg-[#0B1020]/80 backdrop-blur-3xl border border-white/15 rounded-[20px] sm:rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden z-10 my-4 sm:my-8 animate-in zoom-in-95 fade-in duration-300">
        {/* Inner Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#3f519f]/30 blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-60 h-32 bg-[#42aae1]/20 blur-[60px] pointer-events-none" />

        {/* Modal Top Bar with Mode Switcher */}
        <div className="px-4 sm:px-8 pt-5 sm:pt-6 pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={17} className="text-[#42aae1]" />
              <h3 className="text-base sm:text-lg font-medium text-white font-heading">
                {mode === "hire" ? t.contactModal.titleHire : t.contactModal.titleProject}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Fermer la boîte de dialogue"
            >
              <X size={16} />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          {!isSubmitted && (
            <div className="grid grid-cols-2 p-1 rounded-xl bg-white/[0.05] border border-white/10">
              <button
                type="button"
                onClick={() => setMode("project")}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  mode === "project"
                    ? "bg-[#3f519f] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers size={14} />
                <span>{t.contactModal.tabProject}</span>
              </button>

              <button
                type="button"
                onClick={() => setMode("hire")}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  mode === "hire"
                    ? "bg-[#3f519f] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase size={14} />
                <span>{t.contactModal.tabHire}</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 lg:p-8 relative z-10">
          {/* Global Error Banner */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {isSubmitted ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#3f519f]/25 border border-[#42aae1]/40 flex items-center justify-center text-[#42aae1] mb-4 animate-bounce">
                <CheckCircle2 size={32} />
              </div>

              <h4 className="text-xl sm:text-2xl font-medium text-white font-heading mb-2">
                {t.contactModal.successTitle}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                {t.contactModal.successDesc}
              </p>

              {/* Instant WhatsApp Forward Button */}
              {whatsappForwardUrl && (
                <div className="w-full mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center">
                  <div className="text-xs font-semibold text-emerald-300 mb-1">
                    {t.contactModal.whatsappPrompt}
                  </div>
                  <p className="text-[11px] text-slate-300 mb-3 max-w-xs">
                    {t.contactModal.whatsappSub}
                  </p>
                  <a
                    href={whatsappForwardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    <span>{t.contactModal.whatsappBtn}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              )}

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-[10px] bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-xs sm:text-sm cursor-pointer transition-colors border border-white/10"
              >
                {t.contactModal.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Honeypot field */}
              <div aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="website_hp">Ne pas remplir ce champ</label>
                <input
                  id="website_hp"
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Nom */}
              <div>
                <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                  {t.contactModal.labelName}
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder={t.contactModal.placeholderName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border ${
                    fieldErrors.name ? "border-red-500" : "border-white/10"
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors`}
                />
                {fieldErrors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email & Téléphone (Présents dans les 2 formulaires) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    {t.contactModal.labelEmail}
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    placeholder={t.contactModal.placeholderEmail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border ${
                      fieldErrors.email ? "border-red-500" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors`}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] text-red-400 mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                    {t.contactModal.labelPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={30}
                    placeholder={t.contactModal.placeholderPhone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border ${
                      fieldErrors.phone ? "border-red-500" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-[11px] text-red-400 mt-1">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Mode Projet : Prestation & Budget */}
              {mode === "project" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                      {t.contactModal.labelService}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                    >
                      {siteConfig.services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                      {t.contactModal.labelBudget}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                    >
                      {siteConfig.budgets.map((bgt) => (
                        <option key={bgt} value={bgt}>
                          {bgt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                /* Mode Embauche (Hire) : Entreprise, Type de contrat, Rémunération */
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                      {t.contactModal.labelCompany}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contactModal.placeholderCompany}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                        {t.contactModal.labelContract}
                      </label>
                      <select
                        value={formData.contractType}
                        onChange={(e) =>
                          setFormData({ ...formData, contractType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                      >
                        {siteConfig.contractTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                        {t.contactModal.labelSalary}
                      </label>
                      <select
                        value={formData.remuneration}
                        onChange={(e) =>
                          setFormData({ ...formData, remuneration: e.target.value })
                        }
                        className="w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-[#11192e] border border-white/10 text-white text-sm focus:outline-none focus:border-[#42aae1] transition-colors cursor-pointer"
                      >
                        {siteConfig.salaryRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Message / Description */}
              <div>
                <label className="block text-xs font-medium uppercase text-slate-300 tracking-wider mb-2">
                  {mode === "hire"
                    ? t.contactModal.labelMessageHire
                    : t.contactModal.labelMessageProject}
                </label>
                <textarea
                  rows={4}
                  required
                  maxLength={3000}
                  placeholder={
                    mode === "hire"
                      ? t.contactModal.placeholderMessageHire
                      : t.contactModal.placeholderMessageProject
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 sm:py-3 rounded-[10px] bg-white/[0.04] backdrop-blur-md border ${
                    fieldErrors.message ? "border-red-500" : "border-white/10"
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#42aae1] transition-colors resize-none`}
                />
                {fieldErrors.message && (
                  <p className="text-[11px] text-red-400 mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-3.5 rounded-[10px] bg-[#4f67e2] hover:bg-[#435ad4] text-white font-medium text-sm shadow-[0_4px_25px_rgba(79,103,226,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.contactModal.submittingText}</span>
                ) : (
                  <>
                    <span>
                      {mode === "hire"
                        ? (t.contactModal.tabHire)
                        : t.contactModal.submitText}
                    </span>
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
