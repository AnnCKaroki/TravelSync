import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AuthPage from './pages/AuthPage.jsx';
import AddTripPage from './pages/AddTripPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

/**
 * Main entry point for the TravelSync application UI.
 * Sets up routing structure with authentication and protected routes.
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 text-slate-800 p-4 sm:p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="add" element={<AddTripPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
