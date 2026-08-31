import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";

export default function MyContent() {
  return <PageShell title="My Content Plans" description="Keep track of your planned and published content in one place." backTo="/dashboard"><Link to="/create-content" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Create a New Plan</Link></PageShell>;
}
