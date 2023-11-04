/**
 * Replaces special characters in a string with the specified character.
 *
 * @param str - The input string.
 * @param char - The character to replace special characters with.
 * @returns The modified string with special characters replaced.
 * @example
 * ```typescript
 * const input = "this_is_a_test_string";
 * const char = "-";
 * const result = replaceSpecialChar(input, char);
 * // Result: "this-is-a-test-string"
 * ```
 */
export const replaceSpecialChar = (str: string, char: string): string => {
  return str.replace(/[^a-zA-Z ]/g, char);
};

/**
 * Checks if a given string contains only special characters.
 *
 * @param str - The input string to check.
 * @returns `true` if the string consists only of special characters, otherwise `false`.
 * @example
 * ```typescript
 * const specialChars = ["!", "@", "#", " "];
 * specialChars.forEach((char) => {
 *   const isSpecial = isSpecialChar(char);
 *   console.log(`Is '${char}' special? ${isSpecial}`);
 * });
 * // Output: Is '!' special? true
 * //         Is '@' special? true
 * //         Is '#' special? true
 * //         Is ' ' special? true
 * ```
 */
export const isSpecialChar = (str: string): boolean => {
  return !!RegExp(/^[^a-zA-Z0-9]+$/).exec(str);
};

/**
 * Converts a string to title case while preserving special characters.
 *
 * @param str - The input string to convert to title case.
 * @returns The string converted to title case.
 * @example
 * ```typescript
 * const input = "this_is_a_test_string";
 * const result = titleCase(input);
 * // Result: "This Is A Test String"
 * ```
 */
export const titleCase = (str: string): string => {
  let newStr: string = "";
  const strReplace: string = replaceSpecialChar(str, "_");

  for (let i = 0; i < strReplace.length; i++) {
    const getChar: string = strReplace.charAt(i);
    const toUpper: string = getChar.toUpperCase();

    if (i === 0 || isSpecialChar(strReplace.charAt(i - 1))) {
      newStr += toUpper;
    } else if (
      getChar === toUpper &&
      !isSpecialChar(strReplace.charAt(i - 1)) &&
      !isSpecialChar(getChar)
    ) {
      newStr += "_" + toUpper;
    } else {
      newStr += getChar;
    }
  }

  return replaceSpecialChar(newStr, " ");
};

/**
 * Converts a snake_case string to camelCase.
 *
 * @param {string} str - The snake_case string to be converted.
 * @returns {string} The converted camelCase string.
 */
export const snakeToCamel = (str: string): string => {
  const parts = str.split("_");
  return (
    parts[0] +
    parts
      .slice(1)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
};

/**
 * Converts a camelCase string to snake_case.
 *
 * @param {string} str - The snake_case string to be converted.
 * @returns {string} The converted camelCase string.
 */
export const camelToSnake = (str: string): string => {
  return str.replace(/[\w]([A-Z])/g, function (match) {
    return match[0] + "_" + match[1].toLowerCase();
  });
};
