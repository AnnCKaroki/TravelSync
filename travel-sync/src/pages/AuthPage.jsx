import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Card, Button } from '../components/common/index.js';

/**
 * Authentication page component for user login.
 * Provides a simple login form that redirects to dashboard on success.
 */
const AuthPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <Card className="w-full max-w-md mx-4 relative z-10 bg-white/90 backdrop-blur-md border-blue-200/50 shadow-2xl shadow-blue-500/10">
        <div className="space-y-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30 animate-pulse">
              <span className="text-white text-4xl">✈️</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to TravelSync
            </h1>
            <p className="text-slate-600 mt-3 font-medium">Sign in to start your journey</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-8">
              Sign In to Continue
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;
