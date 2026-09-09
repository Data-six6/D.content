import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function CaptionHashtag() {
  return <PageShell title="Caption & Hashtag Generator" description="Create platform-ready captions and discover relevant hashtags for your content." backTo="/create-content"><Link to="/prediction" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Continue to Prediction</Link></PageShell>;
}
