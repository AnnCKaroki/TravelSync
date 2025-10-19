import Dashboard from './pages/Dashboard.jsx';

/**
 * Main entry point for the TravelSync application UI.
 * Renders the Dashboard with global layout styling.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-8">
      <Dashboard />
    </div>
  );
}

export default App;
