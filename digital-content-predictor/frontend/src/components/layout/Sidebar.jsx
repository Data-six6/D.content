import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const items = [
  ["Dashboard", "▦", "/dashboard"],
  ["Create Content", "+", "/create-content"],
  ["My Plans", "▤", "/my-plans"],
  ["Saved Ideas", "♡", "/saved-ideas"],
  ["Pricing", "◇", "/pricing"],
  ["Profile", "◉", "/profile"],
];

export default function Sidebar({ isOpen = false, onClose }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/login", { replace: true });
    if (onClose) onClose();
  }

  return (
    <aside
      className={[
        "z-40 flex shrink-0 flex-col border-r border-[#d9dbea] bg-[#f2f3ff] shadow-sm transition-all duration-300 ease-in-out",
        "lg:static lg:inset-auto lg:h-screen",
        isOpen ? "w-[260px] translate-x-0" : "w-0 translate-x-[-100%] overflow-hidden border-r-0 lg:w-0 lg:translate-x-0",
        "fixed inset-y-0 left-0 lg:fixed lg:inset-y-0 lg:left-0",
      ].join(" ")}
    >
      <div className={[
        "flex min-h-20 items-center justify-between px-5 transition-opacity duration-300 lg:px-4 lg:pt-7",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}>
        <div>
          <div className="text-2xl font-bold tracking-tight text-[#4f46e5]">Meateka</div>
          <div className="mt-0.5 text-xs font-medium text-[#667085]">Creator Suite</div>
        </div>
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-semibold text-[#4f46e5] transition hover:bg-white/70"
        >
          ×
        </button>
      </div>

      <nav className={[
        "flex gap-1 overflow-x-auto px-3 pb-3 transition-opacity duration-300 lg:mt-10 lg:block lg:space-y-1 lg:overflow-visible",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")} aria-label="Dashboard navigation">
        {items.map(([label, icon, path]) => (
          <NavLink
            key={label}
            to={path}
            onClick={onClose}
            className={({ isActive }) => `flex min-w-fit items-center gap-3 rounded-r-lg px-3 py-2.5 text-xs font-medium transition lg:w-full ${isActive ? "border-l-2 border-[#4f46e5] bg-[#dddffb] text-[#4f46e5]" : "border-l-2 border-transparent text-[#667085] hover:bg-white/70 hover:text-[#4f46e5]"}`}
          >
            <span className="w-4 text-center text-base leading-none" aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className={[
        "mt-auto px-3 pb-4 pt-4 transition-opacity duration-300 lg:px-4 lg:pb-6",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}>
        <div className="flex items-center gap-2.5 border-t border-[#d9dbea] pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9dbff] text-[10px] font-bold text-[#4f46e5]">MC</div>
          <div className="min-w-0 flex-1"><div className="text-xs font-semibold text-[#172033]">Profile</div><div className="text-[10px] text-[#98a2b3]">Creator account</div></div>
          <button type="button" aria-label="Logout" onClick={handleSignOut} className="text-[10px] font-semibold text-[#4f46e5] hover:underline">Logout</button>
        </div>
      </div>
    </aside>
  );
}
