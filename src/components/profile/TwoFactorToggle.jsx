import React from "react";
import { Check } from "lucide-react";

export default function TwoFactorToggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${enabled ? "bg-[#5146e5]" : "bg-[#d9ddeb]"}`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`}
      >
        {enabled && <Check size={12} className="mx-auto mt-1 text-[#5146e5]" />}
      </span>
    </button>
  );
}
