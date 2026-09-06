import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { contactRateLimiter } from "@/lib/rate-limiter";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Contrôle du type de contenu
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Format de requête non supporté. Attendu: application/json." },
        { status: 415 }
      );
    }

    // 2. Limitation de la taille du payload (max 15 KB)
    const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
    if (contentLength > 15 * 1024) {
      return NextResponse.json(
        { error: "Charge utile trop volumineuse (limite max: 15 KB)." },
        { status: 413 }
      );
    }

    // 3. Contrôle du Rate Limit par adresse IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
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

    // 4. Lecture et parsing du corps JSON
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Corps de requête JSON invalide." },
        { status: 400 }
      );
    }

    // 5. Validation de schéma avec Zod
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
        {
          error: "Certains champs sont invalides.",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 6. Piège Honeypot anti-bots
    if (data.website_hp && data.website_hp.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Demande reçue.",
      });
    }

    const isHireMode = data.mode === "hire";
    const subject = isHireMode
      ? `💼 [RECRUTEMENT] Proposition d'embauche de ${data.name}`
      : `🚀 [PROJET] Nouvelle demande de prestation de ${data.name}`;

    // 7. Formatage structuré pour WhatsApp (+229 94 34 80 96)
    const rawWhatsAppText =
      `Bonjour ChristΛll ! Je vous contacte depuis votre portfolio :\n\n` +
      `📌 *Type :* ${isHireMode ? "Opportunité d'Embauche / Recrutement" : "Nouveau Projet"}\n` +
      `👤 *Nom :* ${data.name}\n` +
      `📧 *Email :* ${data.email}\n` +
      (isHireMode && data.company ? `🏢 *Entreprise :* ${data.company}\n` : "") +
      (isHireMode && data.contractType ? `📋 *Contrat :* ${data.contractType}\n` : "") +
      (isHireMode && data.remuneration ? `💵 *Rémunération :* ${data.remuneration}\n` : "") +
      (!isHireMode && data.service ? `🎨 *Prestation :* ${data.service}\n` : "") +
      (!isHireMode && data.budget ? `💰 *Budget :* ${data.budget}\n` : "") +
      `\n💬 *Message :*\n${data.message}`;

    const targetPhoneDigits = siteConfig.phone.replace(/[^0-9]/g, "");
    const generatedWhatsAppUrl = `https://wa.me/${targetPhoneDigits}?text=${encodeURIComponent(rawWhatsAppText)}`;

    // 8. Envoi automatique de l'email vers cossouchristall@gmail.com
    // Tentative 1 : FormSubmit AJAX direct vers cossouchristall@gmail.com
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
          "Type de demande": isHireMode ? "Opportunité d'embauche" : "Nouveau projet",
          Nom: data.name,
          Email: data.email,
          ...(isHireMode
            ? {
                Entreprise: data.company || "Non précisée",
                "Type de contrat": data.contractType || "À définir",
                Rémunération: data.remuneration || "À définir",
              }
            : {
                Prestation: data.service || "Général",
                Budget: data.budget || "Non précisé",
              }),
          Message: data.message,
          Date: new Date().toLocaleString("fr-FR", { timeZone: "Africa/Porto-Novo" }),
        }),
      });
      console.info(`[Email Service] Notification expédiée vers ${siteConfig.email}`);
    } catch (err) {
      console.warn("[FormSubmit Error]:", err);
    }

    // Tentative 2 : Si la clé RESEND_API_KEY est configurée
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
            subject: subject,
            text: rawWhatsAppText,
          }),
        });
      } catch (err) {
        console.warn("[Resend Error]:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: isHireMode
          ? "Votre proposition d'embauche a été transmise avec succès par email et préparée pour WhatsApp !"
          : "Votre demande de projet a été transmise avec succès par email et préparée pour WhatsApp !",
        whatsappUrl: generatedWhatsAppUrl,
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
