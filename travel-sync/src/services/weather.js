import axios from 'axios';
import { API_KEYS, API_BASE_URLS } from '../utils/constants.js';

/**
 * Fetches weather data for a specified city from OpenWeatherMap API
 * @param {string} city - The name of the city to get weather data for
 * @returns {Promise<Object>} Weather data object containing temperature, description, etc.
 * @throws {Error} Throws specific error for city not found (404) or generic error for other failures
 *
 * @example
 * const weatherData = await getWeatherData('Paris');
 * console.log(weatherData.main.temp); // Temperature in Celsius
 */
export const getWeatherData = async (city) => {
  // Input validation
  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    throw new Error('City must be a non-empty string');
  }

  if (!API_KEYS.OPENWEATHER) {
    throw new Error('OpenWeather API key is missing');
  }

  try {
    const response = await axios.get(`${API_BASE_URLS.OPENWEATHER}/weather`, {
      params: {
        q: city.trim(),
        appid: API_KEYS.OPENWEATHER,
        units: 'metric'
      },
      timeout: 5000  // 5 second timeout
    });

    return response.data;
  } catch (error) {
    // Handle specific 404 error for city not found
    if (error.response && error.response.status === 404) {
      throw new Error(`City not found: '${city}'. Please check the spelling.`);
    }

    // Handle rate limiting
    if (error.response && error.response.status === 429) {
      throw new Error('Weather service rate limit exceeded. Please try again in a few moments.');
    }

    // Handle all other errors (network issues, 500 errors, etc.)
    console.error('Weather API error:', error.message, error.response?.status);
    throw new Error('Failed to fetch weather data. Please try again later.');
  }};
