import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import StatCard from "../components/dashboard/StatCard.jsx";
import RecentPlatforms from "../components/dashboard/RecentPlatforms.jsx";
import AIContent from "../components/ai/AIContent.jsx";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-[#fafaff] text-[#172033]">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="relative min-w-0 flex-1 transition-all duration-300 ease-in-out">
          {!isSidebarOpen && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
              className="fixed left-4 top-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d9dbea] bg-white text-xl font-bold text-[#4f46e5] shadow-sm transition-all duration-300 ease-in-out hover:bg-[#f2f3ff]"
            >
              ☰
            </button>
          )}

          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-30 bg-[#172033]/10 lg:hidden"
            />
          )}

          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-[#667085]">Welcome back</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">Ready to create your next content?</h1>
              </div>
              <button onClick={() => navigate("/create-content")} className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338ca]">
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
