import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import DashboardPreview from "./DashboardPreview.jsx";
import PredictorCard from "./PredictorCard.jsx";

export default function FeaturesSection() {
  return (
    <section className="bg-[#f8f8fc] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Content Recommendation */}
          <FeatureCard
            className="lg:col-span-2"
            icon="💡"
            title="Content Idea Recommendation"
            description="Stop staring at a blank page. Our AI analyzes trending topics in your niche and generates highly relevant, high-potential content ideas tailored to your audience's current interests."
          >
            <DashboardPreview />
          </FeatureCard>

          {/* Prediction */}
          <PredictorCard />
        </div>

        {/* ROW 2 */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Best Posting Time */}
          <FeatureCard
            icon="◷"
            title="Best Posting Time"
            description="Maximize reach with dynamic scheduling. AI pinpoints the exact minute your specific audience is most active online."
          >
            <div className="rounded-xl bg-indigo-50 p-2">
              <div className="grid grid-cols-3 gap-1 text-center text-[10px]">
                <div className="rounded-lg bg-white py-2 text-gray-500">
                  9 AM
                </div>

                <div className="rounded-lg bg-indigo-600 py-2 font-semibold text-white">
                  11 AM
                </div>

                <div className="rounded-lg bg-white py-2 text-gray-500">
                  1 PM
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Caption */}
          <FeatureCard
            className="lg:col-span-2"
            icon="📄"
            title="Caption & Hashtag Analysis"
            description="Craft the perfect message. Analyze sentiment, readability, and hashtag density to ensure your captions convert readers into followers."
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <div className="space-y-2">
                <span className="inline-block rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] text-gray-600">
                  Tone: Enthusiastic
                </span>

                <br />

                <span className="inline-block rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] text-gray-600">
                  Length: Optimal
                </span>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-4">
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-gray-200" />
                  <div className="h-2 w-4/5 rounded bg-gray-200" />
                  <div className="h-2 w-3/5 rounded bg-gray-200" />
                </div>

                <p className="mt-4 text-[10px] text-indigo-600">
                  #Growth #SaaS
                  <span className="text-gray-400">
                    {" "}#TooGeneric
                  </span>
                </p>
              </div>

            </div>
          </FeatureCard>
        </div>

        {/* ROW 3 */}
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

            {/* Chart */}
            <div className="relative h-32 rounded-xl border border-gray-200 bg-[#fafaff] px-6 pt-10">

              <div className="absolute bottom-0 left-6 right-6 flex items-end justify-around gap-6">

                {/* TikTok */}
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-[9px] text-gray-400">
                    Tiktok
                  </span>

                  <div className="h-10 w-16 rounded-t-lg bg-indigo-100" />
                </div>

                {/* Facebook */}
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-[9px] font-semibold text-indigo-600">
                    Facebook
                  </span>

                  <div className="h-20 w-16 rounded-t-lg bg-indigo-200" />
                </div>

                {/* Instagram */}
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-[9px] text-gray-400">
                    Insta
                  </span>

                  <div className="h-8 w-16 rounded-t-lg bg-indigo-100" />
                </div>

              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                ⇆
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Platform Comparison
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-600">
                Not all content works everywhere. Instantly see how a
                topic will perform across different networks and adapt
                your strategy to the platform with the highest ROI
                potential.
              </p>

              <button className="mt-4 text-xs font-medium text-indigo-600 hover:underline">
                See how it works →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

