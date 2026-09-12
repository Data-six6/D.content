import React from "react";
import { UserRound } from "lucide-react";

export default function UserAvatar({ user, onClick, isOpen }) {
  const name = user?.name || "User";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <button
      type="button"
      aria-label="Open profile menu"
      aria-expanded={isOpen}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#eeecff] text-xs font-extrabold text-[#5146e5] shadow-[0_0_0_1px_#dfe2ee] transition hover:shadow-[0_0_0_2px_#c9c5ff]"
    >
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt={`${name} avatar`}
          className="h-full w-full object-cover"
        />
      ) : (
        initials || <UserRound size={17} />
      )}
    </button>
  );
}
