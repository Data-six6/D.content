import React, { useEffect, useState } from "react";
import { CheckCircle2, Save } from "lucide-react";
import AvatarUpload from "./AvatarUpload.jsx";
import ProfileForm from "./ProfileForm.jsx";
import SecuritySettings from "./SecuritySettings.jsx";
import PasswordModal from "./PasswordModal.jsx";

export default function ProfileSettings({
  user,
  onProfileSave,
  onSecuritySave,
}) {
  const [values, setValues] = useState({
    firstName: user?.firstName || user?.name?.split(" ")[0] || "",
    lastName: user?.lastName || user?.name?.split(" ").slice(1).join(" ") || "",
    email: user?.email || "",
    bio: user?.bio || "",
  });
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(
    Boolean(user?.twoFactorEnabled),
  );
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);

  useEffect(() => {
    setValues({
      firstName: user?.firstName || user?.name?.split(" ")[0] || "",
      lastName:
        user?.lastName || user?.name?.split(" ").slice(1).join(" ") || "",
      email: user?.email || "",
      bio: user?.bio || "",
    });
    setAvatar(user?.avatar || "");
    setTwoFactorEnabled(Boolean(user?.twoFactorEnabled));
  }, [user]);

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setNotice("");
  }

  function validate() {
    const nextErrors = {};
    if (!values.firstName.trim())
      nextErrors.firstName = "First name is required.";
    if (!values.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      nextErrors.email = "Enter a valid email address.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function saveProfile(event) {
    event.preventDefault();
    if (!validate()) return;
    onProfileSave({ ...values, avatar });
    setNotice("Profile changes saved successfully.");
  }

  function changeAvatar(nextAvatar) {
    setAvatar(nextAvatar);
    onProfileSave({ avatar: nextAvatar });
    setNotice("Profile image updated successfully.");
  }

  function toggleTwoFactor(enabled) {
    setTwoFactorEnabled(enabled);
    onSecuritySave({ twoFactorEnabled: enabled });
    setNotice(`Two-factor authentication ${enabled ? "enabled" : "disabled"}.`);
  }

  function passwordUpdated() {
    setPasswordOpen(false);
    setNotice("Password updated successfully.");
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={saveProfile}
        className="rounded-2xl border border-[#e0e3f0] bg-white"
      >
        <div className="border-b border-[#edf0f6] px-6 py-5">
          <h2 className="text-base font-extrabold text-[#172033]">
            Profile information
          </h2>
          <p className="mt-1 text-xs text-[#71809c]">
            Update your personal details and public creator profile.
          </p>
        </div>
        <div className="grid gap-8 px-6 py-6 lg:grid-cols-[160px_1fr]">
          <AvatarUpload
            name={`${values.firstName} ${values.lastName}`}
            avatar={avatar}
            onChange={changeAvatar}
          />
          <ProfileForm values={values} errors={errors} onChange={updateField} />
        </div>
        <div className="flex justify-end border-t border-[#edf0f6] px-6 py-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5146e5] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(81,70,229,0.18)] transition hover:bg-[#4539d0]"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </form>
      <SecuritySettings
        twoFactorEnabled={twoFactorEnabled}
        onToggleTwoFactor={toggleTwoFactor}
        onUpdatePassword={() => setPasswordOpen(true)}
      />
      {notice && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-xl border border-[#c9eddf] bg-[#effbf6] px-4 py-3 text-sm font-semibold text-[#138a6a]"
        >
          <CheckCircle2 size={17} />
          {notice}
        </p>
      )}
      {passwordOpen && (
        <PasswordModal
          onClose={() => setPasswordOpen(false)}
          onSuccess={passwordUpdated}
        />
      )}
    </div>
  );
}
