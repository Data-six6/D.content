import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import PricingCard from "../components/subscription/PricingCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Pricing() {
  const navigate = useNavigate();
  const { plan } = useAuth();
  const [billing, setBilling] = useState("monthly");
  const isPremium = plan === "premium";

  function startCheckout() {
    navigate("/checkout", { state: { billing } });
  }

  return <PageShell title="Pricing" description="Choose the tools that match the way you create and grow.">
    <div className="mx-auto max-w-5xl">
      <div className="text-center"><span className="inline-flex items-center gap-2 rounded-full border border-[#d9d5ff] bg-[#f5f3ff] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5146e5]"><BadgeCheck size={14} />Flexible plans</span><h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">Simple, transparent pricing</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#64748b]">Start free, then unlock deeper intelligence when your content strategy is ready to scale.</p><div className="mt-6 inline-flex rounded-full border border-[#dce0ef] bg-[#f8f9ff] p-1"><button type="button" onClick={() => setBilling("monthly")} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${billing === "monthly" ? "bg-[#5146e5] text-white shadow-sm" : "text-[#475569] hover:text-[#111827]"}`}>Monthly</button><button type="button" onClick={() => setBilling("annual")} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${billing === "annual" ? "bg-[#5146e5] text-white shadow-sm" : "text-[#475569] hover:text-[#111827]"}`}>Annual <span className={`ml-1 rounded-full px-2 py-0.5 text-[9px] ${billing === "annual" ? "bg-white/20 text-white" : "bg-[#eeecff] text-[#5146e5]"}`}>SAVE 20%</span></button></div></div>
      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2"><PricingCard name="Free" price="$0" description="For creators building a consistent publishing habit." current={!isPremium} disabled buttonLabel="Current Plan" onSelect={() => {}} features={["10 Content Analyses / mo", "2 Platforms Supported", "Basic AI Suggestions", "Standard support"]} /><PricingCard name="Pro" price={billing === "annual" ? "$23/mo" : "$29/mo"} description="For creators ready to turn content into momentum." popular current={isPremium} buttonLabel={isPremium ? "Change billing" : "Upgrade to Pro"} onSelect={startCheckout} features={["Unlimited Content Analyses", "All Platforms Supported", "Deep AI Insights & Trends", "Priority Support", "Unlimited saved ideas"]} /></div>
    </div>
  </PageShell>;
}
