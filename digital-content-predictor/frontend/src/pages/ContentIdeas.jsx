import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function ContentIdeas() {
  return <PageShell title="Saved Ideas" description="Review and develop content ideas generated for your audience." backTo="/dashboard"><Link to="/create-content" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Create from an Idea</Link></PageShell>;
}
