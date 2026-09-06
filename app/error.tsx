"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Journalisation sécurisée de l'incident côté client sans exposer de données sensibles
    console.error("[Application Boundary Intercepted]:", error.message);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto p-6 rounded-3xl bg-[#0e162e]/70 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto mb-4">
          <AlertTriangle size={28} />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
          Une anomalie inattendue est survenue
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
          L&apos;application a intercepté une erreur pour préserver la stabilité du système. Vous pouvez tenter de rafraîchir l&apos;interface ou retourner à la page principale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-[10px] bg-[#3f519f] hover:bg-[#34468f] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <RefreshCw size={15} />
            <span>Réessayer</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Home size={15} />
            <span>Accueil</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
