import { useState } from 'react';
import { Card, Button } from '../components/common/index.js';
import Calendar from '../components/features/tripplanner/Calendar.jsx';

/**
 * AddTripPage component for planning new trips.
 * Features destination input and date selection.
 */
const AddTripPage = () => {
  const [destination, setDestination] = useState('');
  const [_dates, _setDates] = useState(null); // Prefixed with _ to indicate unused for now

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle trip planning logic
    console.log('Planning trip to:', destination);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
            <span className="text-white text-3xl">🗺️</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Plan Your Trip
          </h1>
          <p className="text-slate-600 mt-3 font-medium">Where will your next adventure take you?</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-700">
                Where are you going?
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg"
                placeholder="Enter your destination..."
                required
              />
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-semibold text-slate-700">
                When are you traveling?
              </label>
              <Calendar />
            </div>

            <Button type="submit" className="w-full">
              Plan Trip
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddTripPage;
