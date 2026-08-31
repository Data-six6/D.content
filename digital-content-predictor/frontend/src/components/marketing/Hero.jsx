import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 sm:pt-8">
      <div className="grid items-center gap-10 border-x border-sky-300 px-5 py-8 sm:px-9 sm:py-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">Create Smarter Content<br />for the Right Audience</h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">Meateka uses advanced intelligence to analyze your audience, predict trends, and optimize your content strategy across all platforms. Stop guessing, start growing.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/login" className="rounded-full bg-[#3930d8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2e27b8]">Get Started Free</Link>
            <Link to="/solutions" className="rounded-full bg-[#f0ecff] px-6 py-3 text-sm font-semibold text-[#3930d8] transition hover:bg-[#e5dfff]">View Solutions</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[34px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="Analytics dashboard" className="h-64 w-full object-cover sm:h-80" />
        </div>
      </div>
    </section>
  );
}
