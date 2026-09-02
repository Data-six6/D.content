import React, { createContext, useContext, useState } from "react";

const STORAGE_KEY = "meateka_user";
const PLAN_STORAGE_KEY = "meateka_subscription";
const DEMO_CREDENTIALS = {
  email: "demo@meateka.com",
  password: "Demo123!",
};

const demoUser = {
  name: "Demo User",
  email: DEMO_CREDENTIALS.email,
  role: "Creator",
  plan: "free",
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

  function saveUser(nextUser) {
    const hydratedUser = {
      ...demoUser,
      ...nextUser,
      plan: nextUser?.plan || readStoredPlan(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(hydratedUser));
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

  function signOut() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PLAN_STORAGE_KEY);
    setUser(null);
    setPlanState("free");
  }

  return (
    <AuthContext.Provider value={{ user, plan, isAuthenticated: Boolean(user), signIn, signInDemo, signOut, setPlan }}>
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
