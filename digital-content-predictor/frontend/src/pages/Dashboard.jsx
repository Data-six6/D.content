import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";
import RecentPlatforms from "../components/dashboard/RecentPlatforms.jsx";
import AIContent from "../components/ai/AIContent.jsx";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="relative min-w-0 flex-1 bg-[#f7f9fd]">
          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] lg:hidden"
            />
          )}

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-[#667085]">Welcome back</p>
                <h1 className="mt-1 text-3xl font-bold tracking-[-0.04em] text-[#172033] sm:text-4xl">Ready to create your next content?</h1>
              </div>
              <button onClick={() => navigate("/create-content")} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.22)] transition hover:bg-[#4338ca]">
                <span className="text-lg leading-none" aria-hidden="true">+</span>
                Create Content Plan
              </button>
            </header>

            <section className="mt-8 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3" aria-label="Dashboard statistics">
              <StatCard icon="▣" iconClass="bg-[#eeedff] text-[#4f46e5]" label="Content Plans" value="12" />
              <StatCard icon="✦" iconClass="bg-[#e7faf4] text-[#12a77d]" label="Saved Ideas" value="8" />
              <StatCard icon="↗" iconClass="bg-[#eeedff] text-[#4f46e5]" label="Predictions Used" value="45" />
            </section>

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
