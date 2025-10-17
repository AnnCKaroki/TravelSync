import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeatherData } from '../services/weather.js';

/**
 * Custom hook to fetch and manage weather data using React Query
 * @param {string} [initialCity] - Initial city to query weather data for
 * @returns {Object} Object containing:
 *   - data: Weather data from API
 *   - isLoading: Loading state boolean
 *   - isError: Error state boolean
 *   - error: Error object if request fails
 *   - city: Current city being queried
 *   - setCity: Function to update the city and trigger new query
 *
 * @example
 * const { data, isLoading, isError, error, city, setCity } = useWeatherData('Paris');
 *
 * // Trigger new query
 * setCity('London');
 */
export const useWeatherData = (initialCity) => {
  const [city, setCity] = useState(initialCity || '');

  const queryResult = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherData(city),
    enabled: !!city, // Only run query if city is not empty/falsy
  });

  return {
    ...queryResult,
    city,
    setCity
  };
};
