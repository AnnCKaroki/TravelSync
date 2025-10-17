/**
 * Formats a temperature value with Celsius symbol
 * @param {number} temp - Temperature value
 * @returns {string} Formatted temperature (e.g., "25.0°C") or "N/A" for invalid inputs
 */
export const formatTemperature = (temp) => {
  if (typeof temp !== 'number' || !isFinite(temp)) {
    return 'N/A';
  }
  return `${temp.toFixed(1)}°C`;
};

/**
 * Capitalizes the first letter of a string
 * @param {string} string - String to capitalize
 * @returns {string} String with first letter capitalized, or empty string for invalid inputs
 */
export const capitalizeFirstLetter = (string) => {
  if (!string || typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
