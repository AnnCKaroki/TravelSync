import { NavLink } from 'react-router-dom';

/**
 * Bottom navigation component that provides fixed navigation at the bottom of the screen.
 * Uses react-router-dom NavLink for active state management.
 */
const BottomNav = () => {
  const navigationLinks = [
    { path: '/', label: 'My Trips', icon: '🏠' },
    { path: '/add', label: 'Add Trip', icon: '➕' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200/50 shadow-2xl shadow-slate-900/10">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 py-2 px-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 transform -translate-y-1'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            <span className="text-xs font-medium">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
