import Card from '../../common/Card.jsx';
import { useWeatherData } from '../../../hooks/useWeatherData.js';
import { formatTemperature, capitalizeFirstLetter } from '../../../utils/formatters.js';

/**
 * WeatherCard component that displays current weather information for a city.
 * Features skeleton loading state and error handling.
 */
const WeatherCard = () => {
  const { data, isLoading, isError } = useWeatherData('Paris');

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card>
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded"></div>
          <div className="flex-1">
            <div className="h-8 bg-gray-200 rounded mb-2 w-20"></div>
            <div className="h-4 bg-gray-200 rounded mb-1 w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </Card>
    );
  }

  // Error state
  if (isError) {
    return (
      <Card>
        <div className="text-red-500">Could not fetch weather.</div>
      </Card>
    );
  }

  // Weather data display
  if (data) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
      <Card>
        <div className="flex items-center space-x-4">
          <img
            src={iconUrl}
            alt="Weather icon"
            className="w-16 h-16"
          />
          <div className="flex-1">
            <div className="text-5xl font-bold">
              {formatTemperature(data.main.temp)}
            </div>
            <div className="text-lg font-medium">{data.name}</div>
            <div className="text-gray-500">
              {capitalizeFirstLetter(data.weather[0].description)}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return null;
};

export default WeatherCard;
