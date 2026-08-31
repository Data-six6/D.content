import React from "react";
import FeatureCard from "./FeatureCard.jsx";

const features = [
  ["⌁", "bg-indigo-50 text-indigo-600", "Audience Insights", "Deep dive into demographic data and behavioral patterns to understand exactly what your audience craves."],
  ["↗", "bg-sky-50 text-sky-600", "Trend Prediction", "Stay ahead of the curve with AI-driven forecasting that identifies emerging topics before they peak."],
  ["✣", "bg-red-50 text-red-600", "Multi-Platform Sync", "Seamlessly adapt and schedule your core message across every channel from a single, unified interface."],
  ["▣", "bg-red-50 text-red-500", "Performance Tracking", "Real-time metrics and custom reports that demonstrate the exact ROI of every piece of content published."],
];

export default function Features() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-8 text-center"><h2 className="text-3xl font-extrabold">Intelligent Content Planning</h2><p className="mt-2 text-sm text-slate-500">Everything you need to orchestrate a winning strategy.</p></div>
      <div className="grid gap-4 md:grid-cols-3">{features.slice(0, 3).map(([icon, iconClass, title, description]) => <FeatureCard key={title} {...{ icon, iconClass, title, description }} />)}</div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {features.slice(3).map(([icon, iconClass, title, description]) => <FeatureCard key={title} {...{ icon, iconClass, title, description }} />)}
        <FeatureCard icon="✦" iconClass="bg-indigo-50 text-indigo-600" title="AI Generation" description="Accelerate your workflow with intelligent drafts and variations tailored to your brand voice." image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80" />
      </div>
    </section>
  );
}
