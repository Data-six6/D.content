import React, { useState } from "react";
import { Bell, Check } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "Your content plan is ready",
    detail: "Review your latest recommendations.",
    unread: true,
  },
  {
    id: 2,
    title: "Welcome to Meateka",
    detail: "Your creator workspace is set up.",
    unread: false,
  },
];

export default function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const hasUnread = notifications.some((notification) => notification.unread);

  function markAllRead() {
    setNotifications((current) =>
      current.map((notification) => ({ ...notification, unread: false })),
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Notifications"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="relative flex h-9 w-9 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-[#f1f2ff] hover:text-[#5146e5]"
      >
        <Bell size={18} strokeWidth={1.8} />
        {hasUnread && (
          <span
            aria-label="Unread notifications"
            className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-[#ef6685] ring-2 ring-white"
          />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-11 z-50 w-80 rounded-2xl border border-[#e4e7f1] bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <div className="flex items-center justify-between border-b border-[#edf0f6] px-2 pb-3">
            <h2 className="text-sm font-extrabold text-[#172033]">
              Notifications
            </h2>
            <button
              type="button"
              onClick={markAllRead}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5146e5] hover:underline"
            >
              <Check size={13} />
              Mark all read
            </button>
          </div>
          <div className="divide-y divide-[#edf0f6]">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex gap-3 px-2 py-3">
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${notification.unread ? "bg-[#ef6685]" : "bg-transparent"}`}
                />
                <div>
                  <p className="text-xs font-bold text-[#26324a]">
                    {notification.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-[#71809c]">
                    {notification.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
