import React from "react";

export default function StatCard({ icon, iconClass, label, value }) {
  return (
    <article className="rounded-xl border border-[#d9dbea] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconClass}`}><span className="text-xl" aria-hidden="true">{icon}</span></div>
        <div><p className="text-sm text-[#667085]">{label}</p><p className="mt-1 text-3xl font-bold tracking-tight text-[#172033]">{value}</p></div>
      </div>
    </article>
  );
}
