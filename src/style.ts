/*:*
 * Truncates a given text to a specified length and adds ellipsis (...) at the specified position.
 *
 * @param {Object} options - Options for text truncation.
 * @param {string} options.text - The input text to be truncated.
 * @param {number} options.length - The maximum length of the truncated text.
 * @param {("start" | "middle" | "end")} [options.position="end"] - The position to add ellipsis.
 *
 * @returns {string} The truncated text with ellipsis.
 *
 * @example
 * // Truncate text at the end
 * const truncatedText = textEllipsis({ text: "This is a long text.", length: 10 });
 * // Result: "This is a..."
 *
 * // Truncate text in the middle
 * const truncatedText = textEllipsis({ text: "This is a long text.", length: 10, position: "middle" });
 * // Result: "This is...text."
 *
 * // Truncate text at the start
 * const truncatedText = textEllipsis({ text: "This is a long text.", length: 10, position: "start" });
 * // Result: "...a long text."
 */
export const textEllipsis: ({
  position,
  text,
  length,
}: {
  position?: "start" | "middle" | "end";
  text: string;
  length: number;
}) => string = ({
  position,
  text,
  length,
}: Parameters<typeof textEllipsis>[0]): string => {
  let first: string = "";
  let middle: string = "";
  let last: string = "";

  if (text) {
    switch (position) {
      case "start":
        first = "...";
        last = text.substring(text.length - length);
        return first + last;
      case "middle":
        first = text.substring(0, length);
        middle = "...";
        last = text.substring(text.length - length);
        return first + middle + last;
      default:
        first = text.substring(0, length);
        last = "...";
        return first + last;
    }
  }

  return "";
};
