import React from "react";
import { Check, Sparkles } from "lucide-react";

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  current = false,
  disabled = false,
  buttonLabel,
  onSelect,
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[24px] border p-6 shadow-[0_12px_30px_rgba(60,60,120,0.05)] sm:p-7 ${popular ? "border-[#d8d5ff] bg-[#f7f5ff]" : "border-[#e0e3f0] bg-white"}`}
    >
      {popular && (
        <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-[#5146e5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
          <Sparkles size={11} /> Most popular
        </span>
      )}
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#71809c]">
        {name}
      </p>
      <p className="mt-5 text-4xl font-extrabold tracking-tight text-[#111827]">
        {price}
      </p>
      <p className="mt-2 min-h-12 text-sm leading-6 text-[#64748b]">
        {description}
      </p>
      <button
        type="button"
        onClick={onSelect}
        disabled={disabled}
        className={`mt-7 h-11 w-full rounded-xl text-sm font-bold transition ${disabled ? "cursor-default border border-[#d8ddec] bg-white text-[#71809c]" : popular ? "bg-[#5146e5] text-white shadow-[0_10px_22px_rgba(81,70,229,0.2)] hover:bg-[#4539d0]" : "border border-[#d8ddec] bg-white text-[#1e293b] hover:bg-[#f8f9ff]"}`}
      >
        {buttonLabel || (current ? "Current Plan" : "Upgrade to Pro")}
      </button>
      <div className="my-7 h-px bg-[#e8ebf3]" />
      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#71809c]">
        What&apos;s included
      </p>
      <ul className="mt-5 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-[#334155]"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eeecff] text-[#5146e5]">
              <Check size={12} strokeWidth={2.3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
