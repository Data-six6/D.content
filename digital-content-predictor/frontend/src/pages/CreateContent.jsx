import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const steps = [
  { key: "purpose", title: "Purpose" },
  { key: "product", title: "Product" },
  { key: "audience", title: "Audience" },
  { key: "strategy", title: "Strategy" },
  { key: "channels", title: "Channels" },
  { key: "ai", title: "AI Predictor" },
  { key: "review", title: "Review" },
];

const purposeOptions = [
  "Brand Awareness",
  "Lead Generation",
  "Engagement",
  "Sales Enablement",
];

const categoryOptions = [
  "Skincare",
  "Wellness",
  "Beauty",
  "Fashion",
  "Tech",
  "Food & Beverage",
  "Home Goods",
  "Education",
];

const contentTypeOptions = [
  "Short-form video",
  "Carousel posts",
  "Educational content",
  "UGC",
  "Product showcase",
  "News update",
];

const toneOptions = [
  "Confident",
  "Friendly",
  "Professional",
  "Playful",
  "Luxury",
  "Bold",
];

const ctaOptions = [
  "Learn more",
  "Shop now",
  "Book a demo",
  "Sign up",
  "Follow us",
  "DM us",
];

const channelOptions = [
  "TikTok",
  "Instagram",
  "Facebook",
  "YouTube",
  "LinkedIn",
  "X / Twitter",
  "Pinterest",
];

const initialPlanData = {
  purpose: {
    objective: "",
    selectedPurpose: "Brand Awareness",
  },
  product: {
    name: "",
    category: "",
    description: "",
  },
  audience: {
    targetAudience: "",
    ageRange: "18-34",
    gender: "All genders",
    location: "",
    interests: "",
    characteristics: "",
  },
  strategy: {
    goal: "",
    contentType: "",
    tone: "",
    keyMessage: "",
    cta: "",
    notes: "",
  },
  channels: ["Instagram", "TikTok"],
};

function getSavedPlans() {
  try {
    return JSON.parse(
      localStorage.getItem("meateka_content_plans") || "[]"
    );
  } catch {
    return [];
  }
}

function buildPredictionData(data) {
  const channels = data.channels.length ? data.channels : ["Instagram"];
  const productName = data.product.name || "Your product";
  const audience = data.audience.targetAudience || "Target audience";
  const purpose = data.purpose.objective || "Content strategy";

  return {
    audienceMatch: Math.min(
      97,
      Math.max(74, 82 + (channels.length - 1) * 4)
    ),
    contentPotential: Math.min(
      96,
      Math.max(76, 78 + (productName.length > 10 ? 8 : 4))
    ),
    platformPotential: Math.min(
      95,
      Math.max(72, 70 + channels.length * 6)
    ),
    engagementPotential: Math.min(
      94,
      Math.max(68, 72 + (audience.length > 10 ? 8 : 4))
    ),
    postingTime: "7:00 PM - 9:00 PM",
    recommendation:
      "Focus on short-form storytelling and high-contrast product visuals to maximize reach across your selected channels.",
    summary: `Best performance is expected for ${productName} among ${audience.toLowerCase()} audiences when positioned around ${purpose.toLowerCase()} with a consistent social-first format.`,
  };
}

