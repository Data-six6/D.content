import React from "react";
import { Link } from "react-router-dom";

const columns = { Platform: [["Product", "/platform"], ["Features", "/platform"], ["Pricing", "/pricing"], ["Security", "/resources"], ["API", "/resources"]], Company: [["About", "/case-studies"], ["Careers", "/resources"], ["Press", "/case-studies"]], Legal: [["Privacy", "/resources"], ["Terms", "/resources"], ["Cookie Policy", "/resources"]] };

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div><div className="text-2xl font-extrabold text-[#3930d8]">Meateka</div><p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">Empowering creators and brands to build smarter, data-driven content strategies.</p></div>
        {Object.entries(columns).map(([heading, items]) => <div key={heading}><h3 className="font-bold text-slate-900">{heading}</h3><ul className="mt-4 space-y-3 text-sm text-slate-500">{items.map(([label, path]) => <li key={label}><Link to={path} className="hover:text-[#3930d8]">{label}</Link></li>)}</ul></div>)}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-100 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© 2024 Meateka Content Intelligence. All rights reserved.</span><div className="flex gap-2"><a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs">in</a><a href="#" aria-label="X" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs">x</a></div></div>
    </footer>
  );
}
