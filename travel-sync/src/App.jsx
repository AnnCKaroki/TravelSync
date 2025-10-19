import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';

/**
 * Main entry point for the TravelSync application UI.
 * Sets up routing structure and renders the layout with navigation.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add" element={<div>Add Trip Page</div>} />
            <Route path="profile" element={<div>Profile Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
