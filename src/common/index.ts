/**
 * Copies the provided text to the clipboard using the Clipboard API.
 *
 * @param options - An object containing the text to copy and an optional callback function to execute after copying.
 * @param options.text - The text to copy to the clipboard.
 * @param options.action - An optional callback function to execute after the text is successfully copied to the clipboard.
 * @throws An error is thrown if copying to the clipboard fails.
 *
 * @example
 * // Import the copyToClipboard function
 * import { copyToClipboard } from './path/to/copyToClipboard';
 *
 * // Copy a text to the clipboard and perform an action after copying
 * copyToClipboard({
 *   text: 'Hello, Clipboard!',
 *   action: () => {
 *     alert('Text copied to clipboard!');
 *   },
 * });
 *
 * // Copy a text to the clipboard without an action
 * copyToClipboard({
 *   text: 'Copy me!',
 * });
 */
export const copyToClipBoard: ({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) => void = async ({ text, action }) => {
  try {
    await navigator.clipboard.writeText(text);
    action();
  } catch ($e) {
    console.log($e);
  }
};
