<div align="center">
<h1 id="toc">🛠 perkakas</h1>
<p>A tools or utility for your works</p>
</div>

<div align="center">

<!-- prettier-ignore-start -->

[![npm downloads](https://img.shields.io/npm/dw/perkakas)](https://www.npmjs.com/package/perkakas/v/latest)
[![License](https://img.shields.io/github/license/rahxephonz/perkakas)](https://github.com/rahxephonz/perkakas/blob/main/LICENSE)

<!-- prettier-ignore-end -->

</div>

## Usage

Run one of the following command inside your project directory to install the package:

    $ npm i perkakas@latest
    or
    $ yarn add perkakas@latest
    or
    $ pnpm add perkakas@latest

# Responsive Breakpoint Utility Functions

### Resolve from Tailwind CSS configuration

```ts
// /hooks/tailwind.ts

import { createLayout } from "perkakas";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "path/to/tailwind.config.js";

const config = resolveConfig(tailwindConfig);

export const { useBreakpoint } = createLayout(config.theme.screens);
```

### Extract `screens` values

Another option is to extract all [`screens`](https://tailwindcss.com/docs/breakpoints) values into a separate file:

```js
// tailwind.screens.js or other name to separate breakpoint values
const screens = {
  sm: "640px",
  md: "768px",
  // ...
};
```

To keep the same values, `require` inside `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: require("path/to/tailwind.screens.js"),
  },
  // ...
};
```

Then pass the extracted `screens` to the `create` function:

```ts
// /hooks/tailwind.ts

import create from "@kodingdotninja/use-tailwind-breakpoint";

import screens from "path/to/tailwind.screens.js";

export const { useBreakpoint } = create(screens);
```

### Without Tailwind CSS

While this package was built in mind for Tailwind CSS usage, it can be used without it since there is no dependency at all. You can pass any breakpoint values:

```ts
// /hooks/breakpoint.ts

import { createLayout } from "perkakas";

export const { useBreakpoint, useBreakpointEffect, useBreakpointValue } =
  createLayout({
    sm: "640px",
    md: "768px",
    // ...
  });
```

## Available hooks

### `useBreakpoint()`

Use breakpoint value from given breakpoint token

```jsx
import { useBreakpoint } from "./hooks/breakpoint";

function App() {
  const isDesktop = useBreakpoint("md");

  return <div>Current view: {isDesktop ? "Desktop" : "Mobile"}</div>;
}
```

### `useBreakpointEffect()`

Use given breakpoint value to run an effect

```jsx
import { useBreakpointEffect } from "./hooks/breakpoint";

function App() {
  useBreakpointEffect("md", match => {
    if (match) {
      console.log("Desktop view");
    }
  });
}
```

### `useBreakpointValue()`

Resolve value from given breakpoint value

```jsx
import { useBreakpointValue } from "./hooks/breakpoint";

function App() {
  const value = useBreakpointValue("md", "Desktop", "Mobile");

  return <div>Current view: {value}</div>;
}
```

# Currency and Number Formatting Utility Functions

This repository contains a set of utility functions for formatting numbers and currencies in JavaScript. These functions are designed to help you format numeric values into a more human-readable format for various use cases.

## Table of Contents

- [Functions](#functions)
  - [formatRupiah](#formatrupiah)
  - [formatUSD](#formatusd)
  - [formatK](#formatk)
  - [countableNumber](#countablenumber)
- [Examples](#examples)

## <a name="functions"></a>Functions

### <a name="formatrupiah"></a>`formatRupiah(num, prefix, symbol)`

Formats a numeric value as an Indonesian Rupiah (IDR) currency string.

- `num` (string): The numeric value to format as IDR.

- `prefix` (optional, string): The currency prefix, which defaults to "Rp.".

- `symbol` (optional, string): The symbol used for thousands separator, which defaults to ",".

Returns: The formatted IDR currency string.

### <a name="formatusd"></a>`formatUSD(number)`

Formats a number into United States Dollar (USD) currency format.

- `number` (number): The number to be formatted as USD currency.

Returns: The formatted number in USD currency format.

### <a name="formatk"></a> `formatK({ value })`

Formats a number into a simplified K format.

- `value` (number): The number to be formatted.

Returns: The formatted number in a simplified K format.

### <a name="countablenumber"></a>`countableNumber(number)`

Converts a number to a text representation in Indonesian.

- `number` (number): The number to convert.

Returns: Text representation in Indonesian of the given number.

## <a name="examples"></a> Examples

Here are some examples of how to use these functions:

```javascript
import { formatRupiah, formatUSD, formatK, countableNumber } from "perkakas";

const rupiahValue = formatRupiah("1000000");
console.log(rupiahValue); // Output: "Rp. 1,000,000"

const usdValue = formatUSD(1000000);
console.log(usdValue); // Output: "$1,000,000.00" (or the equivalent in your locale)

const kValue = formatK({ value: 1500 });
console.log(kValue); // Output: "1.5K"

const indonesianText = countableNumber(1234567);
console.log(indonesianText);
// Output: "Satu Juta Dua Ratus Tiga Puluh Empat Ribu Lima Ratus Enam Puluh Tujuh"
```

# Date Formatting Utility Functions

This repository contains a set of utility functions for formatting date strings into various date formats. These functions help you easily format date strings in different styles, such as USA date format, EST date format, short year format, and more.

## Table of Contents

- [Functions](#functions)
  - [getUSADateFormat](#getusadateformat)
  - [getUSADateWithLongMonthFormat](#getusadatewithlongmonthformat)
  - [getEstDateFormat](#getestdateformat)
  - [getDateWithSortYearFormat](#getdatewithsortyearformat)
  - [getUSASortDateFormat](#getusasortdateformat)
  - [getEnGbDateFormat](#getengbdateformat)
- [Examples](#examples)
- [License](#license)

## <a name="functions"></a>Functions

### <a name="getusadateformat"></a>`getUSADateFormat(dateString)`

Formats a date string in the USA date format (short month, day, and year).

- `dateString` (string): The input date string.

Returns: The formatted USA date (e.g., "Aug 25, 23") or "-" if the input is not a valid date.

### <a name="getusadatewithlongmonthformat"></a>`getUSADateWithLongMonthFormat(date)`

Formats a date string in the USA date format with a long month (long month, day, and year).

- `date` (string): The input date string.

Returns: The formatted USA date with a long month (e.g., "August 25, 2023") or "-" if the input is not a valid date.

### <a name="getestdateformat"></a>`getEstDateFormat(dateString)`

Formats a date string in the EST date format (short month, day, year, hour, minute).

- `dateString` (string): The input date string.

Returns: The formatted EST date (e.g., "Aug 25, 2023 12:34 EST") or "-" if the input is not a valid date.

### <a name="getdatewithsortyearformat"></a>`getDateWithSortYearFormat(dateString)`

Formats a date string with a short year in the format (short month, day, 2-digit year).

- `dateString` (string): The input date string.

Returns: The formatted date with a short year (e.g., "Aug 25, 23") or "-" if the input is not a valid date.

### <a name="getusasortdateformat"></a>`getUSASortDateFormat(dateString)`

Formats a date string in the USA sort date format (2-digit month, 2-digit day, 2-digit year).

- `dateString` (string): The input date string.

Returns: The formatted USA sort date (e.g., "08/25/23") or "-" if the input is not a valid date.

### <a name="getengbdateformat"></a>`getEnGbDateFormat(dateString)`

Formats a date string in the UK date format (long month, day, and year).

- `dateString` (string): The input date string.

Returns: The formatted UK date (e.g., "25 August 2023") or "-" if the input is not a valid date.

## <a name="examples"></a>Examples

Here are some examples of how to use these functions:

```javascript
import {
  getUSADateFormat,
  getUSADateWithLongMonthFormat,
  getEstDateFormat,
  getDateWithSortYearFormat,
  getUSASortDateFormat,
  getEnGbDateFormat,
} from "perkakas";

const usaShortDate = getUSADateFormat("2023-08-25");
console.log(usaShortDate); // Output: "Aug 25, 23" or "-"

const usaLongDate = getUSADateWithLongMonthFormat("2023-08-25");
console.log(usaLongDate); // Output: "August 25, 2023" or "-"

const estDate = getEstDateFormat("2023-08-25T12:34:56");
console.log(estDate); // Output: "Aug 25, 2023 12:34 EST" or "-"

const shortYearDate = getDateWithSortYearFormat("2023-08-25");
console.log(shortYearDate); // Output: "Aug 25, 23" or "-"

const usaSortDate = getUSASortDateFormat("2023-08-25");
console.log(usaSortDate); // Output: "08/25/23" or "-"

const ukDate = getEnGbDateFormat("2023-08-25");
console.log(ukDate); // Output: "25 August 2023" or "-"
```

# String Manipulation Utility Functions

This repository contains a set of utility functions for manipulating strings. These functions help you replace special characters in a string, check if a string contains only special characters, and convert a string to title case while preserving special characters.

## Table of Contents

- [Functions](#functions)
  - [replaceSpecialChar](#replacespecialchar)
  - [isSpecialChar](#isspecialchar)
  - [titleCase](#titlecase)
- [Examples](#examples)
- [License](#license)

## <a name="functions"></a>Functions

### <a name="replacespecialchar"></a>`replaceSpecialChar(str, char)`

Replaces special characters in a string with the specified character.

- `str` (string): The input string.

- `char` (string): The character to replace special characters with.

Returns: The modified string with special characters replaced.

### <a name="isspecialchar"></a>`isSpecialChar(str)`

Checks if a given string contains only special characters.

- `str` (string): The input string to check.

Returns: `true` if the string consists only of special characters, otherwise `false`.

### <a name="titlecase"></a>`titleCase(str)`

Converts a string to title case while preserving special characters.

- `str` (string): The input string to convert to title case.

Returns: The string converted to title case.

## <a name="examples"></a>Examples

Here are some examples of how to use these functions:

```javascript
import { replaceSpecialChar, isSpecialChar, titleCase } from "perkakas";

const input = "this_is_a_test_string";
const char = "-";
const replacedString = replaceSpecialChar(input, char);
console.log(replacedString); // Output: "this-is-a-test-string"

const specialChars = ["!", "@", "#", " "];
specialChars.forEach(char => {
  const isSpecial = isSpecialChar(char);
  console.log(`Is '${char}' special? ${isSpecial}`);
});
// Output: Is '!' special? true
//         Is '@' special? true
//         Is '#' special? true
//         Is ' ' special? true

const titleCased = titleCase(input);
console.log(titleCased); // Output: "This Is A Test String"
```

# Style Utility Function

This repository contains a utility function for truncating text to a specified length and adding ellipsis (...) at the specified position.

## Table of Contents

- [Function](#function)
  - [textEllipsis](#textellipsis)
- [Examples](#examples)
- [License](#license)

## <a name="function"></a>Function

### <a name="textellipsis"></a>`textEllipsis(options)`

Truncates a given text to a specified length and adds ellipsis (...) at the specified position.

- `options` (object): Options for text truncation.
  - `text` (string): The input text to be truncated.
  - `length` (number): The maximum length of the truncated text.
  - `position` (string, optional): The position to add ellipsis. Can be "start" (default), "middle," or "end."

Returns: The truncated text with ellipsis.

## <a name="examples"></a>Examples

Here are some examples of how to use the `textEllipsis` function:

```javascript
import { textEllipsis } from "perkakas";

// Truncate text at the end (default)
const truncatedTextEnd = textEllipsis({
  text: "This is a long text.",
  length: 10,
});
console.log(truncatedTextEnd); // Output: "This is a..."

// Truncate text in the middle
const truncatedTextMiddle = textEllipsis({
  text: "This is a long text.",
  length: 10,
  position: "middle",
});
console.log(truncatedTextMiddle); // Output: "This is...text."

// Truncate text at the start
const truncatedTextStart = textEllipsis({
  text: "This is a long text.",
  length: 10,
  position: "start",
});
console.log(truncatedTextStart); // Output: "...a long text."
```

# Tailwind CSS Class Merging Utility Function

This repository contains a TypeScript function that takes an array of class names and returns a merged class name string using the `twMerge` and `clsx` functions **You dont need to install at your projects repository and it will reduce bundle sizing of your because it automatically installed when you install this package**. This utility function is particularly useful for generating Tailwind CSS class names and ensuring that duplicate class names are properly handled.

## Table of Contents

- [Getting Started](#getting-started)
- [Function](#function)
  - [`tw`](#tw)
- [Examples](#examples)
- [License](#license)

## <a name="getting-started"></a>Getting Started

To use this utility function, follow these steps:

1. Clone or download this repository to your local machine.

2. Include the `tw` function in your TypeScript project.

3. Call the function with an array of class names or class values to generate a merged class name string.

## <a name="function"></a>Function

### <a name="tw"></a>`tw(...className)`

This TypeScript function takes an array of class names or class values and returns a merged class name string using the `twMerge` and `clsx` functions.

- `...className` (Array of ClassValue): An array of class names or class values that will be passed to the `clsx` function to generate a single string of class names. The resulting string will then be passed to the `twMerge` function to generate a Tailwind CSS class name and break any duplicate class names.

Returns: The merged class name string generated using Tailwind CSS conventions.

## <a name="examples"></a>Examples

Here's an example of how to use the `tw` function:

```javascript
import { tw } from "perkakas";

// Create a merged class name using tw
const mergedClassName = tw(
  "text-blue-500",
  "bg-gray-200",
  "text-sm",
  "bg-blue-500",
  "hover:bg-blue-700",
);

console.log(mergedClassName);
// Output: "text-blue-500 bg-gray-200 text-sm bg-blue-500 hover:bg-blue-700"
```

## License

[MIT](./LICENSE)
