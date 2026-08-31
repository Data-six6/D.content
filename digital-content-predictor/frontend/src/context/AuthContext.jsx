import React, { createContext, useContext, useState } from "react";

const STORAGE_KEY = "meateka_user";
const DEMO_CREDENTIALS = {
  email: "demo@meateka.com",
  password: "Demo123!",
};

const demoUser = {
  name: "Demo User",
  email: DEMO_CREDENTIALS.email,
  role: "Creator",
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

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  function saveUser(nextUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }

  function signIn(email, password) {
    if (email.trim().toLowerCase() !== DEMO_CREDENTIALS.email || password !== DEMO_CREDENTIALS.password) {
      return false;
    }

    saveUser(demoUser);
    return true;
  }

  function signInDemo() {
    saveUser(demoUser);
  }

  function signOut() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), signIn, signInDemo, signOut }}>
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