export default function CreateContent() {
  const navigate = useNavigate();
  const { plan } = useAuth();

  const [currentStep, setCurrentStep] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});
  const [planCreated, setPlanCreated] = useState(false);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [formData, setFormData] = useState(initialPlanData);

  const aiPrediction = useMemo(
    () => buildPredictionData(formData),
    [formData]
  );

  const currentStepConfig = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const isPremiumPlan = plan === "premium";

  function updateField(section, field, value) {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        [field]: value,
      },
    }));

    setValidationErrors((previous) => ({
      ...previous,
      [section]: undefined,
      [`${section}${field.charAt(0).toUpperCase()}${field.slice(1)}`]:
        undefined,
    }));
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

    setValidationErrors((previous) => ({
      ...previous,
      channels: undefined,
    }));
  }

  function validateStep(stepIndex) {
    const errors = {};

    if (stepIndex === 0) {
      if (!formData.purpose.objective.trim()) {
        errors.purpose =
          "Please describe your content purpose before continuing.";
      }
    }

    if (stepIndex === 1) {
      if (!formData.product.name.trim()) {
        errors.productName = "Product or service name is required.";
      }

      if (!formData.product.category.trim()) {
        errors.productCategory = "Please select a product category.";
      }
    }

    if (stepIndex === 2) {
      if (!formData.audience.targetAudience.trim()) {
        errors.targetAudience = "Please define your target audience.";
      }
    }

    if (stepIndex === 3) {
      if (!formData.strategy.goal.trim()) {
        errors.strategyGoal = "Please add the main goal.";
      }

      if (!formData.strategy.contentType.trim()) {
        errors.strategyContentType = "Please choose a content type.";
      }

      if (!formData.strategy.tone.trim()) {
        errors.strategyTone = "Please select a tone of voice.";
      }

      if (!formData.strategy.keyMessage.trim()) {
        errors.strategyKeyMessage = "Please write the key message.";
      }
    }

    if (stepIndex === 4) {
      if (!formData.channels.length) {
        errors.channels = "Please select at least one channel.";
      }
    }

    return errors;
  }

  function goToStep(stepIndex) {
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
      setValidationErrors({});
      setShowUpgradePrompt(false);
    }
  }

  function handleContinue() {
    const stepErrors = validateStep(currentStep);

    if (Object.keys(stepErrors).length > 0) {
      setValidationErrors(stepErrors);
      return;
    }

    setValidationErrors({});

    if (!isLastStep) {
      setCurrentStep((previous) => previous + 1);
      return;
    }

    if (!isPremiumPlan && getSavedPlans().length >= 3) {
      setShowUpgradePrompt(true);
      return;
    }

    const draftPlan = {
      id: Date.now(),
      title: formData.product.name.trim() || "New content plan",
      purpose: formData.purpose,
      product: formData.product,
      audience: formData.audience,
      strategy: formData.strategy,
      channels: formData.channels,
      aiPrediction,
      createdAt: new Date().toISOString(),
    };

    const savedPlans = getSavedPlans();

    localStorage.setItem(
      "meateka_content_plans",
      JSON.stringify([draftPlan, ...savedPlans].slice(0, 12))
    );

    setPlanCreated(true);

    window.setTimeout(() => {
      navigate("/my-plans", { replace: true });
    }, 1200);
  }

  function handleBack() {
    if (!isFirstStep) {
      setCurrentStep((previous) => previous - 1);
      setValidationErrors({});
      setShowUpgradePrompt(false);
    }
  }

  function renderPurposeStep() {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Purpose
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            What is the main purpose of this plan?
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Choose the primary objective for your content strategy.
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {purposeOptions.map((option) => {
            const isSelected =
              formData.purpose.selectedPurpose === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  updateField("purpose", "selectedPurpose", option)
                }
                className={`rounded-xl border px-3.5 py-3 text-left text-[13px] font-semibold transition ${
                  isSelected
                    ? "border-[#4f46e5] bg-[#eeedff] text-[#3d42d9] shadow-sm"
                    : "border-[#dfe3f0] bg-white text-[#172033] hover:border-[#c9cffc] hover:bg-[#f8f8ff]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div>
          <label
            htmlFor="purpose-objective"
            className="mb-2 block text-[13px] font-semibold text-[#172033]"
          >
            Objective / Brief
          </label>

          <textarea
            id="purpose-objective"
            value={formData.purpose.objective}
            onChange={(event) =>
              updateField("purpose", "objective", event.target.value)
            }
            rows={4}
            placeholder="Describe the campaign objective, core message, or marketing goal..."
            className="w-full resize-none rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] leading-5 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
          />

          {validationErrors.purpose && (
            <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
              {validationErrors.purpose}
            </p>
          )}
        </div>
      </div>
    );
  }

  function renderProductStep() {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Product
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Tell us about the product or service
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Add the basic information AI will use to build your plan.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="product-name"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Product / Service
            </label>

            <input
              id="product-name"
              type="text"
              value={formData.product.name}
              onChange={(event) =>
                updateField("product", "name", event.target.value)
              }
              placeholder="e.g. Facial Cleanser"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />

            {validationErrors.productName && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.productName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="product-category"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Category
            </label>

            <select
              id="product-category"
              value={formData.product.category}
              onChange={(event) =>
                updateField("product", "category", event.target.value)
              }
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            >
              <option value="">Select category</option>

              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {validationErrors.productCategory && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.productCategory}
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="product-description"
              className="block text-[13px] font-semibold text-[#172033]"
            >
              Description
            </label>

            <span className="text-[11px] font-medium text-[#7c88a9]">
              Optional
            </span>
          </div>

          <textarea
            id="product-description"
            value={formData.product.description}
            onChange={(event) =>
              updateField("product", "description", event.target.value)
            }
            rows={4}
            placeholder="Add a short product story, differentiator, or campaign context..."
            className="w-full resize-none rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] leading-5 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
          />
        </div>
      </div>
    );
  }

  function renderAudienceStep() {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Audience
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Who are you trying to reach?
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Define your ideal audience so the plan can be more targeted.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label
              htmlFor="target-audience"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Target audience
            </label>

            <input
              id="target-audience"
              type="text"
              value={formData.audience.targetAudience}
              onChange={(event) =>
                updateField(
                  "audience",
                  "targetAudience",
                  event.target.value
                )
              }
              placeholder="e.g. Gen Z beauty shoppers, startup founders, skincare enthusiasts"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />

            {validationErrors.targetAudience && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.targetAudience}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="age-range"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Age range
            </label>

            <input
              id="age-range"
              type="text"
              value={formData.audience.ageRange}
              onChange={(event) =>
                updateField("audience", "ageRange", event.target.value)
              }
              placeholder="18-34"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Gender
            </label>

            <input
              id="gender"
              type="text"
              value={formData.audience.gender}
              onChange={(event) =>
                updateField("audience", "gender", event.target.value)
              }
              placeholder="All genders"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              value={formData.audience.location}
              onChange={(event) =>
                updateField("audience", "location", event.target.value)
              }
              placeholder="United States"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>

          <div>
            <label
              htmlFor="interests"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Interests
            </label>

            <input
              id="interests"
              type="text"
              value={formData.audience.interests}
              onChange={(event) =>
                updateField("audience", "interests", event.target.value)
              }
              placeholder="Fitness, travel, skincare, self-care"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="audience-characteristics"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Audience characteristics / preferences
            </label>

            <textarea
              id="audience-characteristics"
              value={formData.audience.characteristics}
              onChange={(event) =>
                updateField(
                  "audience",
                  "characteristics",
                  event.target.value
                )
              }
              rows={3}
              placeholder="Add key lifestyle markers, pains, motivations, or buying behavior..."
              className="w-full resize-none rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] leading-5 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>
        </div>
      </div>
    );
  }

  function renderStrategyStep() {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Strategy
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Define your messaging and content strategy
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Shape the direction, tone, and message of your content.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="strategy-goal"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Main goal
            </label>

            <input
              id="strategy-goal"
              type="text"
              value={formData.strategy.goal}
              onChange={(event) =>
                updateField("strategy", "goal", event.target.value)
              }
              placeholder="Increase product consideration and conversions"
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />

            {validationErrors.strategyGoal && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.strategyGoal}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="strategy-content-type"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Content type
            </label>

            <select
              id="strategy-content-type"
              value={formData.strategy.contentType}
              onChange={(event) =>
                updateField("strategy", "contentType", event.target.value)
              }
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            >
              <option value="">Select content type</option>

              {contentTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {validationErrors.strategyContentType && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.strategyContentType}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="strategy-tone"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Tone of voice
            </label>

            <select
              id="strategy-tone"
              value={formData.strategy.tone}
              onChange={(event) =>
                updateField("strategy", "tone", event.target.value)
              }
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            >
              <option value="">Select tone</option>

              {toneOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {validationErrors.strategyTone && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.strategyTone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="strategy-cta"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Call to action
            </label>

            <select
              id="strategy-cta"
              value={formData.strategy.cta}
              onChange={(event) =>
                updateField("strategy", "cta", event.target.value)
              }
              className="w-full rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] text-[#172033] outline-none transition focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            >
              <option value="">Select CTA</option>

              {ctaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="strategy-key-message"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Key message
            </label>

            <textarea
              id="strategy-key-message"
              value={formData.strategy.keyMessage}
              onChange={(event) =>
                updateField(
                  "strategy",
                  "keyMessage",
                  event.target.value
                )
              }
              rows={3}
              placeholder="Write the single message your audience should remember."
              className="w-full resize-none rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] leading-5 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />

            {validationErrors.strategyKeyMessage && (
              <p className="mt-2 text-[12px] font-medium text-[#c2415b]">
                {validationErrors.strategyKeyMessage}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="strategy-notes"
              className="mb-2 block text-[13px] font-semibold text-[#172033]"
            >
              Additional notes
            </label>

            <textarea
              id="strategy-notes"
              value={formData.strategy.notes}
              onChange={(event) =>
                updateField("strategy", "notes", event.target.value)
              }
              rows={3}
              placeholder="Add any brief details, campaign context, or positioning notes..."
              className="w-full resize-none rounded-xl border border-[#dfe3f0] bg-[#fafbff] px-3.5 py-3 text-[13px] leading-5 text-[#172033] outline-none transition placeholder:text-[#98a2b3] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#ecebff]"
            />
          </div>
        </div>
      </div>
    );
  }

  function renderChannelsStep() {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Channels
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Choose where this content will live
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Select one or more platforms for your content plan.
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {channelOptions.map((channel) => {
            const isActive = formData.channels.includes(channel);

            return (
              <button
                key={channel}
                type="button"
                onClick={() => toggleChannel(channel)}
                className={`flex items-center justify-between rounded-xl border px-3.5 py-3 text-left text-[13px] font-semibold transition ${
                  isActive
                    ? "border-[#4f46e5] bg-[#eeedff] text-[#3d42d9] shadow-sm"
                    : "border-[#dfe3f0] bg-white text-[#172033] hover:border-[#c9cffc] hover:bg-[#f8f8ff]"
                }`}
              >
                <span>{channel}</span>

                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] ${
                    isActive
                      ? "bg-[#4f46e5] text-white"
                      : "border border-[#dfe3f0] text-transparent"
                  }`}
                >
                  ✓
                </span>
              </button>
            );
          })}
        </div>

        {validationErrors.channels && (
          <p className="text-[12px] font-medium text-[#c2415b]">
            {validationErrors.channels}
          </p>
        )}
      </div>
    );
  }

  function renderAiStep() {
    const predictions = [
      ["Audience match", aiPrediction.audienceMatch],
      ["Content potential", aiPrediction.contentPotential],
      ["Platform potential", aiPrediction.platformPotential],
      ["Engagement potential", aiPrediction.engagementPotential],
    ];

    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            AI Predictor
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Performance forecast for your plan
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Review the estimated performance based on the information you
            provided.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {predictions.map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-[#dfe3f0] bg-white p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-semibold text-[#172033]">
                  {label}
                </span>

                <span className="text-[13px] font-bold text-[#4f46e5]">
                  {Math.round(value)}%
                </span>
              </div>

              <div className="mt-3 h-2 rounded-full bg-[#ecedf5]">
                <div
                  className="h-2 rounded-full bg-[#4f46e5] transition-all duration-500"
                  style={{ width: `${Math.round(value)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-xl border border-[#dfe3f0] bg-[#f7f7ff] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
              Recommended posting time
            </p>

            <div className="mt-2 text-[21px] font-bold tracking-[-0.04em] text-[#172033]">
              {aiPrediction.postingTime}
            </div>

            <p className="mt-2 text-[12px] leading-5 text-[#667085]">
              {aiPrediction.summary}
            </p>
          </div>

          <div className="rounded-xl border border-[#dfe3f0] bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
              Recommendation
            </p>

            <p className="mt-2 text-[12px] leading-5 text-[#172033]">
              {aiPrediction.recommendation}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function renderReviewStep() {
    const sections = [
      {
        label: "Purpose",
        value: formData.purpose.objective || "Not provided",
        stepIndex: 0,
      },
      {
        label: "Product / Service",
        value: `${formData.product.name || "Not provided"} • ${
          formData.product.category || "Category not selected"
        }`,
        stepIndex: 1,
      },
      {
        label: "Audience",
        value:
          formData.audience.targetAudience || "Not provided",
        stepIndex: 2,
      },
      {
        label: "Strategy",
        value: formData.strategy.goal || "Not provided",
        stepIndex: 3,
      },
      {
        label: "Channels",
        value: formData.channels.length
          ? formData.channels.join(", ")
          : "Not selected",
        stepIndex: 4,
      },
      {
        label: "AI Predictions",
        value: `${Math.round(
          aiPrediction.audienceMatch
        )}% audience match`,
        stepIndex: 5,
      },
    ];

    return (
      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
            Review
          </p>

          <h2 className="mt-2 text-[22px] font-bold tracking-[-0.04em] text-[#172033] sm:text-[24px]">
            Check your content plan before saving
          </h2>

          <p className="mt-1.5 text-[13px] leading-5 text-[#667085]">
            Review your information and edit any section before creating
            your plan.
          </p>
        </div>

        <div className="space-y-2.5">
          {sections.map((section) => (
            <div
              key={section.label}
              className="rounded-xl border border-[#dfe3f0] bg-[#fafbff] p-3.5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-[13px] font-semibold text-[#172033]">
                  {section.label}
                </div>

                <button
                  type="button"
                  onClick={() => goToStep(section.stepIndex)}
                  className="rounded-full border border-[#dfe3f0] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#4f46e5] transition hover:bg-[#f4f5ff]"
                >
                  Edit
                </button>
              </div>

              <div className="mt-2 text-[12px] leading-5 text-[#667085]">
                {section.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderStepContent() {
    switch (currentStepConfig.key) {
      case "purpose":
        return renderPurposeStep();

      case "product":
        return renderProductStep();

      case "audience":
        return renderAudienceStep();

      case "strategy":
        return renderStrategyStep();

      case "channels":
        return renderChannelsStep();

      case "ai":
        return renderAiStep();

      case "review":
        return renderReviewStep();

      default:
        return null;
    }
  }

  if (planCreated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f6fb] p-6">
        <div className="w-full max-w-md rounded-[24px] border border-[#dfe3f0] bg-white p-7 text-center shadow-[0_18px_40px_rgba(79,70,229,0.06)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e9ebff] text-2xl font-bold text-[#4f46e5]">
            ✓
          </div>

          <h2 className="mt-4 text-[24px] font-bold tracking-[-0.04em] text-[#172033]">
            Plan created successfully
          </h2>

          <p className="mt-2 text-[13px] leading-5 text-[#667085]">
            Your content strategy is being saved and you’ll be redirected
            to your plans.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#172033]">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1 bg-[#f7f9fd]">
          <div className="mx-auto w-full max-w-[1180px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
            <div className="overflow-hidden rounded-[22px] border border-[#e1e4ef] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
              {/* PAGE HEADER */}
              <div className="border-b border-[#e8eaf2] px-5 py-5 sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f46e5]">
                      Create Plan
                    </p>

                    <h1 className="mt-1 text-[23px] font-bold tracking-[-0.04em] text-[#172033]">
                      Build your content plan
                    </h1>

                    <p className="mt-1 text-[12px] leading-5 text-[#667085]">
                      Follow the steps below to create a complete content
                      strategy.
                    </p>
                  </div>

                  <div className="hidden rounded-full bg-[#f3f4ff] px-3 py-1.5 text-[11px] font-semibold text-[#4f46e5] sm:block">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                </div>

                {/* STEPS */}
                <div className="mt-5 overflow-x-auto pb-1">
                  <div className="flex min-w-max items-center gap-2">
                    {steps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;
                      const isUpcoming = index > currentStep;

                      return (
                        <React.Fragment key={step.key}>
                          <button
                            type="button"
                            onClick={() => goToStep(index)}
                            disabled={isUpcoming}
                            className={`flex items-center gap-2 rounded-full border px-2.5 py-1.5 transition ${
                              isActive
                                ? "border-[#d9ddff] bg-[#f2f3ff]"
                                : isComplete
                                ? "border-[#caf7df] bg-[#edfaf3]"
                                : "border-[#eef0f8] bg-white"
                            } ${
                              isUpcoming
                                ? "cursor-default opacity-75"
                                : "cursor-pointer"
                            }`}
                          >
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                                isActive
                                  ? "bg-[#4f46e5] text-white"
                                  : isComplete
                                  ? "bg-[#12a77d] text-white"
                                  : "bg-[#eef0f8] text-[#667085]"
                              }`}
                            >
                              {isComplete ? "✓" : index + 1}
                            </span>

                            <span
                              className={`whitespace-nowrap text-[11px] font-semibold ${
                                isActive
                                  ? "text-[#3d42d9]"
                                  : isComplete
                                  ? "text-[#0d8d68]"
                                  : "text-[#667085]"
                              }`}
                            >
                              {step.title}
                            </span>
                          </button>

                          {index < steps.length - 1 && (
                            <div
                              className={`h-px w-4 ${
                                index < currentStep
                                  ? "bg-[#12a77d]"
                                  : "bg-[#e6e8f0]"
                              }`}
                            />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <section className="px-5 py-5 sm:px-7 lg:px-8 lg:py-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7c88a9]">
                      {currentStep < 4 ? "Phase 1" : "Phase 2"}
                    </p>

                    <h2 className="mt-1 text-[16px] font-bold text-[#172033]">
                      {currentStepConfig.title}
                    </h2>
                  </div>

                  <div className="rounded-full bg-[#f6f7fb] px-3 py-1.5 text-[11px] font-semibold text-[#667085]">
                    {currentStep + 1} / {steps.length}
                  </div>
                </div>

                <div className="rounded-[18px] border border-[#eaebf2] bg-[#fafbff] p-4 sm:p-5 lg:p-6">
                  {renderStepContent()}
                </div>

                {/* UPGRADE PROMPT */}
                {showUpgradePrompt && (
                  <div className="mt-4 rounded-[16px] border border-[#f4cdd1] bg-[#fff7f8] p-4">
                    <div className="text-[13px] font-bold text-[#7a1e2d]">
                      You’ve reached your Free plan limit.
                    </div>

                    <p className="mt-1.5 text-[12px] leading-5 text-[#7a1e2d]">
                      Upgrade to Premium to create unlimited content plans.
                    </p>

                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setShowUpgradePrompt(false)}
                        className="inline-flex h-9 items-center justify-center rounded-lg border border-[#e6c8cc] bg-white px-4 text-[12px] font-semibold text-[#7a1e2d] transition hover:bg-[#fff2f3]"
                      >
                        Keep editing
                      </button>

                      <button
                        type="button"
                        onClick={() => navigate("/pricing")}
                        className="inline-flex h-9 items-center justify-center rounded-lg bg-[#4f46e5] px-4 text-[12px] font-semibold text-white transition hover:bg-[#4338ca]"
                      >
                        Upgrade to Premium
                      </button>
                    </div>
                  </div>
                )}

                {/* NAVIGATION */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#edf0f5] pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isFirstStep}
                    className="inline-flex h-9 items-center justify-center rounded-lg border border-[#dfe3f0] bg-white px-4 text-[12px] font-semibold text-[#172033] transition hover:bg-[#f8f8ff] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#4f46e5] px-5 text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(79,70,229,0.18)] transition hover:bg-[#4338ca]"
                  >
                    {isLastStep ? "Create Plan" : "Continue"}

                    {!isLastStep && (
                      <span aria-hidden="true">→</span>
                    )}
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