/**
 * Formats a date string in the USA date format (short month, day, and year).
 *
 * @param dateString - The input date string.
 * @returns The formatted USA date (e.g., "Aug 25, 23") or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getUSADateFormat('2023-08-25');
 * // Result: "Aug 25, 23" or "-"
 * ```
 */
export const getUSADateFormat = (dateString: string) => {
  const dateFormat = new Date(dateString);

  const result = dateFormat.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return result === "Invalid Date" ? "-" : result;
};

/**
 * Formats a date string in the USA date format with a long month (long month, day, and year).
 *
 * @param dateString - The input date string.
 * @returns The formatted USA date with a long month (e.g., "August 25, 2023") or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getUSADateWithLongMonthFormat('2023-08-25');
 * // Result: "August 25, 2023" or "-"
 * ```
 */
export const getUSADateWithLongMonthFormat = (date: string) => {
  const dateFormat = new Date(date);

  const result = dateFormat.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return result === "Invalid Date" ? "-" : result;
};

/**
 * Formats a date string in the EST date format (short month, day, year, hour, minute).
 *
 * @param dateString - The input date string.
 * @returns The formatted EST date (e.g., "Aug 25, 2023 12:34 EST") or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getEstDateFormat('2023-08-25T12:34:56');
 * // Result: "Aug 25, 2023 12:34 EST" or "-"
 * ```
 */
export const getEstDateFormat = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    date.toLocaleDateString("en-US", options).replace(/\u202F/g, " ") + " EST"
  );
};

/**
 * Formats a date string with a short year in the format (short month, day, 2-digit year).
 *
 * @param dateString - The input date string.
 * @returns The formatted date with a short year (e.g., "Aug 25, 23") or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getDateWithSortYearFormat('2023-08-25');
 * // Result: "Aug 25, 23" or "-"
 * ```
 */
export const getDateWithSortYearFormat = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Formats a date string in the USA sort date format (2-digit month, 2-digit day, 2-digit year).
 *
 * @param dateString - The input date string.
 * @returns The formatted USA sort date or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getUSASortDateFormat('2023-08-25'); // Result: "08/25/23" or "-"
 * ```
 */
export const getUSASortDateFormat = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Formats a date string in the UK date format (long month, day, and year).
 *
 * @param dateString - The input date string.
 * @returns The formatted UK date or "-" if the input is not a valid date.
 * @example
 * ```typescript
 * const formattedDate = getEnGbDateFormat('2023-08-25'); // Result: "25 August 2023" or "-"
 * ```
 */
export const getEnGbDateFormat = (dateString: string) => {
  const dateFormat = new Date(dateString);

  const result = dateFormat.toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return result;
};
