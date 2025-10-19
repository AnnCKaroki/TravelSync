import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

/**
 * Main layout component that provides the application shell.
 * Renders navigation and page content using React Router's Outlet.
 */
const Layout = () => {
  return (
    <>
      <main className="pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
};

export default Layout;
