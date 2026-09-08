import { z } from "zod";
import { siteConfig } from "@/data/site-config";
import { sanitizeString } from "@/lib/security";

export const contactFormSchema = z.object({
  mode: z.enum(["project", "hire"]).default("project"),
  name: z
    .string()
    .transform((val) => sanitizeString(val))
    .pipe(
      z
        .string()
        .min(2, "Le nom doit comporter au moins 2 caractères.")
        .max(100, "Le nom ne peut pas dépasser 100 caractères.")
    ),
  email: z
    .string()
    .transform((val) => sanitizeString(val).toLowerCase())
    .pipe(
      z
        .string()
        .email("Veuillez renseigner une adresse email valide.")
        .max(254, "L'adresse email est trop longue.")
    ),
  phone: z
    .string()
    .transform((val) => sanitizeString(val))
    .pipe(
      z
        .string()
        .min(6, "Veuillez renseigner un numéro de téléphone valide (au moins 6 caractères).")
        .max(30, "Le numéro de téléphone ne peut pas dépasser 30 caractères.")
    ),
  // Champs spécifiques au mode Projet
  service: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),

  // Champs spécifiques au mode Recrutement / Embauche (Hire)
  company: z
    .string()
    .max(150)
    .transform((val) => sanitizeString(val))
    .optional(),
  contractType: z.string().max(100).optional(),
  remuneration: z.string().max(100).optional(),

  message: z
    .string()
    .transform((val) => sanitizeString(val))
    .pipe(
      z
        .string()
        .min(10, "Veuillez préciser votre demande (au moins 10 caractères).")
        .max(3000, "Le message ne peut pas dépasser 3000 caractères.")
    ),
  // Champ honeypot invisible pour contrer les bots d'indexation
  website_hp: z.string().max(0, "Tentative de soumission non autorisée.").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
