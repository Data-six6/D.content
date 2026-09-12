import React from "react";

export default function FeatureCard({
  icon,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-600">
        {description}
      </p>

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}