import React from "react";

export default function AuthCard({ eyebrow, title, description, children }) {
  return <section className="w-full max-w-[470px] rounded-3xl border border-[#e5e3ef] bg-white p-6 shadow-[0_18px_50px_rgba(58,47,130,0.08)] sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7669d8]">{eyebrow}</p><h1 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#20213c]">{title}</h1><p className="mt-3 text-sm leading-6 text-[#85869a]">{description}</p>{children}</section>;
}
