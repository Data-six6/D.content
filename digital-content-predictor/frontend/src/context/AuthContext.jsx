import React, { createContext, useContext, useState } from "react";
import api from "../services/api.js";

const STORAGE_KEY = "meateka_user";
const PLAN_STORAGE_KEY = "meateka_subscription";
const TOKEN_STORAGE_KEY = "meateka_token";
const DEMO_CREDENTIALS = {
  email: "demo@meateka.com",
  password: "Demo123!",
};

const demoUser = {
  name: "Demo User",
  firstName: "Demo",
  lastName: "User",
  email: DEMO_CREDENTIALS.email,
  bio: "Digital creator focusing on tech and productivity.",
  avatar: "",
  twoFactorEnabled: false,
  role: "Creator",
  plan: "free",
  workspace: { name: "My Workspace", createdAt: "" },
};

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
}

function readStoredPlan() {
  try {
    const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
    return storedPlan === "premium" ? "premium" : "free";
  } catch {
    return "free";
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [plan, setPlanState] = useState(readStoredPlan);

  function saveUser(nextUser, token) {
    const hydratedUser = {
      ...demoUser,
      ...nextUser,
      plan: nextUser?.plan || readStoredPlan(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(hydratedUser));
    if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    localStorage.setItem(PLAN_STORAGE_KEY, hydratedUser.plan === "premium" ? "premium" : "free");
    setUser(hydratedUser);
    setPlanState(hydratedUser.plan === "premium" ? "premium" : "free");
  }

  function setPlan(nextPlan) {
    const normalizedPlan = nextPlan === "premium" ? "premium" : "free";
    localStorage.setItem(PLAN_STORAGE_KEY, normalizedPlan);
    setPlanState(normalizedPlan);
    setUser((currentUser) => {
      const updatedUser = currentUser ? { ...currentUser, plan: normalizedPlan } : { ...demoUser, plan: normalizedPlan };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  }

  function updateProfile(profile) {
    setUser((currentUser) => {
      if (!currentUser) return currentUser;
      const storedUser = readStoredUser() || currentUser;
      const updatedUser = {
        ...storedUser,
        ...profile,
        name: `${profile.firstName || storedUser.firstName} ${profile.lastName || storedUser.lastName}`.trim(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  }

  function updateSecurity(settings) {
    setUser((currentUser) => {
      if (!currentUser) return currentUser;
      const updatedUser = { ...(readStoredUser() || currentUser), ...settings };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  }

  function signIn(email, password) {
    if (email.trim().toLowerCase() !== DEMO_CREDENTIALS.email || password !== DEMO_CREDENTIALS.password) {
      return false;
    }

    saveUser({ ...demoUser, plan: readStoredPlan() });
    return true;
  }

  function signInDemo() {
    saveUser({ ...demoUser, plan: readStoredPlan() });
  }

  async function signInWithGoogle(credential) {
    const response = await api.post("/auth/google", {
      credential,
    });
    const nextUser = {
      ...response.user,
      name: `${response.user.firstName} ${response.user.lastName}`.trim(),
    };
    saveUser(nextUser, response.token);
    return nextUser;
  }

  function register(fullName, email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = readStoredUser();
    if (existingUser?.email?.toLowerCase() === normalizedEmail || normalizedEmail === DEMO_CREDENTIALS.email) {
      return { success: false, error: "An account with this email already exists." };
    }

    const nameParts = fullName.trim().split(/\s+/);
    const newUser = {
      ...demoUser,
      name: fullName.trim(),
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(" ") || "Creator",
      email: normalizedEmail,
      bio: "Digital creator focusing on tech and productivity.",
      avatar: "",
      twoFactorEnabled: false,
      plan: "free",
      workspace: { name: `${nameParts[0]}'s Workspace`, createdAt: new Date().toISOString() },
    };
    saveUser(newUser);
    return { success: true };
  }

  function signOut() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setUser(null);
    setPlanState(readStoredPlan());
  }

  return (
    <AuthContext.Provider value={{ user, plan, isAuthenticated: Boolean(user), signIn, signInDemo, signInWithGoogle, register, signOut, setPlan, updateProfile, updateSecurity }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
