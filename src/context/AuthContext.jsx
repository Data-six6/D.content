import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

const TOKEN_KEY = "sl_token";
const USER_KEY = "sl_user";
const PLAN_STORAGE_KEY = "sl_plan";

const demoUser = {
  name: "Demo User",
  email: "demo@meateka.com",
  role: "Creator",
  plan: "free",
  workspace: { name: "My Workspace", createdAt: "" },
};

const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const storedUser = localStorage.getItem(USER_KEY);
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

  function saveSession(token, nextUser) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }

  async function signIn(email, password) {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password_hash: password,
      });
      saveSession(data.token, data.user);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.error || "Invalid email or password.";
      return { success: false, error: message };
    }
  }

  async function signUp(email, password, firstName, lastName) {
    try {
      const { data } = await api.post("/auth/register", {
        email,
        password_hash: password,
        first_name: firstName,
        last_name: lastName,
      });
      saveSession(data.token, data.user);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.error || "Failed to create account.";
      return { success: false, error: message };
    }
  }

  function signInDemo() {
    // Demo mode is a local-only stand-in and does not hit the API or
    // carry a real JWT. Protected API calls will not succeed while in
    // this mode; it's meant for UI walkthroughs only.
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
    setUser(demoUser);
  }

  function signOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setPlanState(readStoredPlan());
  }

  async function signInWithGoogle(_credential) {
    // Google sign-in requires a backend endpoint to verify the credential.
    // For now, fall back to demo mode so the UI remains walkthrough-capable.
    signInDemo();
  }

  function updateProfile(_updates) {
    // Profile updates would be persisted via API in a full implementation.
    // This is a no-op stub so the profile form does not crash.
  }

  function updateSecurity(_updates) {
    // Security updates would be persisted via API in a full implementation.
    // This is a no-op stub so the security form does not crash.
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), signIn, signUp, signInDemo, signOut, signInWithGoogle, updateProfile, updateSecurity }}>
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