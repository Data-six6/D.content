import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Pricing() {
  const navigate = useNavigate();
  const { plan } = useAuth();

  const [billing, setBilling] = useState("monthly");

  const isPremium = plan === "premium";

  function startCheckout() {
    navigate("/checkout", {
      state: {
        billing,
        plan: "premium",
      },
    });
  }

  const premiumPrice = billing === "monthly" ? "$9.99" : "$7.99";

  return (
    <PageShell
      title="Pricing"
      description="Choose the plan that fits the way you create and grow."
    >
      <div className="mx-auto max-w-6xl px-4 pb-10">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-[#e4e7f2] pb-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#182033] sm:text-4xl">
              Simple, transparent pricing
            </h2>

            <p className="mt-2 max-w-2xl text-base leading-6 text-[#596174]">
              Unlock your full creative potential with our pro tools. No hidden
              fees, cancel anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="shrink-0 rounded-xl border border-[#d9ddec] bg-[#f7f8fc] p-1">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  billing === "monthly"
                    ? "bg-white text-[#202638] shadow-sm"
                    : "text-[#4f5668] hover:text-[#202638]"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                  billing === "annual"
                    ? "bg-white text-[#202638] shadow-sm"
                    : "text-[#4f5668] hover:text-[#202638]"
                }`}
              >
                Annually
              </button>

              <span className="ml-1 rounded-lg bg-[#e5e4ff] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-[#5146e5]">
                SAVE 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {/* FREE */}
          <div className="flex h-full flex-col rounded-2xl border border-[#cfd4e3] bg-white p-8">
            <div>
              <h3 className="text-xl font-bold text-[#202638]">
                Free
              </h3>

              <p className="mt-1 max-w-md text-sm leading-5 text-[#697084]">
                Essential tools for starting creators to plan and organize.
              </p>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-end">
              <span className="text-5xl font-extrabold tracking-tight text-[#151d2f]">
                $0
              </span>

              <span className="mb-1 ml-1 text-sm text-[#596174]">
                /month
              </span>
            </div>

            {/* Button */}
            <button
              type="button"
              disabled
              className="mt-8 h-10 w-full rounded-lg border border-[#969caf] bg-white text-sm font-semibold text-[#30384b]"
            >
              Current Plan
            </button>

            {/* Features */}
            <div className="mt-8">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#51586a]">
                WHAT'S INCLUDED
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  "Up to 3 Content Plans",
                  "Basic analytics dashboard",
                  "50 saved ideas limit",
                  "Standard support",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[15px] text-[#293144]"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className="shrink-0 text-[#5146e5]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="relative flex h-full flex-col rounded-2xl border-2 border-[#4b3ff0] bg-white p-8 shadow-[0_10px_30px_rgba(70,60,220,0.12)]">
            {/* Recommended Badge */}
            <div className="absolute -top-3 right-4 rounded-full bg-[#4b3ff0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
              RECOMMENDED
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#4b3ff0]">
                Premium
              </h3>

              <p className="mt-1 max-w-md text-sm leading-5 text-[#697084]">
                Advanced analysis and unlimited capacity for high-output pros.
              </p>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-end">
              <span className="text-5xl font-extrabold tracking-tight text-[#151d2f]">
                {premiumPrice}
              </span>

              <span className="mb-1 ml-1 text-sm text-[#596174]">
                /month
              </span>
            </div>

            {/* Upgrade Button */}
            <button
              type="button"
              onClick={startCheckout}
              className="mt-8 h-10 w-full rounded-lg bg-[#5146e5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"
            >
              {isPremium ? "Change billing" : "Upgrade to Premium"}
            </button>

            {/* Features */}
            <div className="mt-8">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#51586a]">
                EVERYTHING IN FREE, PLUS:
              </p>

              <ul className="mt-4 space-y-3">
                {[
                  "Unlimited Content Plans",
                  "Advanced audience analytics & insights",
                  "Unlimited saved ideas",
                  "Priority 24/7 support",
                  "Custom branding export",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[15px] text-[#293144]"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className="shrink-0 text-[#5146e5]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}