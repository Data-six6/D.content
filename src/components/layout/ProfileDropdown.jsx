import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Settings, UserRound, CreditCard } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function ProfileDropdown({ user, onClose }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
    onClose();
    navigate("/login", { replace: true });
  }

  return (
    <div className="absolute right-0 top-11 z-50 w-56 rounded-2xl border border-[#e4e7f1] bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="border-b border-[#edf0f6] px-3 py-2">
        <p className="truncate text-xs font-extrabold text-[#172033]">
          {user?.name || "User"}
        </p>
        <p className="truncate text-[11px] text-[#71809c]">{user?.email}</p>
      </div>
      <nav className="pt-1" aria-label="Account menu">
        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"
        >
          <UserRound size={15} />
          Profile
        </Link>
        <Link
          to="/settings"
          onClick={onClose}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"
        >
          <Settings size={15} />
          Settings
        </Link>
        <Link
          to="/pricing"
          onClick={onClose}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"
        >
          <CreditCard size={15} />
          Subscription
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#475569] transition hover:bg-[#fff1f3] hover:text-[#c2415b]"
        >
          <LogOut size={15} />
          Logout
        </button>
      </nav>
    </div>
  );
}
