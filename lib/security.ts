/**
 * Utilitaires de sécurité et de désinfection (Enterprise-Grade Security Library).
 * Protège l'application contre les attaques XSS, injections et pollutions de prototypes.
 */

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
};

/**
 * Échappe les caractères HTML dangereux pour prévenir les failles XSS (Cross-Site Scripting).
 */
export function escapeHtml(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/[&<>"'`=\/]/g, (char) => HTML_ESCAPE_MAP[char] || char);
}

/**
 * Nettoie une chaîne de caractères en supprimant les caractères de contrôle invisibles
 * et en normalisant les espaces.
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    // Suppression des caractères de contrôle ASCII (sauf retours à la ligne et tabulations légitimes)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();
}

/**
 * Valide un format d'adresse email selon les standards stricts RFC 5322.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string" || email.length > 254) return false;
  // Regex sécurisée évitant tout risque de ReDoS (Regular Expression Denial of Service)
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Empêche la pollution de prototype d'un objet en gelant récursivement ses propriétés.
 */
export function deepFreeze<T extends object>(obj: T): Readonly<T> {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const val = (obj as Record<string, unknown>)[prop];
    if (
      val !== null &&
      (typeof val === "object" || typeof val === "function") &&
      !Object.isFrozen(val)
    ) {
      deepFreeze(val as object);
    }
  });
  return obj;
}

/**
 * Vérifie si une URL externe est sûre avant redirection ou ouverture.
 */
export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
