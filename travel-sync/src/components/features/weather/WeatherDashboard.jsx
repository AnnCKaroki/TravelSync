import { useWeatherData } from '../../../hooks/useWeatherData.js';

/**
 * WeatherDashboard component for displaying weather information
 * Uses the useWeatherData hook for data fetching and state management
 */
const WeatherDashboard = () => {
  const { data, isLoading, isError, error, city, setCity } = useWeatherData();

  const handleCitySubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCity = formData.get('city');
    if (newCity?.trim()) {
      setCity(newCity.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weather Information</h2>

      {/* City Input Form */}
      <form onSubmit={handleCitySubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            name="city"
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Weather Display */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-2">Loading weather data...</p>
        </div>
      )}

      {isError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error?.message || 'Failed to fetch weather data'}</p>
        </div>
      )}

      {data && !isLoading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            {data.name}, {data.sys.country}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-3xl font-bold text-blue-800">
                {Math.round(data.main.temp)}°C
              </p>
              <p className="text-blue-600 capitalize">
                {data.weather[0].description}
              </p>
            </div>

            <div className="text-sm text-blue-700 space-y-1">
              <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind: {data.wind.speed} m/s</p>
              <p>Pressure: {data.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}

      {!city && !isLoading && (
        <div className="text-center py-8 text-gray-500">
          <p>Enter a city name to get weather information</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
