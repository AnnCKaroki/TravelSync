import { useQuery } from '@tanstack/react-query';
import { getTopHeadlines } from '../services/news.js';

/**
 * Custom hook to fetch and manage news data using React Query.
 * @param {string} countryCode - Two-letter country code (ISO 3166-1 alpha-2)
 * @returns {Object} Object containing data, isLoading, and isError from useQuery
 */
export const useNewsData = ({ countryCode, query }) => {
  const isValidCountryCode = countryCode && /^[A-Z]{2}$/i.test(countryCode);
  const enabled = Boolean((query && query.length >= 2) || isValidCountryCode);

  return useQuery({
    queryKey: ['news', countryCode, query],
    queryFn: () => getTopHeadlines(isValidCountryCode ? countryCode : undefined, query),
    enabled,
    staleTime: 5 * 60 * 1000,
  });
};
