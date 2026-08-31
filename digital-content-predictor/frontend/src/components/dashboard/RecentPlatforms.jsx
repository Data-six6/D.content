import React from "react";
import { Link } from "react-router-dom";

const plans = [
  { title: ["Q3", "Product", "Launch", "Series"], platforms: ["LinkedIn", "Twitter", "☆ LinkedIn"], engagement: "High", date: "Oct 12", progress: "w-[88%]", color: "bg-[#4f46e5]" },
  { title: ["Weekly", "Tech Tips"], platforms: ["Instagram", "TikTok", "☆ Instagram"], engagement: "Medium", date: "Oct 05", progress: "w-[57%]", color: "bg-[#8b87ed]" },
];

export default function RecentPlatforms() {
  return (
    <section id="dashboard" className="min-w-0 rounded-xl border border-[#d9dbea] bg-white shadow-sm">
      <div className="flex items-center justify-between bg-[#f8f8ff] px-5 py-4"><h2 className="text-base font-bold text-[#172033]">Recent Content Plans</h2><Link to="/my-plans" className="text-xs font-semibold text-[#4f46e5] hover:underline">View All</Link></div>
      <div>{plans.map((plan) => <article key={plan.date} className="grid min-w-0 gap-4 border-t border-[#eaebf2] px-5 py-5 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.5fr)] md:items-center xl:grid-cols-[minmax(120px,1.25fr)_minmax(150px,1.5fr)_minmax(110px,0.8fr)_auto]">
        <h3 className="flex min-w-0 flex-col text-sm font-bold leading-5 text-[#172033]">{plan.title.map((line) => <span key={line}>{line}</span>)}</h3>
        <div className="flex min-w-0 flex-wrap gap-1.5">{plan.platforms.map((platform) => <span key={platform} className="rounded-full bg-[#f1f2f8] px-2.5 py-1 text-[10px] font-medium text-[#667085]">{platform}</span>)}</div>
        <div className="min-w-0"><div className="flex justify-between text-[10px] text-[#667085]"><span>Eng. Predict</span><strong className={plan.engagement === "High" ? "text-[#12a77d]" : "text-[#d08a1e]"}>{plan.engagement}</strong></div><div className="mt-2 h-1.5 w-full rounded-full bg-[#ececf5]"><div className={`h-1.5 rounded-full ${plan.color} ${plan.progress}`} /></div></div>
        <time className="text-xs font-medium text-[#667085]">{plan.date}</time>
      </article>)}</div>
    </section>
  );
}
