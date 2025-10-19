/**
 * Application constants for API configuration
 */

export const API_KEYS = {
  OPENWEATHER: import.meta.env.VITE_OPENWEATHER_API_KEY || '',
  NEWS: import.meta.env.VITE_NEWS_API_KEY || ''
};

export const API_BASE_URLS = {
  OPENWEATHER: 'https://api.openweathermap.org/data/2.5',
  NEWS: 'https://newsapi.org/v2'
};

export const DEFAULT_COUNTRY_CODE = 'us';
