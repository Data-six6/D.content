import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

const TOKEN_KEY = "sl_token";
const USER_KEY = "sl_user";

const demoUser = {
  name: "Demo User",
  email: "demo@meateka.com",
  role: "Creator",
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

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

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
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), signIn, signUp, signInDemo, signOut }}>
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