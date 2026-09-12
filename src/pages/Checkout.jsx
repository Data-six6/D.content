import React from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, CreditCard } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import CheckoutSteps from "../components/subscription/checkout/CheckoutSteps.jsx";

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const billing = state?.billing === "annual" ? "annual" : "monthly";
  const price = billing === "annual" ? "$7.99" : "$9.99";

  return (
    <PageShell
      title="Upgrade to Pro"
      description="A smarter content workflow, ready when you are."
      showBack
      backTo="/pricing"
    >
      <div className="mx-auto max-w-4xl">
        <CheckoutSteps current={0} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="rounded-2xl border border-[#e0e3f0] bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeecff] text-[#5146e5]">
                  <CreditCard size={20} />
                </span>
                <div>
                  <h2 className="text-xl font-extrabold text-[#172033]">
                    Pro subscription
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    Everything you need to plan with confidence and publish with
                    momentum.
                  </p>
                </div>
              </div>
              <div className="mt-7 space-y-4">
                {[
                  "Unlimited content analyses",
                  "All platforms supported",
                  "Deep AI insights and trends",
                  "Priority support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#475569]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5f8f1] text-[#16a57d]">
                      <Check size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#f7f8fc] p-4 text-xs leading-5 text-[#64748b]">
              <CalendarDays size={17} className="shrink-0 text-[#5146e5]" />
              Your {billing} plan renews automatically. Cancel anytime from
              settings.
            </div>
          </div>
          <aside className="rounded-2xl border border-[#e0e3f0] bg-[#faf9ff] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]">
              Your selection
            </p>
            <div className="mt-3 flex items-end justify-between">
              <h3 className="text-2xl font-extrabold text-[#172033]">Pro</h3>
              <p className="text-lg font-bold text-[#5146e5]">{price}</p>
            </div>
            <p className="mt-2 text-xs text-[#71809c]">
              Billed {billing === "annual" ? "annually" : "monthly"}
            </p>
            <button
              type="button"
              onClick={() => navigate("/payment", { state: { billing } })}
              className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5146e5] text-sm font-bold text-white transition hover:bg-[#4539d0]"
            >
              Continue to payment <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/pricing")}
              className="mt-3 flex w-full items-center justify-center gap-2 py-2 text-xs font-semibold text-[#64748b] hover:text-[#5146e5]"
            >
              <ArrowLeft size={14} />
              Change plan
            </button>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
