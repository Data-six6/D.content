import React, { useState } from "react";
import { CreditCard, WalletCards } from "lucide-react";
import { FaApple as AppleIcon } from "react-icons/fa";
import ApplePay from "../PaymentForm/ApplePay.jsx";
import Card from "../PaymentForm/Card.jsx";
import Paypal from "../PaymentForm/Paypal.jsx";

const initialForm = {
  cardNumber: "",
  expiry: "",
  cvc: "",
  name: "",
  address: "",
  city: "",
  zip: "",
};

export default function PaymentForm({ onComplete, processing = false, method, setMethod }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function selectMethod(value) {
    setMethod(value);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (method === "card" && Object.values(form).some((value) => !value.trim())) {
      setError("Complete every billing and card field to continue.");
      return;
    }
    onComplete({ method, form });
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="w-full rounded-2xl border border-[#dfe3f1] bg-white p-6">
        <fieldset>
          <legend className="text-sm font-medium text-[#252b3a]">Payment Method</legend>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <button type="button" onClick={() => selectMethod("card")} aria-label="Pay with Card" className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${method === "card" ? "border-[#4b3ff0] bg-white text-[#252b3a] shadow-[0_0_0_1px_#4b3ff0]" : "border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`}><CreditCard size={16} strokeWidth={2} /><span>Card</span></button>
            <button type="button" onClick={() => selectMethod("paypal")} aria-label="Pay with PayPal" className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${method === "paypal" ? "border-[#4b3ff0] bg-[#f8f7ff] text-[#3026c9] shadow-[0_0_0_1px_#4b3ff0]" : "border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`}><WalletCards size={16} strokeWidth={2} /><span>PayPal</span></button>
            <button type="button" onClick={() => selectMethod("apple")} aria-label="Pay with Apple Pay" className={`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${method === "apple" ? "border-[#4b3ff0] bg-[#f8f7ff] text-[#3026c9] shadow-[0_0_0_1px_#4b3ff0]" : "border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`}><AppleIcon size={16} /><span>Apple Pay</span></button>
          </div>
        </fieldset>
        {method === "card" && <Card form={form} onChange={update} />}
        {method === "paypal" && <Paypal />}
        {method === "apple" && <ApplePay />}
      </div>

      <div className="w-full rounded-2xl border border-[#dfe3f1] bg-white p-6">
        <h3 className="text-sm font-medium text-[#252b3a]">Billing Address</h3>
        <div className="mt-5 space-y-5">
          <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">Address</span><input type="text" value={form.address} onChange={(event) => update("address", event.target.value)} autoComplete="street-address" placeholder="123 Main St" className="mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]" /></label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">City</span><input type="text" value={form.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" placeholder="San Francisco" className="mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]" /></label>
            <label className="block"><span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">ZIP Code</span><input type="text" value={form.zip} onChange={(event) => update("zip", event.target.value)} inputMode="numeric" autoComplete="postal-code" placeholder="94105" className="mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]" /></label>
          </div>
        </div>
      </div>
      {error && <p role="alert" className="rounded-xl border border-[#f3c7cf] bg-[#fff5f6] px-4 py-3 text-sm font-medium text-[#c2415b]">{error}</p>}
      <button type="submit" disabled={processing} className="sr-only" aria-hidden="true" tabIndex={-1}>Complete Payment</button>
    </form>
  );
}
