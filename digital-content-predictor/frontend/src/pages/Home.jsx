import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/marketing/Hero.jsx";
import Features from "../components/marketing/Features.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9ff] text-[#17233d]">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
