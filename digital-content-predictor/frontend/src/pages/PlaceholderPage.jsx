import React from "react";
import { Link } from "react-router-dom";

export default function PlaceholderPage({ title, description }) {
  return (
    <main className="min-h-screen bg-[#faf9ff] px-5 py-16 text-[#172033] sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-[#3930d8]">Meateka</Link>
        <section className="mt-10 rounded-2xl border border-[#d9dbea] bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-[#667085]">{description}</p>
          <Link to="/" className="mt-6 inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Back to Home</Link>
        </section>
      </div>
    </main>
  );
}
