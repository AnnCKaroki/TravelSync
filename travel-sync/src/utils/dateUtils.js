/**
 * Formats an ISO 8601 date string into a readable format
 * @param {string} isoString - The ISO date string
 * @param {string} locale - The locale for formatting (defaults to 'en-US')
 * @returns {string} Formatted date (e.g., "October 17, 2025")
 */
export const formatDate = (isoString, locale = 'en-US') => {
  if (!isoString) {
    throw new Error('isoString parameter is required');
  }
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${isoString}`);
  }
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
