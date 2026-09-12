import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import Feature from "./components/home/Feature.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import CreateContent from "./pages/CreateContent.jsx";
import CaptionHashtag from "./pages/CaptionHashtag.jsx";
import ContentIdeas from "./pages/ContentIdeas.jsx";
import MyContent from "./pages/MyContent.jsx";
import PlatformComparison from "./pages/PlatformComparison.jsx";
import PostingTime from "./pages/PostingTime.jsx";
import Prediction from "./pages/Prediction.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";

import Pricing from "./pages/Pricing.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";

import Profile from "./pages/Profile.jsx";

import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import Navbar from "./components/layout/Navbar.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";


function AppShell() {
  const { pathname } = useLocation();

  // Pages where the main Navbar should NOT appear
  const isAuthenticationPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/register";

  const showNavbar = !isAuthenticationPage;

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      {showNavbar && <Navbar />}

      {/* =========================
          ROUTES
      ========================== */}
      <Routes>

        {/* ==========================================
            PUBLIC PAGES
        =========================================== */}

        {/* Home */}
        <Route
          path="/"
          element={<MainPage />}
        />

        {/* Features */}
        <Route
          path="/features"
          element={<Feature />}
        />

        {/* Solutions */}
        <Route
          path="/solutions"
          element={
            <PlaceholderPage
              title="Solutions"
              description="Explore content intelligence tools for every stage of your publishing workflow."
            />
          }
        />

        {/* Case Studies */}
        <Route
          path="/case-studies"
          element={
            <PlaceholderPage
              title="Case Studies"
              description="Customer stories and content strategy examples are coming soon."
            />
          }
        />

        {/* Resources / Help Center */}
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <HelpCenter />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            AUTHENTICATION
        =========================================== */}

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Signup />}
        />


        {/* ==========================================
            DASHBOARD
        =========================================== */}

        {/* Main Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Dashboard Data */}
        <Route
          path="/plan/dashboard-data"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            CONTENT CREATION
        =========================================== */}

        {/* Caption + Hashtag */}
        <Route
          path="/caption-hashtag"
          element={
            <ProtectedRoute>
              <CaptionHashtag />
            </ProtectedRoute>
          }
        />

        {/* Content Ideas */}
        <Route
          path="/content-ideas"
          element={
            <ProtectedRoute>
              <ContentIdeas />
            </ProtectedRoute>
          }
        />

        {/* Saved Ideas */}
        <Route
          path="/plan/saved-ideas"
          element={
            <ProtectedRoute>
              <ContentIdeas />
            </ProtectedRoute>
          }
        />

        {/* Content Type */}
        <Route
          path="/content-type"
          element={
            <ProtectedRoute>
              <CreateContent />
            </ProtectedRoute>
          }
        />

        {/* Create Content from Plan */}
        <Route
          path="/plan/create-content"
          element={
            <ProtectedRoute>
              <CreateContent />
            </ProtectedRoute>
          }
        />

        {/* Create Content */}
        <Route
          path="/create-content"
          element={<CreateContent />}
        />

        {/* My Content */}
        <Route
          path="/plan/my-content"
          element={
            <ProtectedRoute>
              <MyContent />
            </ProtectedRoute>
          }
        />

        {/* My Plans */}
        <Route
          path="/my-plans"
          element={
            <ProtectedRoute>
              <MyContent />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            PLATFORM
        =========================================== */}

        {/* Platform */}
        <Route
          path="/platform"
          element={
            <ProtectedRoute>
              <PlatformComparison />
            </ProtectedRoute>
          }
        />

        {/* Platform Comparison */}
        <Route
          path="/platform-comparison"
          element={
            <ProtectedRoute>
              <PlatformComparison />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            POSTING TIME
        =========================================== */}

        {/* Posting */}
        <Route
          path="/posting"
          element={
            <ProtectedRoute>
              <PostingTime />
            </ProtectedRoute>
          }
        />

        {/* Posting Time */}
        <Route
          path="/posting-time"
          element={
            <ProtectedRoute>
              <PostingTime />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            PREDICTION
        =========================================== */}

        <Route
          path="/prediction"
          element={
            <ProtectedRoute>
              <Prediction />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            PRICING
        =========================================== */}

        <Route
          path="/pricing"
          element={
            <ProtectedRoute>
              <Pricing />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            CHECKOUT / PAYMENT
        =========================================== */}

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* Payment */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* Confirmation */}
        <Route
          path="/confirmation"
          element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            PROFILE / SETTINGS
        =========================================== */}

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* ==========================================
            404 PAGE
        =========================================== */}

        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Page Not Found"
              description="The page you requested could not be found."
            />
          }
        />

      </Routes>
    </>
  );
}


/* ==========================================
   MAIN APP
========================================== */

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  );
}