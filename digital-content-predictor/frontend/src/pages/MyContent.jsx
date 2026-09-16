import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import api from '../services/api';
import { Search, Download, SlidersHorizontal, ChevronDown, Calendar, Clock, RefreshCw, ArrowLeft, Star } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import ContentResult, { normalizePlan, hasRecommendations } from "../components/ai/ContentResult.jsx";


function HistoryRow({ item, onSelectResult, saved, onToggleSaved }) {
  // Shared normalizer so this page and the saved-ideas page agree on the shape.
  const combinedData = normalizePlan(item);
  const canView = hasRecommendations(item);

  const [savingStar, setSavingStar] = useState(false);

  const toggleSaved = async () => {
    if (savingStar) return;
    setSavingStar(true);
    try {
      await onToggleSaved(item, !saved);
    } finally {
      setSavingStar(false);
    }
  };

  return (
    

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-neutral-200 rounded-xl px-5 py-4">
      <div className="flex items-center gap-5   min-w-0">
        <button
          type="button"
          onClick={toggleSaved}
          disabled={savingStar}
          aria-label={saved ? "Remove from saved plans" : "Save this plan"}
          aria-pressed={saved}
          title={saved ? "Saved" : "Save this plan"}
          className={`shrink-0 transition-colors disabled:opacity-50 ${
            saved ? "text-yellow-400" : "text-neutral-300 hover:text-yellow-400"
          }`}
        >
          <Star size={20} fill={saved ? "currentColor" : "none"} strokeWidth={2} />
        </button>

        <div>
          <div className={`flex items-center justify-center text-center border w-fit h-fit rounded-2xl px-1.5 py-1.5 ${item.plan_channel === 'TikTok' ? 'bg-black my-1.5' : item.plan_channel === 'Instagram' ? 'my-1.5 bg-gradient-to-tr from-[#f58529] via-[#dd2c7c] to-[#8034b7]' : 'border-0'}`}>
                                {item.plan_channel === 'TikTok' ? <FaTiktok className="size-6 text-[#ffffff]" /> : item.plan_channel === 'Instagram' ? <FaInstagram className="size-6 text-[#ffffff]" /> : <FaFacebook color="#3525CD" className="size-9" />}
                              </div>
        </div>
       
       
        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-neutral-900 truncate">
            {item.product_name}
          </p>
          <div className="flex items-center gap-1.5 text-[13px] text-neutral-500 mt-0.5 flex-wrap">
            <span>{item.plan_channel}</span>
            <span className="text-neutral-300">•</span>
            <Clock size={12} className="text-neutral-400" />
            <span>{item.created_at}</span>
            <span className="text-neutral-300">•</span>
            <span>{item.product_category}</span>
          </div>
        </div>
      </div>
 
      <div className="flex items-center gap-4 sm:gap-5 shrink-0 justify-between sm:justify-end">
        <div className="text-right">
          <div
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-1 `}
          >
            
          </div>
          <p className="text-[13px] text-neutral-500 inline-flex items-center">
            Performance: <span className="font-semibold text-neutral-900">{item.performance}</span>
          </p>
        </div>
 
        <button
          type="button"
          aria-label="Re-run analysis"
          className="text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <RefreshCw size={16} />
        </button>
 
        <button
          type="button"
          disabled={!canView}
          className={`text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
            !canView 
              ? "bg-neutral-100 text-neutral-400 cursor-not-allowed" 
              : "bg-violet-50 text-violet-600 hover:bg-violet-100"
          }`}
          onClick={() => {
            if (canView) {
              onSelectResult(combinedData);
            }
          }}
        >
          {canView ? "View Results" : "No Results"}
        </button>
      </div>
    </div>




     


  )
}

export default function MyContent() {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedKey, setSelectedKey] = useState(0);
  const [savedIds, setSavedIds] = useState(() => new Set());
  const resultRef = useRef(null);




  const load = () => {
    setLoading(true);
    setError("");
    api.get('/plan/my-content')
    .then(({ data }) => { setHistory(data.history); })
    .catch(() => { setError("Failed to load your content plans."); })
    .finally(() => { setLoading(false); });
  };

  // No is_saved column on the history rows, so work out which plans are
  // already starred by pulling the saved list and matching on plan_id.
  const loadSavedIds = () => {
    api.get('/plan/saved-ideas')
      .then(({ data }) => {
        const rows = Array.isArray(data.saved) ? data.saved : [];
        setSavedIds(new Set(rows.map((row) => row.plan_id)));
      })
      .catch(() => { /* stars just stay grey if this fails */ });
  };

  useEffect(() => { load(); loadSavedIds(); }, []);

  const handleToggleSaved = async (item, next) => {
    // Optimistic: flip the star now, put it back if the request fails.
    setSavedIds((prev) => {
      const copy = new Set(prev);
      if (next) copy.add(item.plan_id);
      else copy.delete(item.plan_id);
      return copy;
    });

    try {
      if (next) {
        await api.post('/plan/saved', { plan_id: item.plan_id });
      } else {
        await api.delete(`/plan/delete-saved/${item.plan_id}`);
      }
    } catch {
      setSavedIds((prev) => {
        const copy = new Set(prev);
        if (next) copy.delete(item.plan_id);
        else copy.add(item.plan_id);
        return copy;
      });
    }
  };


  const handleSelectResult = (normalizedData) => {
    setSelectedResult(normalizedData);
    setSelectedKey((k) => k + 1);
    // Wait for the result to render, then scroll it into view.
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div>
      <PageShell title="" description="" backTo="/dashboard">
      
    <div className="min-h-screen bg-white">
      
 
      <div className=" mx-auto px-20 py-10 ">
        <div className="border-b border-neutral-200 pb-4 flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900 mb-1">History</h1>
            <p className="text-sm text-neutral-500">
              Review and manage your past AI content analyses.
            </p>
          </div>
          
          
        <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 max-w-xs text-sm text-neutral-400">
          <Search size={14} />
          <span>Search history...</span>
      </div>
        </div>
 
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="flex items-center gap-1.5 text-sm text-neutral-500 mr-1">
            <SlidersHorizontal size={14} />
            Filters
          </span>
          <button
            type="button"
            className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3.5 py-2 text-sm text-neutral-900 hover:bg-neutral-200/70 transition-colors"
          >
            All Platforms
            <ChevronDown size={12} />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3.5 py-2 text-sm text-neutral-900 hover:bg-neutral-200/70 transition-colors"
          >
            All Categories
            <ChevronDown size={12} />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3.5 py-2 text-sm text-neutral-900 hover:bg-neutral-200/70 transition-colors ml-auto"
          >
            Last 30 Days
            <Calendar size={14} />
          </button>
        </div>
 
        <div className="flex flex-col gap-3">
          {!selectedResult && history.map((item) => (
        <HistoryRow 
          key={item.plan_id} 
          item={item} 
          saved={savedIds.has(item.plan_id)}
          onToggleSaved={handleToggleSaved}
          onSelectResult={(normalizedData) => handleSelectResult(normalizedData)} 
        />
      ))}

      {/* Render the Result component if an item has been selected */}
      {selectedResult && (
        <div className="mt-8" ref={resultRef}>
          <button
            type="button"
            onClick={() => setSelectedResult(null)}
            className="flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to History
          </button>
          <ContentResult key={selectedKey} recommendationData={selectedResult} />
        </div>
      )}
        </div>
      </div>
    </div>
  

           </PageShell>

     
    </div>
  )






}