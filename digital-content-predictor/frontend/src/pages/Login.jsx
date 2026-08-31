import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { isAuthenticated, signIn, signInDemo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const destination = location.state?.from?.pathname || "/dashboard";

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!signIn(email, password)) {
      setError("Invalid email or password.");
      return;
    }

    navigate(destination, { replace: true });
  }

  function handleDemoSignIn() {
    signInDemo();
    navigate("/dashboard", { replace: true });
  }

  return (
    <main className="min-h-screen bg-[#faf9ff] px-5 py-10 text-[#17233d] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-md">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-[#3930d8]">Meateka</Link>
        <section className="mt-10 rounded-2xl border border-[#d9dbea] bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-[#172033]">Sign in</h1>
          <p className="mt-2 text-sm text-[#667085]">Continue to your content intelligence dashboard.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-[#172033]">Email</label>
              <input id="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-[#cfd2e3] px-3 py-2.5 text-sm outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]" required />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold text-[#172033]">Password</label>
              <input id="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-[#cfd2e3] px-3 py-2.5 text-sm outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]" required />
            </div>
            {error && <p role="alert" className="text-sm font-medium text-[#c2415b]">{error}</p>}
            <button type="submit" className="w-full rounded-lg bg-[#4f46e5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4338ca]">Sign In</button>
          </form>

          <div className="my-7 flex items-center gap-3 text-xs text-[#98a2b3]"><span className="h-px flex-1 bg-[#eaebf2]" />or<span className="h-px flex-1 bg-[#eaebf2]" /></div>
          <div className="rounded-xl border border-[#d9dbff] bg-[#f2f3ff] p-4">
            <h2 className="text-sm font-bold text-[#172033]">Demo Account</h2>
            <p className="mt-1 text-xs leading-5 text-[#667085]">Try the Meateka dashboard without creating an account.</p>
            <button type="button" onClick={handleDemoSignIn} className="mt-4 w-full rounded-lg border border-[#c7c9f7] bg-white px-4 py-2.5 text-sm font-semibold text-[#4f46e5] transition hover:bg-[#eeedff]">Continue with Demo</button>
          </div>
        </section>
      </div>
    </main>
  );
}
