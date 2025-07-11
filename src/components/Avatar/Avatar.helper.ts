const INITIALS_LENGTH_SINGLE_NAME = 2;

/**
 * Returns the initials from the given name string.
 *
 * If the input is empty or undefined, returns undefined.
 * If the trimmed input length is less than the minimum length for initials,
 * returns the trimmed string as is.
 * Otherwise, returns the first two characters of the first name segment.
 *
 * @param {string} value - The full name string to extract initials from.
 * @returns {string | undefined} The initials (first two letters) of the first name,
 *                               or the trimmed input if too short,
 *                               or undefined if input is empty.
 *
 * @example
 * // Returns "Jo"
 * getUserInitials("João Silva");
 *
 * @example
 * // Returns "A"
 * getUserInitials("A");
 *
 * @example
 * // Returns undefined
 * getUserInitials("");
 */
export const getUserInitials = (value: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  const names = value
    .trim()
    .split(' ')
    .filter((name) => name !== '');

  if (names.length === 0) {
    return undefined;
  }

  if (names.length === 1) {
    return names[0].substring(0, INITIALS_LENGTH_SINGLE_NAME).toUpperCase();
  }

  const initials = names.map((name) => name[0].toUpperCase()).join('');

  return initials;
};
