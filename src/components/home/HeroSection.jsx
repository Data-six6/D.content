import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardPreview from "./DashboardPreview.jsx";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="scroll-mt-24 bg-[radial-gradient(circle_at_82%_18%,#eeeaff_0,transparent_34%),linear-gradient(180deg,#fbfaff_0%,#f8f7ff_100%)] pt-[72px]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dcd7ff] bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#6d5ce7] shadow-sm">
            <Sparkles size={13} /> INTRODUCING PREDICTOR SCORE
          </div>
          <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[#20213c] sm:text-6xl">
            Smarter Content,
            <br />
            <span className="text-[#6d5ce7]">Faster Growth.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#74758b]">
            The AI content engine that analyzes, plans, and predicts performance
            before you publish. Stop guessing and start growing with Meateka.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/create-content")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#6d5ce7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(109,92,231,0.25)] transition hover:bg-[#5948d6]"
            >
              Start Free Trial <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-xl border border-[#dedcf0] bg-white px-5 py-3.5 text-sm font-bold text-[#383953] transition hover:border-[#bfb7fa]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0edff] text-[#6d5ce7]">
                <Play size={11} fill="currentColor" />
              </span>
              Watch Demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#f1b996", "#d88c72", "#f0c6a5", "#94614d"].map(
                (color, index) => (
                  <span
                    key={color}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fbfaff] text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "M", "J", "S"][index]}
                  </span>
                ),
              )}
            </div>
            <p className="text-xs text-[#85869a]">
              Trusted by{" "}
              <strong className="text-[#45465e]">10,000+ creators</strong>
            </p>
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}
