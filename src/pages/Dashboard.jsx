import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Sidebar from "../components/layout/Sidebar.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";
import RecentPlatforms from "../components/dashboard/RecentPlatforms.jsx";
import AIContent from "../components/ai/AIContent.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const navigate = useNavigate();
  const { plan } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen bg-[#f4f6fb] pt-[72px] text-[#172033]">
      <div className="flex h-full min-h-0 overflow-hidden">

        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="relative min-w-0 flex-1 overflow-y-auto bg-[#f7f9fd] lg:ml-[180px]">

          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] lg:hidden"
            />
          )}

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

            {/* Header */}
            <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-[#667085]">
                  Welcome back
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-[-0.04em] text-[#172033] sm:text-4xl">
                  Ready to create your next content?
                </h1>

                <span className="mt-3 inline-flex rounded-full bg-[#eeecff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5146e5]">
                  {plan === "premium" ? "Pro plan active" : "Free plan"}
                </span>
              </div>

              {/* Create Content Button */}
              <button
                type="button"
                onClick={() => navigate("/create-content")}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.22)] transition hover:bg-[#4338ca]"
              >
                <span
                  className="text-lg leading-none"
                  aria-hidden="true"
                >
                  +
                </span>

                Create Content Plan
              </button>
            </header>

            {/* Statistics */}
            <section
              className="mt-8 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3"
              aria-label="Dashboard statistics"
            >
              {/* Content Plans */}
              <StatCard
                icon={
                  <CalendarDays
                    size={16}
                    strokeWidth={2}
                  />
                }
                iconClass="bg-[#eeedff] text-[#4f46e5]"
                label="Content Plans"
                value="12"
              />

              {/* Saved Ideas */}
              <StatCard
                icon={
                  <Lightbulb
                    size={16}
                    strokeWidth={2}
                  />
                }
                iconClass="bg-[#e7faf4] text-[#12a77d]"
                label="Saved Ideas"
                value="8"
              />

              {/* Predictions Used */}
              <StatCard
                icon={
                  <TrendingUp
                    size={16}
                    strokeWidth={2}
                  />
                }
                iconClass="bg-[#eeedff] text-[#4f46e5]"
                label="Predictions Used"
                value="45"
              />
            </section>

            {/* Recent Content + AI Content */}
            <section className="mt-8 grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">

              <RecentPlatforms />

              <AIContent />

            </section>

          </div>
        </main>
      </div>
    </div>
  );
}