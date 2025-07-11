// Constants used only by formatDate
const DAY_PAD_LENGTH = 2;
const MONTH_PAD_LENGTH = 2;
const INVALID_DATE_RETURN = '-';
const MONTH_OFFSET = 1;

/**
 * Formats an ISO date string to the "dd/MM/yyyy" format.
 *
 * @param {string} dateStr - The date string in ISO format (e.g., "2019-12-02T00:00:00.000Z").
 * @returns {string} - The formatted date as "dd/MM/yyyy" or '-' if the date is invalid.
 *
 * @example
 * // Returns "02/12/2019"
 * formatDate("2019-12-02T00:00:00.000Z");
 *
 * @example
 * // Returns "-"
 * formatDate("invalid date");
 */

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return INVALID_DATE_RETURN;
  }

  const day = String(date.getDate()).padStart(DAY_PAD_LENGTH, '0');
  const month = String(date.getMonth() + MONTH_OFFSET).padStart(MONTH_PAD_LENGTH, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

// Constants used only by formatPhone
const COUNTRY_CODE_LENGTH = 2;
const DDD_LENGTH = 2;
const PHONE_LENGTH_13 = 13;
const PHONE_FIRST_PART_END_13 = 9;
const PHONE_LENGTH_11 = 11;
const PHONE_FIRST_PART_END_11 = 7;

/**
 * Formats a phone number string into a readable Brazilian phone format.
 *
 * If the input contains 13 digits, it formats as an international number with country code:
 * e.g., "+55 (51) 51234-5678"
 *
 * If the input contains 11 digits, it formats as a national number:
 * e.g., "(51) 51234-5678"
 *
 * If the input doesn't match these lengths, it returns the original string.
 *
 * @param {string} phone - The raw phone number string, which may include non-digit characters.
 * @returns {string} - The formatted phone number string or the original input if format is unrecognized.
 *
 * @example
 * // Returns "+55 (51) 51234-5678"
 * formatPhone("5551512345678");
 *
 * @example
 * // Returns "(51) 51234-5678"
 * formatPhone("51512345678");
 *
 * @example
 * // Returns original string if format unknown
 * formatPhone("12345");
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === PHONE_LENGTH_13) {
    const country = cleaned.slice(0, COUNTRY_CODE_LENGTH);
    const ddd = cleaned.slice(COUNTRY_CODE_LENGTH, COUNTRY_CODE_LENGTH + DDD_LENGTH);
    const firstPart = cleaned.slice(COUNTRY_CODE_LENGTH + DDD_LENGTH, PHONE_FIRST_PART_END_13);
    const secondPart = cleaned.slice(PHONE_FIRST_PART_END_13);
    return `+${country} (${ddd}) ${firstPart}-${secondPart}`;
  }

  if (cleaned.length === PHONE_LENGTH_11) {
    const ddd = cleaned.slice(0, DDD_LENGTH);
    const firstPart = cleaned.slice(DDD_LENGTH, PHONE_FIRST_PART_END_11);
    const secondPart = cleaned.slice(PHONE_FIRST_PART_END_11);
    return `(${ddd}) ${firstPart}-${secondPart}`;
  }

  return phone;
};
