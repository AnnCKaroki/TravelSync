/**
 * Formats a temperature value with Celsius symbol
 * @param {number} temp - Temperature value
 * @returns {string} Formatted temperature (e.g., "25°C")
 */
export const formatTemperature = (temp) => `${temp}°C`;

/**
 * Capitalizes the first letter of a string
 * @param {string} string - String to capitalize
 * @returns {string} String with first letter capitalized
 */
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};