import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateContent from "./pages/CreateContent.jsx";
import Pricing from "./pages/Pricing.jsx";
import CaptionHashtag from "./pages/CaptionHashtag.jsx";
import ContentIdeas from "./pages/ContentIdeas.jsx";
import MyContent from "./pages/MyContent.jsx";
import PlatformComparison from "./pages/PlatformComparison.jsx";
import PostingTime from "./pages/PostingTime.jsx";
import Prediction from "./pages/Prediction.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/caption-hashtag" element={<ProtectedRoute><CaptionHashtag /></ProtectedRoute>} />
          <Route path="/content-ideas" element={<ProtectedRoute><ContentIdeas /></ProtectedRoute>} />
          <Route path="/saved-ideas" element={<ProtectedRoute><ContentIdeas /></ProtectedRoute>} />
          <Route path="/content-type" element={<ProtectedRoute><CreateContent /></ProtectedRoute>} />
          <Route path="/create-plan" element={<ProtectedRoute><CreateContent /></ProtectedRoute>} />
          <Route path="/create-content" element={<CreateContent />} />
          <Route path="/my-content" element={<ProtectedRoute><MyContent /></ProtectedRoute>} />
          <Route path="/my-plans" element={<ProtectedRoute><MyContent /></ProtectedRoute>} />
          <Route path="/platform" element={<ProtectedRoute><PlatformComparison /></ProtectedRoute>} />
          <Route path="/platform-comparison" element={<ProtectedRoute><PlatformComparison /></ProtectedRoute>} />
          <Route path="/posting" element={<ProtectedRoute><PostingTime /></ProtectedRoute>} />
          <Route path="/posting-time" element={<ProtectedRoute><PostingTime /></ProtectedRoute>} />
          <Route path="/prediction" element={<ProtectedRoute><Prediction /></ProtectedRoute>} />
          <Route path="/solutions" element={<PlaceholderPage title="Solutions" description="Explore content intelligence tools for every stage of your publishing workflow." />} />
          <Route path="/case-studies" element={<PlaceholderPage title="Case Studies" description="Customer stories and content strategy examples are coming soon." />} />
          <Route path="/resources" element={<PlaceholderPage title="Resources" description="Guides and practical resources for smarter content planning are coming soon." />} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><PlaceholderPage title="Profile" description="Manage your creator account details." /></ProtectedRoute>} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" description="The page you requested could not be found." />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
