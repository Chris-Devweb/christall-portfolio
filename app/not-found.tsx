import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3f519f]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#42aae1]/15 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3f519f]/20 text-[#42aae1] border border-[#42aae1]/30 uppercase tracking-widest inline-block mb-4">
          Erreur 404
        </span>

        <h1 className="text-6xl sm:text-8xl font-bold font-heading text-white tracking-tight mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-3 font-heading">
          Page introuvable
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée. Vous pouvez retourner en toute sécurité sur le portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-[10px] bg-[#3f519f] hover:bg-[#34468f] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Home size={16} />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <Link
            href="/#portfolio"
            className="w-full sm:w-auto px-6 py-3 rounded-[10px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Explorer les projets</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
