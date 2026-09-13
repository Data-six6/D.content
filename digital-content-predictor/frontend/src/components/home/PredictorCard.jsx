import React from "react";

export default function PredictorCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        📊
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900">
        Engagement Prediction
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-600">
        Score your content before it goes live. Our models predict
        likely likes, comments, and shares based on historical data.
      </p>

      <div className="mt-auto rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-700">
            Predicted Score
          </span>

          <span className="text-sm font-bold text-teal-600">
            87
            <span className="text-xs font-normal text-gray-400">
              /100
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}