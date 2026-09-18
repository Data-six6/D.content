import React, { useEffect, useMemo, useRef, useState } from "react";
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

// Generic dropdown filter used for category, platform, and date-sort controls.
// `options` is an array of { value, label }; the first entry is treated as the
// "default"/unfiltered state for styling purposes.
function FilterDropdown({ icon, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value) || options[0];
  const isActive = value !== options[0].value;
  const Icon = icon;

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-sm transition-colors whitespace-nowrap ${
          isActive
            ? "border-violet-200 bg-violet-50 text-violet-700"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        {Icon && <Icon size={15} className={isActive ? "text-violet-500" : "text-slate-400"} />}
        <span>{selected.label}</span>
        <ChevronDown size={14} className={isActive ? "text-violet-500" : "text-slate-400"} />
      </button>

      {open && (
        <div className="absolute left-0 z-10 mt-1.5 min-w-[10rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`block w-full px-3.5 py-2 text-left text-sm transition-colors ${
                opt.value === value
                  ? "bg-violet-50 font-medium text-violet-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
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

  // Search + filter state.
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [dateSort, setDateSort] = useState("newest");

  // Build dropdown options from whatever categories/platforms actually show
  // up in the saved plans, so the filters never offer choices with no results.
  const categoryOptions = useMemo(() => {
    const unique = Array.from(
      new Set(saved.map((p) => p.product_category).filter(Boolean))
    ).sort();
    return [
      { value: "all", label: "All Categories" },
      ...unique.map((c) => ({ value: c, label: c })),
    ];
  }, [saved]);

  const platformOptions = useMemo(() => {
    const unique = Array.from(
      new Set(saved.map((p) => p.plan_channel).filter(Boolean))
    ).sort();
    return [
      { value: "all", label: "All Platforms" },
      ...unique.map((p) => ({ value: p, label: p })),
    ];
  }, [saved]);

  const dateOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
  ];

  // Apply search text, category/platform filters, and date sort.
  const visiblePlans = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = saved.filter((plan) => {
      const matchesQuery = !q || String(plan.product_name ?? "").toLowerCase().includes(q);

      const matchesCategory =
        categoryFilter === "all" || plan.product_category === categoryFilter;

      const matchesPlatform =
        platformFilter === "all" || plan.plan_channel === platformFilter;

      return matchesQuery && matchesCategory && matchesPlatform;
    });

    list = [...list].sort((a, b) => {
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return dateSort === "newest" ? -diff : diff;
    });

    return list;
  }, [saved, query, categoryFilter, platformFilter, dateSort]);

  const hasActiveFilters =
    query.trim() !== "" || categoryFilter !== "all" || platformFilter !== "all";

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
      <div className="min-h-screen p-10 px-8 bg-white">
        {!selectedResult &&
        <div>
            <div className="border-b pb-4">
            <h1 className="text-xl font-semibold text-neutral-900 mb-1">Saved Plans</h1>
            <p className="text-sm text-neutral-500">
              Review and manage your past AI content analyses.
            </p>
          </div>
          </div>
        }
        
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search plans..."
                    className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-700"
                  />
                </div>
                <FilterDropdown
                  options={categoryOptions}
                  value={categoryFilter}
                  onChange={setCategoryFilter}
                />
                <FilterDropdown
                  options={platformOptions}
                  value={platformFilter}
                  onChange={setPlatformFilter}
                />
                <FilterDropdown
                  icon={Calendar}
                  options={dateOptions}
                  value={dateSort}
                  onChange={setDateSort}
                />
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

              {!loading && !error && saved.length > 0 && visiblePlans.length === 0 && (
                <div className="py-10 text-center text-sm text-slate-400">
                  <p>No plans match your search or filters.</p>
                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setCategoryFilter("all");
                        setPlatformFilter("all");
                      }}
                      className="mt-2 font-semibold text-violet-600 hover:text-violet-700"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              )}

              {/* Cards grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePlans.map((plan) => (
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