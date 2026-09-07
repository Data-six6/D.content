import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateContent from "./pages/CreateContent.jsx";
import CaptionHashtag from "./pages/CaptionHashtag.jsx";
import ContentIdeas from "./pages/ContentIdeas.jsx";
import MyContent from "./pages/MyContent.jsx";
import PlatformComparison from "./pages/PlatformComparison.jsx";
import PostingTime from "./pages/PostingTime.jsx";
import Prediction from "./pages/Prediction.jsx";
import Pricing from "./pages/Pricing.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Profile from "./pages/Profile.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function AppShell() {
  const { pathname } = useLocation();
  const isAuthenticationPage = pathname === "/login" || pathname === "/signup" || pathname === "/register";
  const showNavbar = !isAuthenticationPage;

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/caption-hashtag" element={<ProtectedRoute><CaptionHashtag /></ProtectedRoute>} />
        <Route path="/content-ideas" element={<ProtectedRoute><ContentIdeas /></ProtectedRoute>} />
        <Route path="/plan/saved-ideas" element={<ProtectedRoute><ContentIdeas /></ProtectedRoute>} />
        <Route path="/content-type" element={<ProtectedRoute><CreateContent /></ProtectedRoute>} />
        <Route path="/plan/create-content" element={<ProtectedRoute><CreateContent /></ProtectedRoute>} />
        <Route path="/create-content" element={<CreateContent />} />
        <Route path="/plan/my-content" element={<ProtectedRoute><MyContent /></ProtectedRoute>} />
        <Route path="/my-plans" element={<ProtectedRoute><MyContent /></ProtectedRoute>} />
        <Route path="/platform" element={<ProtectedRoute><PlatformComparison /></ProtectedRoute>} />
        <Route path="/platform-comparison" element={<ProtectedRoute><PlatformComparison /></ProtectedRoute>} />
        <Route path="/posting" element={<ProtectedRoute><PostingTime /></ProtectedRoute>} />
        <Route path="/posting-time" element={<ProtectedRoute><PostingTime /></ProtectedRoute>} />
        <Route path="/prediction" element={<ProtectedRoute><Prediction /></ProtectedRoute>} />
        <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/confirmation" element={<ProtectedRoute><Confirmation /></ProtectedRoute>} />
        <Route path="/solutions" element={<PlaceholderPage title="Solutions" description="Explore content intelligence tools for every stage of your publishing workflow." />} />
        <Route path="/case-studies" element={<PlaceholderPage title="Case Studies" description="Customer stories and content strategy examples are coming soon." />} />
        <Route path="/resources" element={<PlaceholderPage title="Resources" description="Guides and practical resources for smarter content planning are coming soon." />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" description="The page you requested could not be found." />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  );
}