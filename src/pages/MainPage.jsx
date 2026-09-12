import React from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import FeaturesSection from "../components/home/FeaturesSection.jsx";
import HomeCTA from "../components/home/HomeCTA.jsx";

export default function MainPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaff] text-[#20233d]">
      <main>
        <HeroSection />
        <FeaturesSection />
        <HomeCTA />
      </main>
    </div>
  );
}
