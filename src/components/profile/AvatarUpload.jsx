import React, { useRef } from "react";
import { Camera, UserRound } from "lucide-react";

export default function AvatarUpload({ name, avatar, onChange }) {
  const inputRef = useRef(null);
  const initials =
    name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  function handleFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="relative">
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-[#f0edff] bg-[#eeecff] text-2xl font-extrabold text-[#5146e5] shadow-sm">
          {avatar ? (
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="h-full w-full object-cover"
            />
          ) : (
            initials || <UserRound size={34} />
          )}
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Change avatar"
          className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#5146e5] text-white transition hover:bg-[#4539d0]"
        >
          <Camera size={15} />
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFile}
        className="sr-only"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-3 text-xs font-bold text-[#5146e5] hover:underline"
      >
        Change Avatar
      </button>
      <p className="mt-1 text-[10px] text-[#94a0b8]">PNG, JPG up to 2MB</p>
    </div>
  );
}
