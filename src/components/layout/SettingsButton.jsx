import React from "react";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SettingsButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Settings"
      onClick={() => navigate("/settings")}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-[#f1f2ff] hover:text-[#5146e5]"
    >
      <Settings size={18} strokeWidth={1.8} />
    </button>
  );
}
