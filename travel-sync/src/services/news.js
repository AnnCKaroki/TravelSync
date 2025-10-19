import axios from 'axios';
import { API_KEYS, API_BASE_URLS, DEFAULT_COUNTRY_CODE } from '../utils/constants.js';

/**
 * Fetches top headlines from NewsAPI for a specified country
 * @param {string} [countryCode=DEFAULT_COUNTRY_CODE] - Two-letter country code (ISO 3166-1 alpha-2)
 * @returns {Promise<Array>} Array of news articles with title, description, url, etc.
 * @throws {Error} Throws error for missing API key, API errors, or network failures
 *
 * @example
 * const headlines = await getTopHeadlines(); // Uses default country
 * const ukNews = await getTopHeadlines('gb'); // UK headlines
 *
 * Edge cases handled:
 * - Missing or invalid API key
 * - NewsAPI error responses within successful HTTP responses
 * - Network timeouts and connectivity issues
 * - Empty or malformed response data
 * - Invalid country codes
 */
export const getTopHeadlines = async (countryCode = DEFAULT_COUNTRY_CODE, q) => {
  // Validate API key exists
  if (!API_KEYS.NEWS || API_KEYS.NEWS.trim().length === 0) {
    throw new Error('News API key is missing or empty');
  }

  // Validate countryCode parameter
  if (countryCode && (typeof countryCode !== 'string' || countryCode.trim().length === 0)) {
    throw new Error('Country code must be a non-empty string');
  }

  const sanitizedCountryCode = countryCode ? countryCode.trim().toLowerCase() : DEFAULT_COUNTRY_CODE;

  try {
    const endpoint = q ? `${API_BASE_URLS.NEWS}/everything` : `${API_BASE_URLS.NEWS}/top-headlines`;
    const response = await axios.get(endpoint, {
      params: {
        apiKey: API_KEYS.NEWS,
        pageSize: 20,
        ...(q
          ? { q, sortBy: 'publishedAt', language: 'en' }
          : { country: sanitizedCountryCode }),
      },
      timeout: 10000, // 10 second timeout for news requests
      headers: {
        'User-Agent': 'TravelSync/1.0'
      }
    });

    // Validate response structure
    if (!response.data || typeof response.data !== 'object') {
      throw new Error('Invalid response format from NewsAPI');
    }

    // Check for NewsAPI-specific errors and validate successful status
    if (response.data.status !== 'ok') {
      const errorMessage = response.data.message || 'NewsAPI request was not successful';
      throw new Error(`NewsAPI Error: ${errorMessage}`);
    }

    // Validate articles array exists
    if (!response.data.articles || !Array.isArray(response.data.articles)) {
      throw new Error('No articles found in NewsAPI response');
    }

    // Return only the articles array
    return response.data.articles;

  } catch (error) {
    // Handle axios-specific errors
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout: NewsAPI is taking too long to respond. Please try again later.');
    }

    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      throw new Error('Network error: Unable to connect to NewsAPI. Please check your internet connection.');
    }

    // Handle HTTP response errors
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        throw new Error('Invalid News API key. Please check your API configuration.');
      }

      if (status === 400) {
        throw new Error('Invalid request parameters. Please check the country code.');
      }

      if (status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }

      if (status >= 500) {
        throw new Error('NewsAPI server error. Please try again later.');
      }

      throw new Error(`NewsAPI returned error status: ${status}`);
    }

    // If error was already thrown by our validation, re-throw it
    if (error.message && (
      error.message.includes('News API key') ||
      error.message.includes('Country code') ||
      error.message.includes('NewsAPI Error') ||
      error.message.includes('Invalid response') ||
      error.message.includes('No articles found')
    )) {
      throw error;
    }

    // Generic fallback for unexpected errors
    throw new Error('Failed to fetch news headlines. Please try again later.');
  }
};
