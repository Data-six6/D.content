import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SocialSignupButtons({ onUnavailable }) {
  return <div className="grid gap-3"><button type="button" onClick={onUnavailable} aria-label="Continue with Google" className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dfdfea] bg-white text-xs font-bold text-[#475569] transition hover:border-[#c9c3f3] hover:bg-[#faf9ff]"><FcGoogle aria-hidden="true" size={20} />Continue with Google</button></div>;
}
