import React, { useState } from "react";
import { ArrowLeft, Check, CreditCard, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  const isAnnual = billing === "annual";

  return (
    <div className="min-h-screen bg-[#f8f9ff] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-[#4938df] transition hover:opacity-80"
        >
          <ArrowLeft size={16} strokeWidth={1.8} />
          Back
        </button>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold tracking-tight text-[#111827]">
            Pricing
          </h1>

          <p className="mt-2 max-w-3xl text-[14px] leading-6 text-[#64748b]">
            Simple, transparent pricing. Unlock your full creative potential
            with our pro tools. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Container */}
        <section className="rounded-[28px] border border-[#e0e3f3] bg-white px-6 py-8 shadow-[0_10px_35px_rgba(60,60,120,0.05)] sm:px-8 lg:px-10">
          {/* Flexible Plans */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d5ff] bg-[#f5f3ff] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4938df]">
              <Sparkles size={14} strokeWidth={1.8} />
              Flexible Plans
            </div>

            <h2 className="mt-5 text-[30px] font-bold tracking-tight text-[#111827]">
              Simple, transparent pricing
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-[14px] leading-6 text-[#64748b]">
              Unlock your full creative potential with our pro tools. No
              hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="mt-6 inline-flex items-center rounded-full border border-[#dce0ef] bg-[#f8f9ff] p-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  !isAnnual
                    ? "bg-[#5146e5] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#111827]"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isAnnual
                    ? "bg-[#5146e5] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#111827]"
                }`}
              >
                Annual

                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide ${
                    isAnnual
                      ? "bg-white/20 text-white"
                      : "bg-[#eeecff] text-[#5146e5]"
                  }`}
                >
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            {/* ================= FREE ================= */}
            <div className="grid grid-rows-[48px_70px_64px_1px_58px_1fr] rounded-[24px] border border-[#dfe3f0] bg-white p-6 shadow-[0_8px_25px_rgba(60,60,120,0.04)] sm:p-7">
              {/* Row 1 - Header */}
              <div className="flex items-start">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#71809c]">
                  Free
                </span>
              </div>

              {/* Row 2 - Price */}
              <div className="flex items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-bold leading-none tracking-tight text-[#0f172a]">
                    $0
                  </span>

                  <span className="text-[14px] text-[#64748b]">
                    /month
                  </span>
                </div>
              </div>

              {/* Row 3 - Button */}
              <div className="flex items-center">
                <button
                  type="button"
                  className="h-12 w-full rounded-xl border border-[#d8ddec] bg-white text-sm font-semibold text-[#1e293b] transition hover:bg-[#f8f9ff]"
                >
                  Current Plan
                </button>
              </div>

              {/* Divider */}
              <div className="w-full bg-[#e8ebf3]" />

              {/* Row 5 - Feature Heading */}
              <div className="flex items-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#71809c]">
                  What's Included
                </span>
              </div>

              {/* Row 6 - Features */}
              <div className="space-y-4 pt-1">
                <Feature text="Up to 3 Content Plans" />
                <Feature text="Basic analytics dashboard" />
                <Feature text="50 saved ideas limit" />
                <Feature text="Standard support" />
              </div>
            </div>

            {/* ================= PREMIUM ================= */}
            <div className="relative grid grid-rows-[48px_70px_64px_1px_58px_1fr] rounded-[24px] border border-[#d8d5ff] bg-[#f7f5ff] p-6 shadow-[0_8px_25px_rgba(81,70,229,0.07)] sm:p-7">
              {/* Recommended Badge */}
              <div className="absolute right-6 top-6 rounded-full bg-[#5146e5] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                Recommended
              </div>

              {/* Row 1 - Header */}
              <div className="flex items-start">
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#71809c]">
                    Premium
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eeecff] text-[#5146e5]">
                    <CreditCard size={16} strokeWidth={1.7} />
                  </span>
                </div>
              </div>

              {/* Row 2 - Price */}
              <div className="flex items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-bold leading-none tracking-tight text-[#0f172a]">
                    {isAnnual ? "$7.99" : "$9.99"}
                  </span>

                  <span className="text-[14px] text-[#64748b]">
                    {isAnnual ? "/month, billed annually" : "/month"}
                  </span>
                </div>
              </div>

              {/* Row 3 - Button */}
              <div className="flex items-center">
                <button
                  type="button"
                  className="h-12 w-full rounded-xl bg-[#5146e5] text-sm font-semibold text-white transition hover:bg-[#4539d0]"
                >
                  Upgrade to Premium
                </button>
              </div>

              {/* Divider */}
              <div className="w-full bg-[#e0ddf2]" />

              {/* Row 5 - Feature Heading */}
              <div className="flex items-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#71809c]">
                  Everything in Free, plus:
                </span>
              </div>

              {/* Row 6 - Features */}
              <div className="space-y-4 pt-1">
                <Feature text="Everything in Free, plus:" />
                <Feature text="Unlimited Content Plans" />
                <Feature text="Advanced audience analytics & insights" />
                <Feature text="Unlimited saved ideas" />
                <Feature text="Priority 24/7 support" />
                <Feature text="Custom branding export" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* Feature Component */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eeecff] text-[#5146e5]">
        <Check size={12} strokeWidth={2.2} />
      </span>

      <span className="text-[14px] leading-5 text-[#172554]">
        {text}
      </span>
    </div>
  );
}