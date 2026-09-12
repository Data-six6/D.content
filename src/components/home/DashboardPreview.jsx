import React from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="relative rounded-[28px] border border-[#dedcff] bg-white p-3 shadow-[0_24px_70px_rgba(75,64,160,0.15)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[#efeff8] pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#20233d]">
          <span className="h-2 w-2 rounded-full bg-[#735fe8]" />
          Content Dashboard
        </div>
        <span className="rounded-full bg-[#e7fbf5] px-2.5 py-1 text-[9px] font-bold text-[#19977e]">
          +24% Growth
        </span>
      </div>
      <p className="mt-4 text-xs text-slate-400">
        Overview of your upcoming strategy
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#f7f6ff] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Predictor Score
          </p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <p className="text-3xl font-extrabold text-[#242541]">92</p>
              <p className="mt-1 text-xs font-semibold text-[#27a28d]">
                Excellent
              </p>
            </div>
            <TrendingUp size={20} className="text-[#6d5ce7]" />
          </div>
        </div>
        <div className="rounded-2xl border border-[#eeeef7] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Next Post Timing
          </p>
          <p className="mt-3 text-2xl font-extrabold text-[#242541]">14:30</p>
          <p className="mt-1 text-xs text-slate-400">Today</p>
          <div className="mt-3 h-1.5 rounded-full bg-[#ebeafd]">
            <div className="h-full w-4/5 rounded-full bg-[#735fe8]" />
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-2xl border border-[#eeeef7] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              AI Topic Analysis: Q3 Trends
            </p>
            <p className="mt-2 text-xs leading-5 text-[#4d4e68]">
              High engagement potential detected for{" "}
              <span className="font-bold text-[#6d5ce7]">
                &quot;AI Productivity&quot;
              </span>{" "}
              keywords.
            </p>
          </div>
          <Sparkles size={19} className="shrink-0 text-[#e39b3c]" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#eeeaff] px-2.5 py-1 text-[9px] font-bold text-[#6355dc]">
            High Intent
          </span>
          <span className="rounded-full bg-[#e7fbf5] px-2.5 py-1 text-[9px] font-bold text-[#19977e]">
            Trending
          </span>
          <span className="rounded-full bg-[#fff2df] px-2.5 py-1 text-[9px] font-bold text-[#b86c12]">
            Q3
          </span>
        </div>
      </div>
    </div>
  );
}
