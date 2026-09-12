import React from "react";
import { Link } from "react-router-dom";

export default function AIContent() {
  return (
    <aside className="flex flex-col items-center rounded-xl border border-[#d9dbea] bg-[#eeefff] p-6 text-center shadow-sm xl:min-h-[260px]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#4f46e5] shadow-sm" aria-hidden="true">✦</div>
      <h2 className="mt-5 text-xl font-bold leading-6 text-[#172033]">Don't know what to<br />post?</h2>
      <p className="mt-3 text-xs leading-5 text-[#667085]">Let our AI analyze your niche and<br />suggest high-performing content<br />ideas instantly.</p>
      <Link to="/content-ideas" className="mt-auto inline-flex items-center gap-2 rounded-lg border border-[#d9dbea] bg-white px-4 py-2.5 text-xs font-semibold text-[#4f46e5] shadow-sm transition hover:bg-[#f8f8ff]"><span className="text-base" aria-hidden="true">✦</span>Get a Content Idea</Link>
    </aside>
  );
}
