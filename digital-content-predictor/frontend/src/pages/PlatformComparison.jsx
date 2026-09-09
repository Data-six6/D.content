import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function PlatformComparison() {
  return <PageShell title="Platform Comparison" description="Compare channels and select the platforms that best fit your audience." backTo="/create-content"><Link to="/posting" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Continue to Posting Time</Link></PageShell>;
}
