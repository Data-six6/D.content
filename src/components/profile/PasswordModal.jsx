import React, { useState } from "react";
import { X } from "lucide-react";

export default function PasswordModal({ onClose, onSuccess }) {
  const [values, setValues] = useState({ current: "", next: "", confirm: "" });
  const [error, setError] = useState("");

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function submit(event) {
    event.preventDefault();
    if (!values.current || !values.next || !values.confirm)
      return setError("Complete all password fields.");
    if (values.next.length < 8)
      return setError("New password must be at least 8 characters.");
    if (values.next !== values.confirm)
      return setError("New password and confirmation must match.");
    onSuccess();
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 px-4 py-6"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="password-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <h2
              id="password-title"
              className="text-xl font-extrabold text-[#172033]"
            >
              Update Password
            </h2>
            <p className="mt-1 text-sm text-[#71809c]">
              Choose a secure password for your account.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close password modal"
            onClick={onClose}
            className="rounded-lg p-2 text-[#71809c] hover:bg-[#f4f5fa]"
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={submit} className="mt-6 space-y-4">
          {[
            ["current", "Current password"],
            ["next", "New password"],
            ["confirm", "Confirm password"],
          ].map(([field, label]) => (
            <label
              key={field}
              className="block text-xs font-bold text-[#334155]"
            >
              {label}
              <input
                type="password"
                value={values[field]}
                onChange={(event) => update(field, event.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm font-normal outline-none focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"
              />
            </label>
          ))}
          {error && (
            <p
              role="alert"
              className="rounded-lg bg-[#fff0f1] px-3 py-2 text-xs font-medium text-[#c2415b]"
            >
              {error}
            </p>
          )}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#dfe2ee] px-4 py-2.5 text-sm font-bold text-[#64748b]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#5146e5] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#4539d0]"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
