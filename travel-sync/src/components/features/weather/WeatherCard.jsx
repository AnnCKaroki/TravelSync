import PropTypes from 'prop-types';
import Card from '../../common/Card.jsx';
import { useWeatherData } from '../../../hooks/useWeatherData.js';
import { formatTemperature, capitalizeFirstLetter } from '../../../utils/formatters.js';

/**
 * WeatherCard component that displays current weather information for a city.
 * Features skeleton loading state and error handling.
 */
const WeatherCard = ({ city = 'Paris' }) => {
  const { data, isLoading, isError } = useWeatherData(city);

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card className="bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="flex items-center space-x-6 animate-pulse">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-200 to-blue-200 rounded-2xl"></div>
          <div className="flex-1">
            <div className="h-10 bg-gradient-to-r from-sky-200 to-blue-200 rounded-xl mb-3 w-28"></div>
            <div className="h-5 bg-gradient-to-r from-sky-200 to-blue-200 rounded-lg mb-2 w-32"></div>
            <div className="h-4 bg-gradient-to-r from-sky-200 to-blue-200 rounded-lg w-40"></div>
          </div>
        </div>
      </Card>
    );
  }

  // Error state
  if (isError) {
    return (
      <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-500 text-lg">⚠️</span>
          </div>
          <div className="text-red-600 font-medium">Could not fetch weather data</div>
        </div>
      </Card>
    );
  }

  // Weather data display with safety checks
  if (data) {
    const iconUrl = data.weather?.[0]?.icon
      ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      : null;

    return (
      <Card className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-sky-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {iconUrl && (
              <div className="relative">
                <div className="absolute inset-0 bg-sky-200/30 rounded-2xl blur-xl"></div>
                <img
                  src={iconUrl}
                  alt={`${data.weather?.[0]?.description || 'Weather'} icon`}
                  className="relative w-20 h-20 drop-shadow-lg"
                />
              </div>
            )}
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                {formatTemperature(data.main?.temp)}
              </div>
              <div className="text-xl font-semibold text-slate-700">{data.name}</div>
              <div className="text-sm font-medium text-sky-600 bg-sky-100/50 px-3 py-1 rounded-full inline-block">
                {capitalizeFirstLetter(data.weather?.[0]?.description || 'N/A')}
              </div>
            </div>
          </div>
          <div className="text-right text-slate-500">
            <div className="text-sm font-medium">Current Weather</div>
            <div className="text-xs text-slate-400">Updated now</div>
          </div>
        </div>
      </Card>
    );
  }

  return null;
};

WeatherCard.propTypes = {
  city: PropTypes.string,
};

export default WeatherCard;
