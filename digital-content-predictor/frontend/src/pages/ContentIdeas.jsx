import React, { useEffect, useRef, useState } from "react";
import PageShell from "../components/layout/PageShell.jsx";
import api from "../services/api";
import ContentResult, { normalizePlan, hasRecommendations } from "../components/ai/ContentResult.jsx";

import {
  Search,
  Calendar,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

// Left accent stripe colour, picked from the recommended platform.
const PLATFORM_COLORS = {
  TikTok: "#0f172a",
  Instagram: "#dd2c7c",
  Facebook: "#3525CD",
};

// "High" / "Medium" / "Low" -> arrow direction for the badge.
function trendFromPerformance(performance) {
  const value = String(performance || "").toLowerCase();
  if (value.includes("high")) return "up";
  if (value.includes("low")) return "down";
  return "flat";
}

function EngagementBadge({ level, trend }) {
  const isHigh = trend === "up";
  const isLow = trend === "down";
  const color = isHigh ? "text-emerald-600" : isLow ? "text-rose-500" : "text-slate-500";
  const Icon = isHigh ? TrendingUp : isLow ? TrendingDown : Minus;
  return (
    <div className={`flex items-center gap-1 text-sm font-semibold ${color}`}>
      <Icon size={14} strokeWidth={2.5} />
      <span>{level || "N/A"}</span>
    </div>
  );
}

function FilterButton({ label }) {
  return (
    <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors whitespace-nowrap">
      {label === "Date" && <Calendar size={15} className="text-slate-400" />}
      <span>{label}</span>
      {label !== "Date" && <ChevronDown size={14} className="text-slate-400" />}
    </button>
  );
}

function PlanCard({ plan, onSelectResult }) {
  // recommendations can come back as an array or a single object, so normalize
  // once here instead of reaching into it directly all over the card.
  const data = normalizePlan(plan);
  const canView = hasRecommendations(plan);
  const accent = PLATFORM_COLORS[data.platform] || "#6366f1";

  return (
    <div
      className="relative flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
      style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)" }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{ background: accent }}
      />
      <div className="flex flex-1 flex-col gap-3 p-5 pl-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] font-semibold leading-snug text-slate-900">
            {plan.product_name}
          </h3>
        </div>

        {plan.product_category && (
          <span className="inline-block w-fit rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
            {plan.product_category}
          </span>
        )}

        <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
          {plan.product_description}
        </p>

        <div className="mt-1 flex gap-3 border-t border-slate-100 pt-4">
          <div className="flex-1 rounded-lg bg-slate-50 px-3 py-2.5">
            <div className="text-xs text-slate-400">Best Platform</div>
            <div className="mt-0.5 text-sm font-semibold text-slate-800">
              {data.platform}
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-slate-50 px-3 py-2.5">
            <div className="text-xs text-slate-400">Predicted Engagement</div>
            <div className="mt-0.5">
              <EngagementBadge
                level={data.performance}
                trend={trendFromPerformance(data.performance)}
              />
            </div>
          </div>
        </div>

        <div className="mt-1 border-t border-slate-100 pt-3 text-xs text-slate-400">
          {data.time}
        </div>

        <button
          type="button"
          disabled={!canView}
          onClick={() => canView && onSelectResult(data)}
          className={`mt-auto w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            canView
              ? "bg-violet-50 text-violet-600 hover:bg-violet-100"
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
          }`}
        >
          {canView ? "View Results" : "No Results"}
        </button>
      </div>
    </div>
  );
}

export default function ContentPlanCards() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedKey, setSelectedKey] = useState(0);
  const resultRef = useRef(null);

  const load = () => {
    setLoading(true);
    setError("");
    api
      .get("/plan/saved-ideas")
      .then(({ data }) => {
        // Guard against the endpoint returning null/undefined for `saved`.
        setSaved(Array.isArray(data.saved) ? data.saved : []);
      })
      .catch(() => {
        setError("Failed to load your content plans.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const handleSelectResult = (normalizedData) => {
    setSelectedResult(normalizedData);
    setSelectedKey((k) => k + 1);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <PageShell title="" description="" backTo="/dashboard">
      <div className="min-h-screen p-10 px-20 bg-white">
        <div className="border-b pb-4">
            <h1 className="text-xl font-semibold text-neutral-900 mb-1">Saved Plans</h1>
            <p className="text-sm text-neutral-500">
              Review and manage your past AI content analyses.
            </p>
          </div>
        <div className="mx-auto mt-6">
          {selectedResult ? (
            <div ref={resultRef}>
              <button
                type="button"
                onClick={() => setSelectedResult(null)}
                className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Saved Plans
              </button>
              <ContentResult key={selectedKey} recommendationData={selectedResult} />
            </div>
          ) : (
            <>
              {/* Search + filters */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="flex flex-1 min-w-[200px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-400">
                  <Search size={16} />
                  <input
                    type="text"
                    placeholder="Search plans..."
                    className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-700"
                  />
                </div>
                <FilterButton label="All Categories" />
                <FilterButton label="All Platforms" />
                <FilterButton label="Date" />
              </div>

              {loading && (
                <p className="py-10 text-center text-sm text-slate-400">
                  Loading your saved plans...
                </p>
              )}

              {error && (
                <p className="py-10 text-center text-sm text-rose-500">{error}</p>
              )}

              {!loading && !error && saved.length === 0 && (
                <p className="py-10 text-center text-sm text-slate-400">
                  You haven't saved any content plans yet.
                </p>
              )}

              {/* Cards grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {saved.map((plan) => (
                  <PlanCard
                    key={plan.plan_id}
                    plan={plan}
                    onSelectResult={handleSelectResult}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageShell>
  );
}