import React, { useState } from "react";
import { CreditCard, LoaderCircle, LockKeyhole, WalletCards } from "lucide-react";
import { FaApple } from "react-icons/fa";

const initialForm = { cardNumber: "", expiry: "", cvc: "", name: "", address: "", city: "", zip: "" };

export default function PaymentForm({ onComplete, processing = false }) {
  const [method, setMethod] = useState("card");
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (method !== "card") {
      onComplete({ method, form });
      return;
    }
    if (Object.values(form).some((value) => !value.trim())) {
      setError("Complete every billing and card field to continue.");
      return;
    }
    onComplete({ method, form });
  }

  return <form onSubmit={handleSubmit} className="space-y-6"><fieldset><legend className="text-sm font-bold text-[#172033]">Payment method</legend><div className="mt-3 grid gap-2 sm:grid-cols-3">{[["card", CreditCard, "Card"], ["paypal", WalletCards, "PayPal"], ["apple", FaApple, "Apple Pay"]].map(([value, Icon, label]) => <button key={value} type="button" onClick={() => setMethod(value)} aria-label={`Pay with ${label}`} className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold transition ${method === value ? "border-[#5146e5] bg-[#f5f3ff] text-[#5146e5]" : "border-[#dfe2ee] bg-white text-[#64748b] hover:border-[#b9b4ef]"}`}><Icon aria-hidden="true" size={16} />{label}</button>)}</div></fieldset>{method === "card" && <><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-bold text-[#334155] sm:col-span-2">Card number<input value={form.cardNumber} onChange={(event) => update("cardNumber", event.target.value)} inputMode="numeric" placeholder="4242 4242 4242 4242" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label><label className="text-xs font-bold text-[#334155]">Expiry date<input value={form.expiry} onChange={(event) => update("expiry", event.target.value)} placeholder="MM / YY" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label><label className="text-xs font-bold text-[#334155]">CVC<input value={form.cvc} onChange={(event) => update("cvc", event.target.value)} inputMode="numeric" placeholder="123" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label><label className="text-xs font-bold text-[#334155] sm:col-span-2">Name on card<input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Alex Morgan" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label></div><div><p className="text-sm font-bold text-[#172033]">Billing address</p><div className="mt-3 grid gap-4 sm:grid-cols-2"><label className="text-xs font-bold text-[#334155] sm:col-span-2">Address<input value={form.address} onChange={(event) => update("address", event.target.value)} placeholder="123 Market Street" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label><label className="text-xs font-bold text-[#334155]">City<input value={form.city} onChange={(event) => update("city", event.target.value)} placeholder="San Francisco" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label><label className="text-xs font-bold text-[#334155]">ZIP code<input value={form.zip} onChange={(event) => update("zip", event.target.value)} placeholder="94105" className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]" /></label></div></div></>}{error && <p role="alert" className="rounded-lg bg-[#fff0f1] px-3 py-2 text-sm font-medium text-[#c2415b]">{error}</p>}<button type="submit" disabled={processing} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5146e5] text-sm font-bold text-white shadow-[0_10px_22px_rgba(81,70,229,0.18)] transition hover:bg-[#4539d0] disabled:cursor-wait disabled:opacity-70">{processing ? <><LoaderCircle size={17} className="animate-spin" />Processing payment...</> : <><LockKeyhole size={16} />Complete Upgrade</>}</button></form>;
}
