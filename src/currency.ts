/**
 * Formats a number into Indonesian Rupiah format.
 * @param {string} num - The number to be formatted as a string.
 * @param {string} [prefix] - The prefix to be added to the formatted number. (Optional)
 * @returns {string} The formatted number in Indonesian Rupiah format.
 *
 * @example
 * const amount = '1000000';
 * const formattedAmount = formatRupiah(amount, 'Rp.');
 * // => 'Rp. 1.000.000'
 */
export function formatRupiah(num: string, prefix: "" | "Rp." = "Rp."): string {
  let separator: string;
  let numberString = num.replace(/[^,\d]/g, "").toString(),
    split = numberString.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substring(0, sisa),
    ribuan = split[0].substring(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;

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
 * @returns {string} The formatted number in a simplified K format.
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
}): string => {
  return (
    Math.abs(value) > 999
      ? (Math.sign(value) * Math.round(Math.abs(value) / 100)) / 10 + "K"
      : Math.sign(value) * Math.abs(value)
  ).toString();
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

  function convertToWords(num: number, unitIndex?: number) {
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
