/**
 * Formats a numeric value as an Indonesian Rupiah (IDR) currency string.
 *
 * @param num - The numeric value to format as IDR.
 * @param prefix - The currency prefix, which defaults to "Rp.".
 * @param symbol - The symbol used for thousands separator, which defaults to ",".
 * @returns The formatted IDR currency string.
 */
export function formatRupiah(
  num: string,
  prefix: "" | "Rp." = "Rp.",
  symbol = ",",
): string {
  let separator: string;
  let numberString = num.replace(/[^,\d]/g, "").toString(),
    split = numberString.split(","),
    rest = split[0].length % 3,
    rupiah = split[0].substring(0, rest),
    ribuan = split[0].substring(rest).match(/\d{3}/gi);

  if (ribuan) {
    separator = rest ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + symbol + split[1] : rupiah;

  if (prefix === undefined) return rupiah;
  if (rupiah) return "Rp. " + rupiah;

  return "";
}

/**
 * Formats a number into United States Dollar (USD) currency format.
 * @param {number} number - The number to be formatted as USD currency.
 * @returns {string} The formatted number in USD currency format.
 *
 * @example
 * const amount = 1000000;
 * const formattedAmount = formatUSD(amount);
 * // => '$1,000,000.00' (or the equivalent in your locale)
 */
export function formatUSD(number: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
}

/**
 * Formats a number into a simplified K format.
 * @param {object} params - The input object containing the value to be formatted.
 * @param {number} params.value - The number to be formatted.
 * @returns The formatted number in a simplified K format.
 *
 * @example
 * const number1 = 500;
 * const formattedNumber1 = formatK({ value: number1 });
 * // Output: "500"
 *
 * const number2 = 1500;
 * const formattedNumber2 = formatK({ value: number2 });
 * // Output: "1.5K"
 *
 * const number3 = -2500
 * const formattedNumber3 = formatK({ value: number3 });
 * // Output: "-2.5K"
 */
export const formatK: ({ value }: { value: number }) => string = ({
  value,
}: Parameters<typeof formatK>[0]) => {
  return (
    Math.abs(value) > 999
      ? (Math.sign(value) * Math.round(Math.abs(value) / 100)) / 10 + "K"
      : Math.sign(value) * Math.abs(value)
  ).toString();
};

/**
 * Format a numeric value as a human-readable price digit.
 * If the value is less than 1000, it remains unchanged.
 * If the value is between 1000 and 999999, it is formatted as 'k' (thousands).
 * If the value is one million or more, it is formatted as 'M' (millions).
 *
 * For example:
 * - 100 -> "100"
 * - 1000 -> "1k"
 * - 999999 -> "999k"
 * - 1000000 -> "1M"
 * - 1200000 -> "1.2M"
 * - 10000000 -> "10M"
 *
 * @param {number} value - The numeric value to format.
 * @returns {string} The formatted price digit as a string.
 */
export const formatPriceDigit = (value: number): string => {
  if (value < 1000) {
    return value.toString();
  } else if (value >= 1000 && value <= 999999) {
    const kValue = Math.floor(value / 1000);
    return kValue + "k";
  } else if (value >= 1000000) {
    const millionValue = value / 1000000;
    return millionValue % 1 === 0
      ? millionValue.toFixed(0) + "M"
      : millionValue.toFixed(1) + "M";
  }
  return value.toString();
};
/**
 * Converts a number to a text representation in Indonesian.
 * @param {number} number - The number to convert.
 * @returns {string} Text representation in Indonesian of the given number.
 * @example
 * // Uses a function to convert numbers to text
 * const number = 1234567;
 * const text = countableNumber(number);
 * // -> Output: "Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh"
 */
export function countableNumber(number: number): string {
  const words = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
    "Sepuluh",
    "Sebelas",
    "Dua Belas",
    "Tiga Belas",
    "Empat Belas",
    "Lima Belas",
    "Enam Belas",
    "Tujuh Belas",
    "Delapan Belas",
    "Sembilan Belas",
  ];

  const tens = [
    "",
    "Sepuluh",
    "Dua Puluh",
    "Tiga Puluh",
    "Empat Puluh",
    "Lima Puluh",
    "Enam Puluh",
    "Tujuh Puluh",
    "Delapan Puluh",
    "Sembilan Puluh",
  ];

  const units = ["", "Ribu", "Juta", "Miliar", "Triliun", "Kuadriliun"];

  function convertToWords(num: number, _unitIndex?: number) {
    if (num === 0) {
      return "";
    } else if (num < 20) {
      return words[num];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + words[num % 10];
    } else {
      const hundreds =
        words[Math.floor(num / 100)] !== ""
          ? words[Math.floor(num / 100)] + " Ratus "
          : "";
      return hundreds + convertToWords(num % 100);
    }
  }

  let result = "";
  let unitIndex = 0;

  while (number > 0) {
    const currentChunk = number % 1000;
    if (currentChunk !== 0) {
      result =
        convertToWords(currentChunk, unitIndex) +
        " " +
        units[unitIndex] +
        " " +
        result;
    }
    number = Math.floor(number / 1000);
    unitIndex++;
  }

  return result.trim();
}
