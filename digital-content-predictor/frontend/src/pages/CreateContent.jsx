import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";

const steps = [
  { key: "purpose", title: "Purpose", label: "What are you creating content for?" },
  { key: "details", title: "Details", label: "Describe the content idea and core objective." },
  { key: "audience", title: "Audience", label: "Who is this content for?" },
  { key: "strategy", title: "Strategy", label: "What approach should the content take?" },
  { key: "channels", title: "Channels", label: "Which channels should this content target?" },
  { key: "ai", title: "AI Predictor", label: "AI recommendation summary" },
  { key: "review", title: "Review", label: "Review and save your content plan." },
];

const purposeOptions = [
  "Content Creator",
  "Business",
  "Existing Content",
];

const channelOptions = [
  "Instagram",
  "TikTok",
  "LinkedIn",
  "YouTube",
  "X / Twitter",
  "Facebook",
];

const initialPlan = {
  purpose: "Content Creator",
  details: "",
  audience: "",
  strategy: "",
  channels: ["Instagram"],
  aiSummary: "Strong engagement potential for short-form educational content focused on audience pain points.",
};

function getSavedPlans() {
  try {
    return JSON.parse(localStorage.getItem("meateka_content_plans") || "[]");
  } catch {
    return [];
  }
}

export default function CreateContent() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialPlan);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentStepConfig = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const summaryItems = useMemo(() => [
    { label: "Purpose", value: formData.purpose },
    { label: "Objective", value: formData.details || "Not provided yet" },
    { label: "Audience", value: formData.audience || "Not provided yet" },
    { label: "Strategy", value: formData.strategy || "Not provided yet" },
    { label: "Channels", value: formData.channels.length ? formData.channels.join(", ") : "Not selected" },
  ], [formData]);

  function updateFormField(field, value) {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  function toggleChannel(channel) {
    setFormData((previous) => {
      const hasChannel = previous.channels.includes(channel);
      return {
        ...previous,
        channels: hasChannel
          ? previous.channels.filter((item) => item !== channel)
          : [...previous.channels, channel],
      };
    });
  }

  function handleNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const draftPlan = {
      id: Date.now(),
      title: `${formData.purpose} content plan`,
      purpose: formData.purpose,
      details: formData.details || "Content concept planning",
      audience: formData.audience || "General audience",
      strategy: formData.strategy || "Audience-first storytelling",
      channels: formData.channels.length ? formData.channels : ["Instagram"],
      createdAt: new Date().toISOString(),
    };

    const savedPlans = getSavedPlans();
    localStorage.setItem("meateka_content_plans", JSON.stringify([draftPlan, ...savedPlans].slice(0, 12)));
    navigate("/my-plans", { replace: true });
  }

  function renderStepContent() {
    switch (currentStepConfig.key) {
      case "purpose":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">What are you creating content for?</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {purposeOptions.map((option) => {
                const isSelected = formData.purpose === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateFormField("purpose", option)}
                    className={`rounded-2xl border px-5 py-6 text-left transition ${isSelected ? "border-[#4f46e5] bg-[#eeedff] shadow-sm" : "border-[#d9dbea] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`}
                  >
                    <div className="text-lg font-bold text-[#172033]">{option}</div>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {option === "Content Creator"
                        ? "Build social-first content ideas for your audience and portfolio."
                        : option === "Business"
                          ? "Plan branded campaigns and performance-focused channels."
                          : "Refresh and repurpose existing assets into a stronger strategy."}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case "details":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">Tell us about your content objective</h2>
            <textarea
              value={formData.details}
              onChange={(event) => updateFormField("details", event.target.value)}
              rows={6}
              placeholder="Share your content goals, launch themes, or campaign direction..."
              className="mt-6 w-full rounded-2xl border border-[#d9dbea] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
            />
          </div>
        );
      case "audience":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">Who is this content for?</h2>
            <input
              value={formData.audience}
              onChange={(event) => updateFormField("audience", event.target.value)}
              placeholder="Example: SaaS founders, digital marketers, skincare shoppers"
              className="mt-6 w-full rounded-2xl border border-[#d9dbea] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
            />
          </div>
        );
      case "strategy":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">What content strategy should we use?</h2>
            <textarea
              value={formData.strategy}
              onChange={(event) => updateFormField("strategy", event.target.value)}
              rows={6}
              placeholder="Describe your strategy, angle, or positioning..."
              className="mt-6 w-full rounded-2xl border border-[#d9dbea] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
            />
          </div>
        );
      case "channels":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">Choose your target channels</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {channelOptions.map((channel) => {
                const isActive = formData.channels.includes(channel);
                return (
                  <button
                    key={channel}
                    type="button"
                    onClick={() => toggleChannel(channel)}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${isActive ? "border-[#4f46e5] bg-[#4f46e5] text-white" : "border-[#d9dbea] bg-white text-[#172033] hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`}
                  >
                    {channel}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">AI Predictor</h2>
            <div className="mt-6 rounded-2xl border border-[#d9dbea] bg-[#f4f4ff] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#4f46e5]">Prediction</p>
              <p className="mt-3 text-lg leading-8 text-[#172033]">{formData.aiSummary}</p>
            </div>
          </div>
        );
      case "review":
        return (
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tight text-[#172033]">Review your content plan</h2>
            <div className="mt-6 space-y-4 rounded-2xl border border-[#d9dbea] bg-[#fafaff] p-6">
              {summaryItems.map((item) => (
                <div key={item.label} className="border-b border-[#eaebf2] pb-3 last:border-b-0 last:pb-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">{item.label}</div>
                  <div className="mt-2 text-base font-medium text-[#172033]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#fafaff] text-[#172033]">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="relative min-w-0 flex-1 transition-all duration-300 ease-in-out">
          {!isSidebarOpen && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
              className="fixed left-4 top-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d9dbea] bg-white text-xl font-bold text-[#4f46e5] shadow-sm transition-all duration-300 ease-in-out hover:bg-[#f2f3ff]"
            >
              ☰
            </button>
          )}

          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-30 bg-[#172033]/10 lg:hidden"
            />
          )}

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[28px] border border-[#d9dbea] bg-white shadow-[0_18px_40px_rgba(79,70,229,0.06)]">
              <header className="border-b border-[#e8e9f3] bg-white px-6 py-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="text-2xl font-extrabold tracking-tight text-[#3930d8]">Meateka</div>
                  <div className="flex flex-wrap gap-2">
                    {steps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;
                      return (
                        <div key={step.key} className="flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                              isActive
                                ? "bg-[#4f46e5] text-white"
                                : isComplete
                                  ? "bg-[#e7faf4] text-[#12a77d]"
                                  : "bg-[#f1f2f8] text-[#667085]"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className={`text-[11px] font-semibold ${isActive ? "text-[#4f46e5]" : "text-[#667085]"}`}>
                            {step.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </header>

              <section className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4f46e5]">Phase 1</p>
                    <h1 className="mt-2 text-2xl font-bold text-[#172033]">{currentStepConfig.title}</h1>
                  </div>
                  <div className="text-sm font-medium text-[#667085]">{currentStep + 1} / {steps.length}</div>
                </div>

                <div className="rounded-2xl border border-[#eaebf2] bg-[#fafaff] p-6 sm:p-8">{renderStepContent()}</div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                    disabled={isFirstStep}
                    className="inline-flex items-center justify-center rounded-lg border border-[#d9dbea] px-4 py-3 text-sm font-semibold text-[#172033] transition hover:bg-[#f8f8ff] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center justify-center rounded-lg bg-[#4f46e5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338ca]"
                  >
                    {isLastStep ? "Create Content Plan" : "Continue"}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
