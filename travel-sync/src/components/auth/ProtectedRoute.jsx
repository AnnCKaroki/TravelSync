import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

/**
 * ProtectedRoute component that guards routes requiring authentication.
 * Redirects unauthenticated users to login page.
 */
const ProtectedRoute = () => {
  const { user } = useAuth();

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the nested routes
  return <Outlet />;
};

export default ProtectedRoute;
