import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";
import { ProtectedRoute } from "./protected-route";
import { PublicRoute } from "./public-route";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import DashboardPage from "@/pages/dashboard";
import LoginPage from "@/pages/login";

export function AppRouter() {
  const { isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner text="Loading application..." />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - only accessible to unauthenticated users */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Protected routes - only accessible to authenticated users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Default redirects */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Catch all route - redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
