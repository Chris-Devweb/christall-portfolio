import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://christall.design"),
  title: "ChristΛll. — Designer UI/UX & Identité Visuelle",
  description:
    "Portfolio officiel de ChristΛll. Designer UI/UX et Brand Designer passionné par l'impact visuel et l'expérience utilisateur. Je transforme les idées en identités qui marquent.",
  keywords: [
    "ChristAll",
    "ChristΛll",
    "Designer UI/UX",
    "Brand Designer",
    "Identité Visuelle",
    "Design Graphique",
    "Portfolio Design",
    "Direction Artistique",
  ],
  authors: [{ name: "ChristΛll." }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/Logo.svg", type: "image/svg+xml" },
      { url: "/Logo.png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "ChristΛll. — Designer UI/UX & Identité Visuelle",
    description:
      "Je transforme les idées en identités qui marquent. Découvrez les projets et l'expertise de ChristΛll.",
    url: "https://christall.design",
    siteName: "ChristΛll. Portfolio",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "ChristΛll. Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0B1020] text-[#1e293b] font-sans selection:bg-[#42aae1] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
