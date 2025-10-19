import { useQuery } from '@tanstack/react-query';
import { getTopHeadlines } from '../services/news.js';

/**
 * Custom hook to fetch and manage news data using React Query.
 * @param {string} countryCode - Two-letter country code (ISO 3166-1 alpha-2)
 * @returns {Object} Object containing data, isLoading, and isError from useQuery
 */
export const useNewsData = (countryCode) => {
  return useQuery({
    queryKey: ['news', countryCode],
    queryFn: () => getTopHeadlines(countryCode),
    enabled: !!countryCode,
  });
};
