import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Card, Button } from '../components/common/index.js';

/**
 * ProfilePage component for user profile management.
 * Displays user information and logout functionality.
 */
const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25">
            <span className="text-white text-4xl">👤</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-slate-600 mt-3 font-medium">Manage your account settings</p>
        </div>

        <div className="space-y-6">
          {/* Welcome Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-indigo-600 text-2xl font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-700 mb-2">
                  Welcome, {user?.name || 'User'}!
                </h2>
                <p className="text-slate-500">Ready for your next adventure?</p>
              </div>
            </div>
          </Card>

          {/* Account Info Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-700 flex items-center space-x-3">
                <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600">⚙️</span>
                </span>
                <span>Account Information</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wide">Name</p>
                      <p className="text-slate-700 font-medium">{user?.name || 'Not specified'}</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                      Edit
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wide">Email</p>
                      <p className="text-slate-700 font-medium">user@example.com</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Logout Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-red-100">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-700 flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600">🚪</span>
                </span>
                <span>Account Actions</span>
              </h3>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-xl border border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">Sign Out</p>
                    <p className="text-sm text-slate-500">You'll need to sign in again to access your account</p>
                  </div>
                  <Button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 shadow-red-500/25"
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
