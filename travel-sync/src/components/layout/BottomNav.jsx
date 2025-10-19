import { NavLink } from 'react-router-dom';

/**
 * Bottom navigation component that provides fixed navigation at the bottom of the screen.
 * Uses react-router-dom NavLink for active state management.
 */
const BottomNav = () => {
  const navigationLinks = [
    { path: '/', label: 'My Trips' },
    { path: '/add', label: 'Add Trip' },
    { path: '/profile', label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-2">
      <div className="flex justify-around items-center">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-500'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
