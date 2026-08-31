import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const links = ["Platform", "Solutions", "Case Studies", "Resources", "Pricing"];

export default function Navbar() {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    signOut();
    navigate("/login", { replace: true });
  }

  return (
    <header className="border-b border-slate-200 bg-[#faf9ff]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-[#3930d8]">Meateka</Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const paths = { Platform: "/platform", Solutions: "/solutions", "Case Studies": "/case-studies", Resources: "/resources", Pricing: "/pricing" };
            return <Link key={link} to={paths[link]} className="py-7 text-sm text-slate-500 transition hover:text-[#3930d8]">
              {link}
            </Link>;
          })}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          {isAuthenticated ? <><Link to="/dashboard" className="text-sm font-medium text-[#3930d8]">Dashboard</Link><button onClick={handleLogout} className="rounded-full bg-[#3930d8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e27b8] sm:px-5">Logout</button></> : <><Link to="/login" className="text-sm font-medium text-[#3930d8]">Sign In</Link><Link to="/resources" className="rounded-full bg-[#3930d8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e27b8] sm:px-5">Book Demo</Link></>}
        </div>
      </div>
    </header>
  );
}
