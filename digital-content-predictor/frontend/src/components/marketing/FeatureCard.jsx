import React from "react";

export default function FeatureCard({ icon, iconClass, title, description, image }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${iconClass}`}><span className="text-xl" aria-hidden="true">{icon}</span></div>
      <div className={image ? "flex items-start gap-5" : ""}>
        <div className="flex-1"><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>
        {image && <div className="hidden w-48 overflow-hidden rounded-2xl sm:block"><img src={image} alt="AI generation" className="h-28 w-full object-cover" /></div>}
      </div>
    </article>
  );
}
