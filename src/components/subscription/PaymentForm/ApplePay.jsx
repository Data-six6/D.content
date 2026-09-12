import React from "react";
import { CheckCircle2, Fingerprint, LockKeyhole } from "lucide-react";
import { FaApple } from "react-icons/fa";

export default function ApplePay() {
  return (
    <div className="mt-4 rounded-2xl border border-[#dce1f3] bg-[#f0f2ff] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
          <FaApple size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-[#252b3a]">Apple Wallet Connected</p>
          <p className="mt-0.5 text-xs text-[#596174]">Apple Card (•••• 4092)</p>
        </div>
        <CheckCircle2 size={16} fill="#008b78" className="shrink-0 text-white" />
      </div>
      <div className="my-3 border-t border-[#d8dced]" />
      <div className="rounded-xl border border-[#dce0ed] bg-white px-3 py-3">
        <div className="flex items-start gap-2">
          <Fingerprint size={16} className="mt-0.5 shrink-0 text-[#5146e5]" />
          <p className="text-xs leading-5 text-[#596174]">Touch ID, Face ID, or double-click the side button on your device to authorize payment of $29.00.</p>
        </div>
      </div>
      <div className="mt-3 flex items-start justify-center gap-2">
        <LockKeyhole size={12} className="mt-0.5 shrink-0 text-[#008b78]" />
        <p className="text-center text-[10px] leading-4 text-[#596174]">Your card number and identity are not shared with Meateka • Encrypted via Secure Enclave</p>
      </div>
    </div>
  );
}
