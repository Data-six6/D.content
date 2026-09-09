import React from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function OrderSummary({ billing = "monthly", total = 29 }) {
  const subtotal = billing === "annual" ? 278.4 : total;
  const tax = Number((subtotal * 0.08).toFixed(2));
  const amount = Number((subtotal + tax).toFixed(2));

  return <aside className="rounded-2xl border border-[#e0e3f0] bg-white p-5 shadow-[0_10px_30px_rgba(60,60,120,0.04)]"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]">Selected plan</p><h2 className="mt-1 text-xl font-extrabold text-[#111827]">Pro</h2></div><span className="rounded-full bg-[#eeecff] px-3 py-1 text-[10px] font-bold text-[#5146e5]">{billing === "annual" ? "Annual" : "Monthly"}</span></div><div className="my-5 h-px bg-[#e9ebf3]" /><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]">Included benefits</p><ul className="mt-4 space-y-3">{["Unlimited content analyses", "All platforms supported", "Deep AI insights & trends", "Priority support"].map((item) => <li key={item} className="flex gap-2 text-xs text-[#475569]"><Check size={14} className="shrink-0 text-[#5146e5]" />{item}</li>)}</ul><div className="my-5 h-px bg-[#e9ebf3]" /><dl className="space-y-3 text-sm"><div className="flex justify-between text-[#64748b]"><dt>Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div><div className="flex justify-between text-[#64748b]"><dt>Tax</dt><dd>${tax.toFixed(2)}</dd></div><div className="flex justify-between border-t border-[#e9ebf3] pt-3 text-base font-extrabold text-[#111827]"><dt>Total</dt><dd>${amount.toFixed(2)}</dd></div></dl><div className="mt-5 flex items-start gap-2 rounded-xl bg-[#f7f8fc] p-3 text-[10px] leading-4 text-[#71809c]"><ShieldCheck size={14} className="shrink-0 text-[#5146e5]" />Secure checkout. This demo does not charge a real card.</div></aside>;
}

export function getOrderTotal(billing = "monthly", total = 29) {
  const subtotal = billing === "annual" ? 278.4 : total;
  return Number((subtotal + Number((subtotal * 0.08).toFixed(2))).toFixed(2));
}
