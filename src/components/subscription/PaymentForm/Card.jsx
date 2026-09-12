import React from "react";
import { CircleHelp, CreditCard } from "lucide-react";

export default function Card({ form, onChange }) {
  return (
    <div className="mt-6 space-y-5">
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">
          Card Number
        </span>
        <div className="relative mt-2">
          <CreditCard
            size={18}
            strokeWidth={2}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7b8295]"
          />
          <input
            type="text"
            value={form.cardNumber}
            onChange={(event) => onChange("cardNumber", event.target.value)}
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="0000 0000 0000 0000"
            className="h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] pl-10 pr-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"
          />
        </div>
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">
            Expiry Date
          </span>
          <input
            type="text"
            value={form.expiry}
            onChange={(event) => onChange("expiry", event.target.value)}
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM/YY"
            className="mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">
            CVC
          </span>
          <div className="relative mt-2">
            <input
              type="text"
              value={form.cvc}
              onChange={(event) => onChange("cvc", event.target.value)}
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="123"
              className="h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 pr-10 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"
            />
            <CircleHelp
              size={15}
              strokeWidth={1.8}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7c8293]"
            />
          </div>
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium uppercase tracking-wide text-[#565d70]">
          Name on Card
        </span>
        <input
          type="text"
          value={form.name}
          onChange={(event) => onChange("name", event.target.value)}
          autoComplete="cc-name"
          placeholder="John Doe"
          className="mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"
        />
      </label>
    </div>
  );
}
