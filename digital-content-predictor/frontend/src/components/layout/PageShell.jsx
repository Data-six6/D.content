import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

export default function PageShell({ title, description, backTo = "/dashboard", children }) {
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

          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <Link to={backTo} className="text-sm font-semibold text-[#4f46e5] hover:underline">← Back</Link>
            <h1 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-[#172033]">{title}</h1>
            {description && <p className="mt-2 text-sm leading-6 text-[#667085]">{description}</p>}
            <section className="mt-8 rounded-[28px] border border-[#e4e7f1] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] sm:p-8">{children}</section>
          </div>
        </main>
      </div>
    </div>
  );
}
