import React from "react";
import FeaturesSection from "./FeaturesSection.jsx";

export default function Feature() {
  return (
    <div className="min-h-screen bg-[#f8f8fc]">

      {/* Page Header */}
      <section className="px-6 pb-8 pt-24 text-center">
        <div className="mx-auto max-w-3xl">

          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Powerful Features
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Everything you need to grow your content
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Make smarter content decisions with AI-powered insights,
            predictions, and analytics designed to improve your social
            media performance.
          </p>

        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#f8f8fc] px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-gray-500 md:flex-row">

          <p>
            &copy; 2024 Meateka AI Analysis. All rights reserved.
          </p>

          <div className="flex gap-5 underline">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Support</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
