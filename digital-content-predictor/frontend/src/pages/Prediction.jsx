import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function Prediction() {
  return <PageShell title="Content Prediction" description="Review predicted engagement and refine your plan before publishing." backTo="/create-content"><Link to="/my-plans" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Save to My Plans</Link></PageShell>;
}
