import PropTypes from 'prop-types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { useWeatherData } from '../../../hooks/useWeatherData.js';
import { formatTemperature, capitalizeFirstLetter } from '../../../utils/formatters.js';
import { Cloud, AlertCircle } from 'lucide-react';

/**
 * WeatherCard component that displays current weather information for a city.
 * Features skeleton loading state and error handling.
 */
const WeatherCard = ({ city = 'Paris' }) => {
  const { data, isLoading, isError } = useWeatherData(city);

  // Skeleton loading state
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6 animate-pulse">
            <div className="w-16 h-16 bg-muted rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="h-8 bg-muted rounded w-20"></div>
              <div className="h-4 bg-muted rounded w-24"></div>
              <div className="h-3 bg-muted rounded w-32"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Could not fetch weather data. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Weather data display with safety checks
  if (data) {
    const iconUrl = data.weather?.[0]?.icon
      ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      : null;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Weather
          </CardTitle>
          <CardDescription>Current conditions in {data.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            {iconUrl && (
              <img
                src={iconUrl}
                alt={`${data.weather?.[0]?.description || 'Weather'} icon`}
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="w-16 h-16"
              />
            )}
            <div className="flex-1">
              <div className="text-3xl font-bold">
                {formatTemperature(data.main?.temp)}
              </div>
              <div className="text-lg font-semibold text-foreground">{data.name}</div>
              <div className="text-sm text-muted-foreground">
                {capitalizeFirstLetter(data.weather?.[0]?.description || 'N/A')}
              </div>
            </div>
            <div className="text-right text-muted-foreground">
              <div className="text-xs">Updated now</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

WeatherCard.propTypes = {
  city: PropTypes.string,
};

export default WeatherCard;
