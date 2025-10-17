/**
 * Validates search input for non-empty strings under specified character limit
 * @param {string} input - Search input to validate
 * @param {number} maxLength - Maximum allowed length (defaults to 50)
 * @returns {boolean} True if valid, false otherwise
 */
export const isSearchInputValid = (input, maxLength = 50) => {
  if (typeof input !== 'string') return false;
  const trimmed = input.trim();
  return trimmed.length > 0 && trimmed.length < maxLength;
};