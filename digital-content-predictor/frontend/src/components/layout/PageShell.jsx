import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import Sidebar from "./Sidebar.jsx";

const navItems = [
  ["Dashboard", "/dashboard"],
  ["Create Content", "/create-content"],
  ["My Plans", "/my-plans"],
  ["Saved Ideas", "/saved-ideas"],
  ["Pricing", "/pricing"],
];

export default function PageShell({ title, description, backTo = "/dashboard", children }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
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

  function handleSignOut() {
    signOut();
    navigate("/login", { replace: true });
  }

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

          <header className="border-b border-[#d9dbea] bg-white">
            <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
              <Link to="/dashboard" className="text-2xl font-bold tracking-tight text-[#4f46e5]">Meateka</Link>
              <nav className="hidden items-center gap-5 md:flex" aria-label="Application navigation">
                {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `text-sm font-semibold ${isActive ? "text-[#4f46e5]" : "text-[#667085] hover:text-[#4f46e5]"}`}>{label}</NavLink>)}
              </nav>
              <button type="button" onClick={handleSignOut} className="text-sm font-semibold text-[#4f46e5] hover:underline">Logout</button>
            </div>
          </header>
          <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
            <Link to={backTo} className="text-sm font-semibold text-[#4f46e5] hover:underline">← Back</Link>
            <h1 className="mt-6 text-3xl font-bold text-[#172033]">{title}</h1>
            {description && <p className="mt-2 text-sm leading-6 text-[#667085]">{description}</p>}
            <section className="mt-8 rounded-xl border border-[#d9dbea] bg-white p-6 shadow-sm sm:p-8">{children}</section>
          </div>
        </main>
      </div>
    </div>
  );
}
