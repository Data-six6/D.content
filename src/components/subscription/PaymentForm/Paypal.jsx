import React from "react";
import { CheckCircle2, Info, ShieldCheck, WalletCards } from "lucide-react";

export default function Paypal() {
  return (
    <div className="mt-4 rounded-2xl border border-[#dce1f3] bg-[#f0f2ff] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dedfff] text-[#5146e5]">
          <WalletCards size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xs font-bold text-[#252b3a]">PayPal Express Checkout</h3>
            <span className="rounded-full bg-[#6ee7d4] px-2 py-0.5 text-[9px] font-medium text-[#087f70]">Active</span>
          </div>
          <p className="mt-0.5 text-xs text-[#596174]">Fast, secure payment with your PayPal account</p>
        </div>
      </div>
      <div className="my-3 border-t border-[#d8dced]" />
      <div className="rounded-xl border border-[#d7dbea] bg-white px-3 py-3">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 size={16} fill="#008b78" className="shrink-0 text-white" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-[#4d5568]">Connected Account</p>
            <p className="mt-0.5 truncate text-xs font-bold text-[#252b3a]">alex.rivera@example.com</p>
          </div>
          <button type="button" className="text-xs font-bold text-[#4437d9] hover:text-[#3428c4]">Switch</button>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-[#dce0f1] bg-[#f8f8ff] px-3 py-3">
        <div className="flex items-start gap-2">
          <Info size={15} className="mt-0.5 shrink-0 text-[#5146e5]" />
          <p className="text-xs leading-5 text-[#596174]">You will be securely billed through your pre-authorized PayPal balance or linked funding source. No sensitive card numbers are stored on our servers.</p>
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2">
        <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#008b78]" />
        <p className="text-xs leading-5 text-[#007d70]">Eligible for PayPal Buyer Protection • Instant activation</p>
      </div>
    </div>
  );
}
