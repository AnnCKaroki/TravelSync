/**
 * Formats an ISO 8601 date string into a readable format
 * @param {string} isoString - The ISO date string
 * @returns {string} Formatted date (e.g., "October 17, 2025")
 */
export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};