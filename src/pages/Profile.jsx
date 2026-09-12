import React from "react";
import PageShell from "../components/layout/PageShell.jsx";
import ProfileSettings from "../components/profile/ProfileSettings.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user, updateProfile, updateSecurity } = useAuth();

  return (
    <PageShell
      title="Settings"
      description="Manage your account preferences and security."
    >
      <ProfileSettings
        user={user}
        onProfileSave={updateProfile}
        onSecuritySave={updateSecurity}
      />
    </PageShell>
  );
}
