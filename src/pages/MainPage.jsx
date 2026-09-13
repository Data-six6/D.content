import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Gauge,
  Lightbulb,
  LineChart,
  Megaphone,
  MessageSquareText,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Eye,
  WandSparkles,
} from "lucide-react";

const featureCards = [
  { icon: Lightbulb, color: "bg-[#fff1d9] text-[#e18b28]", title: "AI Content Intelligence", text: "Turn audience signals into content ideas your community actually wants to see." },
  { icon: Megaphone, color: "bg-[#e9e5ff] text-[#6355dc]", title: "Multi-Platform Sync", text: "Plan, adapt, and publish your best ideas across every channel from one calm workspace." },
  { icon: Clock3, color: "bg-[#dff5f2] text-[#219d91]", title: "Smart Timing", text: "Know when your audience is ready so every post has a better chance to travel." },
  { icon: Gauge, color: "bg-[#ffe7e2] text-[#e66d58]", title: "The Predictor Score", text: "See the likely impact of a post before you spend time polishing and publishing it." },
];

const faqs = [
  "Can I switch plans later?",
  "What payment methods do you accept?",
  "Is there a discount for non-profits?",
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ScoreRing({ score = 87, small = false }) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center rounded-full ${small ? "h-16 w-16" : "h-32 w-32"}`} style={{ background: `conic-gradient(#6d5ce7 ${score * 3.6}deg, #ecebfa 0deg)` }}>
      <div className={`flex flex-col items-center justify-center rounded-full bg-white ${small ? "h-[54px] w-[54px]" : "h-[108px] w-[108px]"}`}>
        <strong className={small ? "text-lg" : "text-3xl"}>{score}</strong>
        <span className="text-[10px] text-slate-400">/100</span>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="relative rounded-[28px] border border-[#dedcff] bg-white p-3 shadow-[0_24px_70px_rgba(75,64,160,0.15)] sm:p-5">
      <div className="flex items-center justify-between border-b border-[#efeff8] pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#20233d]"><span className="h-2 w-2 rounded-full bg-[#735fe8]" />Content Dashboard</div>
        <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#d9d8e9]" /><span className="h-2 w-2 rounded-full bg-[#d9d8e9]" /><span className="h-2 w-2 rounded-full bg-[#d9d8e9]" /></div>
      </div>
      <div className="grid gap-3 py-4 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-[#f7f6ff] p-4">
          <div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Predictor Score</p><p className="mt-1 text-sm font-bold text-[#242541]">Excellent</p></div><ScoreRing /></div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#34a68b]"><TrendingUp size={14} /> +18.4% from last week</div>
        </div>
        <div className="rounded-2xl border border-[#eeeef7] p-4"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Next Post Timing</p><Clock3 size={15} className="text-[#735fe8]" /></div><p className="mt-3 text-2xl font-bold text-[#242541]">11:00 AM</p><p className="mt-1 text-xs text-slate-400">Thursday · Instagram</p><div className="mt-4 h-1.5 rounded-full bg-[#ebeafd]"><div className="h-full w-4/5 rounded-full bg-[#735fe8]" /></div></div>
      </div>
      <div className="rounded-2xl border border-[#eeeef7] p-4"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">AI Topic Analysis</p><Sparkles size={15} className="text-[#e39b3c]" /></div><div className="mt-4 flex items-end gap-2"><div className="h-10 w-1/6 rounded-t-lg bg-[#ddd9fb]" /><div className="h-16 w-1/6 rounded-t-lg bg-[#b9b0f2]" /><div className="h-12 w-1/6 rounded-t-lg bg-[#d6d1fa]" /><div className="h-24 w-1/6 rounded-t-lg bg-[#735fe8]" /><div className="h-20 w-1/6 rounded-t-lg bg-[#978ce9]" /><div className="h-28 w-1/6 rounded-t-lg bg-[#5cc6b7]" /></div><div className="mt-2 flex justify-between text-[9px] text-slate-400"><span>Stories</span><span>Tips</span><span>Reviews</span><span>Trends</span><span>News</span><span>Growth</span></div></div>
    </div>
  );
}

function IdeasPreview() {
  return <div className="rounded-2xl border border-[#e8e6f7] bg-white p-4 shadow-sm"><div className="flex items-center justify-between border-b border-[#f0eff8] pb-3"><span className="text-xs font-bold text-[#272844]">Generated content ideas</span><span className="rounded-full bg-[#eeebff] px-2 py-1 text-[10px] font-semibold text-[#6355dc]">AI READY</span></div>{["5 ways to build a better morning routine", "The creator's guide to finding your niche", "What our audience taught us this week"].map((idea, index) => <div key={idea} className="flex items-center gap-3 border-b border-[#f3f2f8] py-3 last:border-0"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f5f3ff] text-xs font-bold text-[#6d5ce7]">0{index + 1}</span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-[#292b47]">{idea}</p><p className="mt-1 text-[10px] text-slate-400">High audience fit · {index + 1} platform{index ? "s" : ""}</p></div><ArrowRight size={14} className="text-slate-300" /></div>)}</div>;
}

function MainPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaff] text-[#20233d]">
      <main>
        <section id="home" className="scroll-mt-24 bg-[radial-gradient(circle_at_80%_15%,#eeeaff_0,transparent_33%),linear-gradient(180deg,#fbfaff_0%,#f8f7ff_100%)]">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24 lg:pt-24">
            <div><div className="inline-flex items-center gap-2 rounded-full border border-[#dcd7ff] bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#6d5ce7] shadow-sm"><Sparkles size={13} /> INTRODUCING PREDICTOR SCORE</div><h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[#20213c] sm:text-6xl">Smarter Content,<br /><span className="text-[#6d5ce7]">Faster Growth.</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-[#74758b]">The AI content engine that analyzes, plans, and predicts performance before you publish. Stop guessing and start growing with Meateka.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/login" className="inline-flex items-center gap-2 rounded-xl bg-[#6d5ce7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(109,92,231,0.25)] transition hover:bg-[#5948d6]">Start Free Trial <ArrowRight size={16} /></a><button type="button" onClick={() => scrollToSection("features")} className="inline-flex items-center gap-2 rounded-xl border border-[#dedcf0] bg-white px-5 py-3.5 text-sm font-bold text-[#383953] transition hover:border-[#bfb7fa]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0edff] text-[#6d5ce7]"><Play size={11} fill="currentColor" /></span>Watch Demo</button></div><div className="mt-8 flex items-center gap-3"><div className="flex -space-x-2">{["#f1b996", "#d88c72", "#f0c6a5", "#94614d"].map((color, index) => <span key={color} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fbfaff] text-[10px] font-bold text-white" style={{ backgroundColor: color }}>{["A", "M", "J", "S"][index]}</span>)}</div><p className="text-xs text-[#85869a]">Trusted by <strong className="text-[#45465e]">10,000+ creators</strong></p></div></div>
            <DashboardPreview />
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d5ce7]">Your unfair advantage</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight">Everything you need to scale</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">One intelligent workspace for the full content lifecycle, from first spark to measurable growth.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{featureCards.map(({ icon: Icon, color, title, text }) => <article key={title} className="rounded-2xl border border-[#e8e6f2] bg-white p-5 shadow-[0_8px_24px_rgba(47,42,99,0.035)]"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}><Icon size={19} /></span><h3 className="mt-5 text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></article>)}</div></div>
        </section>

        <section id="features" className="scroll-mt-24 border-t border-[#eceaf5] bg-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d5ce7]">Built for better decisions</p><h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-0.04em]">Intelligence that drives your content strategy.</h2><p className="mt-4 text-base leading-7 text-slate-500">Move beyond guesswork. Meateka analyzes, predicts, and optimizes every piece of content before you even hit publish.</p><button type="button" onClick={() => scrollToSection("pricing")} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#20213c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#363752]">Explore Dashboard <ArrowRight size={16} /></button></div><div className="mt-14 grid gap-5 lg:grid-cols-6"><article className="rounded-3xl border border-[#e6e4f2] bg-[#faf9ff] p-6 lg:col-span-4"><div className="mb-8 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6d5ce7]"><Lightbulb size={19} /></span><div><h3 className="font-bold">Content Idea Recommendation</h3><p className="text-xs text-slate-500">Never run out of your next great idea.</p></div></div><IdeasPreview /></article><article className="rounded-3xl border border-[#e6e4f2] bg-[#f4f2ff] p-6 lg:col-span-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6d5ce7]"><BarChart3 size={19} /></span><h3 className="mt-6 font-bold">Engagement Prediction</h3><p className="mt-2 text-xs leading-5 text-slate-500">Know your likely impact before publishing.</p><div className="mt-8 flex items-center gap-5"><ScoreRing small /><div><p className="text-2xl font-extrabold">87/100</p><p className="text-xs font-medium text-[#33a38b]">High potential</p></div></div></article><article className="rounded-3xl border border-[#e6e4f2] bg-[#f7fcfb] p-6 lg:col-span-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff5f2] text-[#219d91]"><Clock3 size={19} /></span><h3 className="mt-6 font-bold">Best Posting Time</h3><p className="mt-2 text-xs leading-5 text-slate-500">Meet your audience at the right moment.</p><div className="mt-6 grid grid-cols-3 gap-2">{["9 AM", "11 AM", "1 PM"].map((time) => <button key={time} type="button" className={`rounded-lg border px-2 py-2 text-xs font-bold ${time === "11 AM" ? "border-[#6d5ce7] bg-[#6d5ce7] text-white" : "border-[#dcece8] bg-white text-slate-500"}`}>{time}</button>)}</div></article><article className="rounded-3xl border border-[#e6e4f2] bg-[#fffaf4] p-6 lg:col-span-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0d7] text-[#e18b28]"><MessageSquareText size={19} /></span><h3 className="mt-6 font-bold">Caption & Hashtag Analysis</h3><p className="mt-4 rounded-xl border border-[#f1e7d8] bg-white p-3 text-xs leading-5 text-slate-600">Build a community that grows with you. <span className="text-[#e18b28]">#Growth #SaaS #TechGenie</span></p><div className="mt-3 flex justify-between text-[10px] font-semibold text-slate-400"><span>Tone: <b className="text-[#e18b28]">Confident</b></span><span>Length: <b className="text-[#34a68b]">Perfect</b></span></div></article><article className="rounded-3xl border border-[#e6e4f2] bg-[#faf9ff] p-6 lg:col-span-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6d5ce7]"><LineChart size={19} /></span><h3 className="mt-6 font-bold">Platform Comparison</h3><p className="mt-2 text-xs leading-5 text-slate-500">Optimize the same idea for every channel.</p><div className="mt-5 space-y-3">{[["Facebook", "92%", "bg-[#6d5ce7]"], ["Instagram", "78%", "bg-[#aba2ef]"], ["TikTok", "64%", "bg-[#d5d1f7]"]].map(([name, value, color]) => <div key={name} className="flex items-center gap-3 text-xs"><span className="w-14 font-semibold text-slate-500">{name}</span><div className="h-2 flex-1 rounded-full bg-[#ecebf5]"><div className={`h-full rounded-full ${color}`} style={{ width: value }} /></div><b className="w-8 text-right">{value}</b></div>)}</div></article></div></div></section>

        <section id="pricing" className="scroll-mt-24 bg-[#f8f7ff]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d5ce7]">Plans that grow with you</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em]">Simple, transparent pricing</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">Choose the perfect plan for your content strategy needs. No hidden fees.</p><div className="mt-7 inline-flex rounded-xl border border-[#dedcf0] bg-white p-1"><button type="button" onClick={() => setBilling("monthly")} className={`rounded-lg px-4 py-2 text-xs font-bold ${billing === "monthly" ? "bg-[#6d5ce7] text-white" : "text-slate-500"}`}>Monthly</button><button type="button" onClick={() => setBilling("annual")} className={`rounded-lg px-4 py-2 text-xs font-bold ${billing === "annual" ? "bg-[#6d5ce7] text-white" : "text-slate-500"}`}>Annually <span className="ml-1 text-[9px] text-[#e18b28]">SAVE 20%</span></button></div></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{[{ name: "BASIC", price: "Free", action: "Current Plan", items: ["10 Content Analyses / mo", "2 Platforms Supported", "Basic AI Suggestions"] }, { name: "PRO", price: billing === "annual" ? "$23/mo" : "$29/mo", action: "Upgrade to Pro", popular: true, items: ["Unlimited Content Analyses", "All Platforms Supported", "Deep AI Insights & Trends", "Priority Support"] }, { name: "ENTERPRISE", price: "$99/mo", action: "Contact Sales", items: ["Everything in Pro", "Custom Integrations", "Dedicated Account Manager", "SLA Guarantees"] }].map((plan) => <article key={plan.name} className={`relative rounded-3xl border p-7 ${plan.popular ? "border-[#6d5ce7] bg-[#6d5ce7] text-white shadow-[0_20px_45px_rgba(109,92,231,0.25)]" : "border-[#e4e2f0] bg-white"}`}>{plan.popular && <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[9px] font-bold tracking-[0.12em]">MOST POPULAR</span>}<p className={`text-xs font-bold tracking-[0.18em] ${plan.popular ? "text-white/70" : "text-slate-400"}`}>{plan.name}</p><p className="mt-5 text-4xl font-extrabold">{plan.price}</p><button type="button" className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-bold ${plan.popular ? "bg-white text-[#6d5ce7]" : "border border-[#dcdbea] text-[#36374f]"}`}>{plan.action}</button><div className={`my-7 h-px ${plan.popular ? "bg-white/20" : "bg-[#eeeef5]"}`} /><p className={`text-[10px] font-bold uppercase tracking-[0.14em] ${plan.popular ? "text-white/70" : "text-slate-400"}`}>What's included</p><ul className="mt-5 space-y-4">{plan.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm"><Check size={16} className={`mt-0.5 shrink-0 ${plan.popular ? "text-[#b9f0e6]" : "text-[#6d5ce7]"}`} />{item}</li>)}</ul></article>)}</div><div className="mx-auto mt-16 max-w-3xl"><h3 className="text-center text-2xl font-extrabold">Frequently Asked Questions</h3><div className="mt-6 divide-y divide-[#e4e2f0] rounded-2xl border border-[#e4e2f0] bg-white px-5">{faqs.map((question, index) => <div key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold"><span>{question}</span><ChevronDown size={17} className={`shrink-0 text-[#6d5ce7] transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="pb-5 pr-8 text-sm leading-6 text-slate-500">Absolutely. Meateka keeps your plan flexible, with clear billing and support whenever your content strategy changes.</p>}</div>)}</div></div></div></section>

        <section id="about" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d5ce7]">The people behind the product</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Empowering Creators<br />With AI Intelligence</h2>
              <p className="mt-5 text-base leading-7 text-slate-500">At Meateka, we believe the future of content creation is a synergy between human ingenuity and artificial intelligence. Our mission is to propel the engine that drives high-output planning.</p>
            </div>

            <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="overflow-hidden rounded-3xl border border-[#e3e0f0] bg-[#f1efff] shadow-[0_16px_40px_rgba(47,42,99,0.08)]">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Creative team collaborating around a table" className="h-[320px] w-full object-cover sm:h-[390px]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d5ce7]">Our Story</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight">Built from a simple frustration.</h3>
                <p className="mt-5 text-sm leading-7 text-slate-500">Meateka was born out of a simple frustration: creative planning shouldn&apos;t feel like manual labor. Our founders, veterans of the content industry, realized that while creativity is boundless, execution often gets bogged down by disorganized workflows and a lack of actionable insights.</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">We set out to build an AI Content Engine that acts not just as a tool, but as a strategic partner. A platform designed to reduce cognitive load, streamline complex scheduling tasks, and surface the data needed to make informed creative decisions.</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">Today, Meateka is the sophisticated instrument empowering thousands of creators globally.</p>
              </div>
            </div>

            <div className="mt-24">
              <div className="mx-auto max-w-xl text-center"><h3 className="text-3xl font-extrabold tracking-tight">Core Values</h3><p className="mt-3 text-sm leading-6 text-slate-500">The principles that guide our engine.</p></div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">{[[Lightbulb, "Innovation", "We push the boundaries of what AI can achieve in content strategy, continuously refining our algorithms to provide cutting-edge predictive insights."], [Eye, "Transparency", "Trust is paramount. We build our systems to be interpretable, ensuring creators understand how our AI arrives at its strategic recommendations."], [TrendingUp, "Growth", "Our ultimate metric is the success of our users. We are dedicated to providing tools that demonstrably scale audience engagement and creator output."]].map(([Icon, title, text]) => <article key={title} className="rounded-2xl border border-[#e8e6f2] bg-white p-6 text-center shadow-[0_8px_24px_rgba(47,42,99,0.035)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(47,42,99,0.08)]"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eeeaff] text-[#6d5ce7]"><Icon size={20} strokeWidth={1.8} /></span><h4 className="mt-4 text-base font-bold">{title}</h4><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></article>)}</div>
            </div>

            <div className="mt-24"><div className="mx-auto max-w-xl text-center"><h3 className="text-3xl font-extrabold tracking-tight">The Team</h3><p className="mt-3 text-sm leading-6 text-slate-500">The minds behind the engine.</p></div><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6">{[["Alex Rivera", "CEO & Founder", "photo-1500648767791-00dcc994a43e"], ["Jordan Chen", "Head of Product", "photo-1494790108377-be9c29b29330"], ["Sam Taylor", "AI & Data Lead", "photo-1507003211169-0a1dd7228f2d"], ["Casey Patel", "Creative Director", "photo-1534528741775-53994a69daeb"]].map(([name, role, image]) => <article key={name} className="text-center"><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=300&q=80`} alt={`${name}, ${role}`} className="mx-auto h-24 w-24 rounded-full border-4 border-[#f0edff] object-cover sm:h-28 sm:w-28" /><h4 className="mt-4 text-sm font-bold">{name}</h4><p className="mt-1 text-xs text-slate-500">{role}</p></article>)}</div></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#e8e6f2] bg-[#fbfaff]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span className="text-lg font-extrabold text-[#6d5ce7]">Meateka</span><span>Predict smarter. Create better. Grow faster.</span><button type="button" onClick={() => scrollToSection("home")} className="font-semibold text-[#6d5ce7]">Back to top</button></div></footer>
    </div>
  );
}

export default MainPage;