/**
 * API Route : POST /api/contact
 *
 * Parcours de traitement d'une demande entrante :
 *   1. Vérification du Content-Type (application/json uniquement)
 *   2. Contrôle de la taille du payload (max 15 KB)
 *   3. Rate limiting par adresse IP (anti-spam)
 *   4. Parsing et validation du corps JSON (Zod)
 *   5. Piège Honeypot anti-bots
 *   6. Enregistrement dans Supabase (table `prospects`)
 *   7. Envoi d'une notification email via FormSubmit
 *   8. Envoi optionnel via Resend (si RESEND_API_KEY est configuré)
 *   9. Renvoi d'une URL WhatsApp pré-remplie au client
 *
 * Variables d'environnement requises :
 *   - SUPABASE_URL          → URL de ton projet Supabase
 *   - SUPABASE_SERVICE_KEY  → Clé service_role Supabase (serveur uniquement)
 *   - RESEND_API_KEY        → (optionnel) clé API Resend pour backup email
 */

import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { contactRateLimiter } from "@/lib/rate-limiter";
import { siteConfig } from "@/data/site-config";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/**
 * Construit un objet de prospect normalisé prêt à être
 * inséré dans la table `prospects` de Supabase.
 */
function buildProspectRecord(data: ReturnType<typeof contactFormSchema.parse>) {
  const isHire = data.mode === "hire";
  return {
    mode: data.mode,
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    // Champs projet
    service: !isHire ? (data.service ?? null) : null,
    budget: !isHire ? (data.budget ?? null) : null,
    // Champs embauche
    company: isHire ? (data.company ?? null) : null,
    contract_type: isHire ? (data.contractType ?? null) : null,
    remuneration: isHire ? (data.remuneration ?? null) : null,
    // Métadonnées
    status: "new" as const,
    // created_at est généré côté Supabase (DEFAULT now())
  };
}

/**
 * Construit le texte brut WhatsApp pour la notification manuelle.
 */
function buildWhatsAppText(
  data: ReturnType<typeof contactFormSchema.parse>,
  isHire: boolean
): string {
  return (
    `Bonjour ChristΛll ! Je vous contacte depuis votre portfolio :\n\n` +
    `📌 *Type :* ${isHire ? "Opportunité d'Embauche / Recrutement" : "Nouveau Projet"}\n` +
    `👤 *Nom :* ${data.name}\n` +
    `📧 *Email :* ${data.email}\n` +
    `📞 *Téléphone :* ${data.phone}\n` +
    (isHire && data.company ? `🏢 *Entreprise :* ${data.company}\n` : "") +
    (isHire && data.contractType ? `📋 *Contrat :* ${data.contractType}\n` : "") +
    (isHire && data.remuneration ? `💵 *Rémunération :* ${data.remuneration}\n` : "") +
    (!isHire && data.service ? `🎨 *Prestation :* ${data.service}\n` : "") +
    (!isHire && data.budget ? `💰 *Budget :* ${data.budget}\n` : "") +
    `\n💬 *Message :*\n${data.message}`
  );
}

