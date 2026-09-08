/**
 * Client Supabase côté serveur (Server-only).
 *
 * Ce fichier ne doit JAMAIS être importé dans un composant client ("use client").
 * Il utilise la clé SERVICE_ROLE pour bypasser les politiques RLS,
 * ce qui est sécurisé uniquement côté serveur (API Routes, Server Actions).
 *
 * Variables d'environnement requises (dans .env.local et dans Vercel) :
 *  - SUPABASE_URL       : URL de ton projet Supabase (ex: https://xxxx.supabase.co)
 *  - SUPABASE_SERVICE_KEY : Clé service_role (secret, jamais exposée côté client)
 */

import { createClient } from "@supabase/supabase-js";

// Validation des variables d'environnement au démarrage du serveur
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "[Supabase] Variable d'environnement manquante : SUPABASE_URL. " +
      "Vérifiez votre fichier .env.local ou les variables d'environnement Vercel."
  );
}

if (!supabaseServiceKey) {
  throw new Error(
    "[Supabase] Variable d'environnement manquante : SUPABASE_SERVICE_KEY. " +
      "Vérifiez votre fichier .env.local ou les variables d'environnement Vercel."
  );
}

/**
 * Instance Supabase admin, à usage exclusif côté serveur.
 * Utiliser la clé service_role permet d'écrire sans restriction de RLS.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    // Désactivé : on ne gère pas de sessions utilisateur côté serveur ici
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
