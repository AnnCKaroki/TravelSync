/**
 * Validates search input for non-empty strings under 50 characters
 * @param {string} input - Search input to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const isSearchInputValid = (input) => {
  if (typeof input !== 'string') return false;
  const trimmed = input.trim();
  return trimmed.length > 0 && trimmed.length < 50;
};