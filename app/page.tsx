"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import Methodology from "@/components/Methodology";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ContactModal, { ContactModalMode } from "@/components/ContactModal";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalMode, setContactModalMode] = useState<ContactModalMode>("project");
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenContact = (mode: ContactModalMode = "project") => {
    setContactModalMode(mode);
    setIsContactModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setContactModalMode("project");
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#060913]">
      {/* Floating Navigation */}
      <Navbar onOpenContact={() => handleOpenContact("project")} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section (Dark Theme avec boutons Embauche, Projet, Portfolio) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* About Section (Light Theme) */}
        <About />

        {/* Expertise Section (Light Theme) */}
        <Expertise onSelectService={handleSelectService} />

        {/* Portfolio / Selected Works Section (Light Theme) */}
        <Portfolio onOpenContact={() => handleOpenContact("project")} />

        {/* Methodology Section (Light Theme) */}
        <Methodology />

        {/* Call To Action Section (Dark Theme with Glow) */}
        <ContactCTA onOpenContact={() => handleOpenContact("project")} />
      </main>

      {/* Footer (Dark Theme) */}
      <Footer />

      {/* Interactive Contact & Hire Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        initialMode={contactModalMode}
        initialService={selectedService}
        onClose={handleCloseContact}
      />
    </div>
  );
}
