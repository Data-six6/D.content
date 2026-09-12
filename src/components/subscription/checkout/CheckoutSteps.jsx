import React from "react";
import { Check } from "lucide-react";

const steps = ["Checkout", "Payment", "Confirmation"];

export default function CheckoutSteps({ current = 0 }) {
  return (
    <ol
      className="flex items-center justify-center gap-2 sm:gap-6"
      aria-label="Checkout progress"
    >
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <li className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index <= current ? "bg-[#5146e5] text-white" : "border border-[#dfe2ee] bg-white text-[#94a0b8]"}`}
            >
              {index < current ? <Check size={14} /> : index + 1}
            </span>
            <span
              className={`hidden text-xs font-bold sm:inline ${index === current ? "text-[#5146e5]" : "text-[#94a0b8]"}`}
            >
              {step}
            </span>
          </li>
          {index < steps.length - 1 && (
            <span
              className={`h-px w-8 sm:w-16 ${index < current ? "bg-[#5146e5]" : "bg-[#e2e5ef]"}`}
            />
          )}
        </React.Fragment>
      ))}
    </ol>
  );
}
