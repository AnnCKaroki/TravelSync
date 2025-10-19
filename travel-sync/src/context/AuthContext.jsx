import { createContext, useContext, useState } from 'react';

/**
 * Authentication context for managing user state and auth functions.
 */
const AuthContext = createContext();

/**
 * AuthProvider component that wraps the application with authentication state.
 * Provides user state and login/logout functions to child components.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Placeholder login function - sets dummy user data
  const login = () => {
    setUser({ name: 'Ann' });
  };

  // Logout function - clears user data
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook for accessing authentication context.
 * Simplifies using the auth context throughout the application.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
