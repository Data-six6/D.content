import React from "react";
import { LockKeyhole } from "lucide-react";

export default function PasswordInput({ id, label, placeholder, value, onChange, autoComplete }) {
  return <label htmlFor={id} className="block text-xs font-bold text-[#3d3e58]">{label}<div className="relative mt-2"><LockKeyhole size={17} strokeWidth={1.8} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]" /><input id={id} type="password" autoComplete={autoComplete} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm font-normal text-[#20213c] outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10" /></div></label>;
}
