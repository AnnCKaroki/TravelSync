import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/layout/Layout.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import TripsPage from './pages/TripsPage.jsx';
import TripDashboard from './pages/TripDashboard.jsx';
import AuthPage from './pages/AuthPage.jsx';
import AddTripPage from './pages/AddTripPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Landing from './pages/Landing.jsx';

/**
 * Main entry point for the TravelSync application UI.
 * Sets up routing structure with authentication and protected routes.
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 text-slate-800 p-4 sm:p-8">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/app" element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<TripsPage />} />
              <Route path="trips/:id" element={<TripDashboard />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="add" element={<AddTripPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
