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
}) => {
  return (
    Math.abs(value) > 999
      ? (Math.sign(value) * Math.round(Math.abs(value) / 100)) / 10 + "K"
      : Math.sign(value) * Math.abs(value)
  ).toString();
};
