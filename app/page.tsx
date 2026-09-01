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
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#060913]">
      {/* Floating Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section (Dark Theme) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* About Section (Light Theme) */}
        <About />

        {/* Expertise Section (Light Theme) */}
        <Expertise />

        {/* Portfolio / Selected Works Section (Light Theme) */}
        <Portfolio onOpenContact={handleOpenContact} />

        {/* Methodology Section (Light Theme) */}
        <Methodology />

        {/* Call To Action Section (Dark Theme with Glow) */}
        <ContactCTA onOpenContact={handleOpenContact} />
      </main>

      {/* Footer (Dark Theme) */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}
