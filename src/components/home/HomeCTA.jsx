import React from "react";
import { ArrowRight, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeCTA() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f8f7ff] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6d5ce7] shadow-sm">
          <Target size={13} /> AI-Powered Content Engine
        </span>
        <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
          Intelligence that drives your content strategy.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500">
          Move beyond guesswork. Meateka analyzes, predicts, and optimizes every
          piece of content before you hit publish.
        </p>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#6d5ce7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(109,92,231,0.2)] transition hover:bg-[#5948d6]"
        >
          Explore Dashboard <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
