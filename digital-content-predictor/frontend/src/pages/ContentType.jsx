import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function ContentType() {
  return <PageShell title="Create Content" description="Choose a content format to start building your next content plan." backTo="/dashboard"><div className="flex flex-wrap gap-3"><Link to="/platform" className="rounded-lg border border-[#cfd2e3] px-4 py-2.5 text-sm font-semibold text-[#4f46e5] hover:bg-[#f2f3ff]">Compare Platforms</Link><Link to="/posting" className="rounded-lg border border-[#cfd2e3] px-4 py-2.5 text-sm font-semibold text-[#4f46e5] hover:bg-[#f2f3ff]">Choose Posting Time</Link><Link to="/prediction" className="rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">View Prediction</Link></div></PageShell>;
}
