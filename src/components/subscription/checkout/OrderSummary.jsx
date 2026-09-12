import React from "react";
import { Check, ShieldCheck, WalletCards } from "lucide-react";
import { FaApple } from "react-icons/fa";

export default function OrderSummary({ billing = "monthly", total = 29, method = "card", processing = false, onSubmit }) {
  const subtotal = billing === "annual" ? 278.4 : total;
  const tax = Number((subtotal * 0.08).toFixed(2));
  const amount = Number((subtotal + tax).toFixed(2));

  return (
    <aside className="w-full rounded-2xl border border-[#e0e3f0] bg-white p-6 shadow-[0_10px_30px_rgba(60,60,120,0.04)] lg:min-w-[340px]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]">Order Summary</p>
          <h2 className="mt-1 text-xl font-extrabold text-[#111827]">Pro Plan</h2>
        </div>
        <span className="rounded-full bg-[#eeecff] px-3 py-1 text-[10px] font-bold text-[#5146e5]">
          {billing === "annual" ? "Billed Annually" : "Billed Monthly"}
        </span>
      </div>
      <div className="my-5 h-px bg-[#e9ebf3]" />
      <ul className="space-y-3">
        {["Unlimited Analyses", "Deep Insights", "Priority Support"].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-[#475569]"><Check size={15} className="shrink-0 text-[#5146e5]" />{item}</li>
        ))}
      </ul>
      <div className="my-5 h-px bg-[#e9ebf3]" />
      <dl className="space-y-3 text-sm">
        <div className="flex justify-between text-[#64748b]"><dt>Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
        <div className="flex justify-between text-[#64748b]"><dt>Tax</dt><dd>${tax.toFixed(2)}</dd></div>
        <div className="flex justify-between border-t border-[#e9ebf3] pt-3 text-base font-extrabold text-[#111827]"><dt>Total</dt><dd>${amount.toFixed(2)}</dd></div>
      </dl>
      <button
        type="button"
        onClick={onSubmit}
        disabled={processing}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5146e5] text-sm font-bold text-white transition hover:bg-[#4539d0]"
      >
        {method === "card" && <>🔒 Complete Upgrade</>}
        {method === "paypal" && <><WalletCards size={17} /> Pay $29.00 with PayPal</>}
        {method === "apple" && <><FaApple size={17} /> Pay with Apple Pay ($29.00)</>}
      </button>
      <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#f7f8fc] p-3 text-[10px] leading-4 text-[#71809c]">
        <ShieldCheck size={14} className="shrink-0 text-[#5146e5]" />
        Secure checkout. This demo does not charge a real card.
      </div>
    </aside>
  );
}

export function getOrderTotal(billing = "monthly", total = 29) {
  const subtotal = billing === "annual" ? 278.4 : total;
  return Number((subtotal + Number((subtotal * 0.08).toFixed(2))).toFixed(2));
}