// ─────────────────────────────────────────────
// Handler principal
// ─────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── Étape 1 : Vérification du Content-Type ──────────────────────────────
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Format de requête non supporté. Attendu: application/json." },
        { status: 415 }
      );
    }

    // ── Étape 2 : Limite de taille du payload (max 15 KB) ───────────────────
    const contentLength = parseInt(req.headers.get("content-length") ?? "0", 10);
    if (contentLength > 15 * 1024) {
      return NextResponse.json(
        { error: "Charge utile trop volumineuse (limite max: 15 KB)." },
        { status: 413 }
      );
    }

    // ── Étape 3 : Rate Limiting par IP ──────────────────────────────────────
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "127.0.0.1";

    const rateLimit = contactRateLimiter.check(clientIp);

    if (!rateLimit.success) {
      const retryAfterSeconds = Math.ceil((rateLimit.resetTime - Date.now()) / 1000);
      return NextResponse.json(
        {
          error:
            "Trop de demandes envoyées en peu de temps. Veuillez patienter avant de réitérer.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": retryAfterSeconds.toString(),
            "X-RateLimit-Limit": rateLimit.limit.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimit.resetTime.toString(),
          },
        }
      );
    }

    // ── Étape 4 : Parsing JSON ───────────────────────────────────────────────
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Corps de requête JSON invalide." },
        { status: 400 }
      );
    }

    // ── Étape 5 : Validation Zod ─────────────────────────────────────────────
    const validationResult = contactFormSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (typeof path === "string") {
          fieldErrors[path] = issue.message;
        }
      });

      return NextResponse.json(
        { error: "Certains champs sont invalides.", details: fieldErrors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // ── Étape 6 : Piège Honeypot anti-bots ──────────────────────────────────
    // Si le champ caché `website_hp` est rempli, c'est un bot → réponse leurre.
    if (data.website_hp && data.website_hp.length > 0) {
      return NextResponse.json({ success: true, message: "Demande reçue." });
    }

    const isHire = data.mode === "hire";
    const subject = isHire
      ? `💼 [RECRUTEMENT] Proposition d'embauche de ${data.name}`
      : `🚀 [PROJET] Nouvelle demande de prestation de ${data.name}`;

    // ── Étape 7 : Enregistrement dans Supabase ───────────────────────────────
    // On insère le prospect AVANT l'envoi email.
    // En cas d'échec Supabase, on logue l'erreur mais on continue
    // pour ne pas bloquer la notification email (fail-soft).
    let prospectId: string | null = null;
    try {
      const { data: insertedRow, error: supabaseError } = await supabaseAdmin
        .from("prospects")
        .insert(buildProspectRecord(data))
        .select("id")
        .single();

      if (supabaseError) {
        // Non-bloquant : l'email part quand même
        console.error("[Supabase Insert Error]:", supabaseError.message);
      } else {
        prospectId = insertedRow?.id ?? null;
        console.info(`[Supabase] Prospect enregistré avec l'ID : ${prospectId}`);
      }
    } catch (err) {
      console.error("[Supabase Unexpected Error]:", err);
    }

    // ── Étape 8 : Génération de l'URL WhatsApp ───────────────────────────────
    const whatsAppText = buildWhatsAppText(data, isHire);
    const targetPhoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${targetPhoneDigits}?text=${encodeURIComponent(whatsAppText)}`;

    // ── Étape 9 : Notification email via FormSubmit ──────────────────────────
    try {
      await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: siteConfig.url,
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          "Type de demande": isHire ? "Opportunité d'embauche" : "Nouveau projet",
          Nom: data.name,
          Email: data.email,
          Téléphone: data.phone,
          ...(isHire
            ? {
                Entreprise: data.company ?? "Non précisée",
                "Type de contrat": data.contractType ?? "À définir",
                Rémunération: data.remuneration ?? "À définir",
              }
            : {
                Prestation: data.service ?? "Général",
                Budget: data.budget ?? "Non précisé",
              }),
          Message: data.message,
          "ID Prospect": prospectId ?? "Non enregistré",
          Date: new Date().toLocaleString("fr-FR", {
            timeZone: "Africa/Porto-Novo",
          }),
        }),
      });
      console.info(`[FormSubmit] Email envoyé à ${siteConfig.email}`);
    } catch (err) {
      console.warn("[FormSubmit Error]:", err);
    }

    // ── Étape 10 : Backup email via Resend (optionnel) ───────────────────────
    // Activé uniquement si la variable RESEND_API_KEY est définie dans l'env.
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Christall <onboarding@resend.dev>",
            to: [siteConfig.email],
            reply_to: data.email,
            subject,
            text: whatsAppText,
          }),
        });
      } catch (err) {
        console.warn("[Resend Error]:", err);
      }
    }

    // ── Réponse finale ───────────────────────────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: isHire
          ? "Votre proposition d'embauche a été transmise avec succès !"
          : "Votre demande de projet a été transmise avec succès !",
        whatsappUrl,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-RateLimit-Limit": rateLimit.limit.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          "X-RateLimit-Reset": rateLimit.resetTime.toString(),
        },
      }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue. Veuillez réessayer ultérieurement." },
      { status: 500 }
    );
  }
}
