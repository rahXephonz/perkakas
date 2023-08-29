import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

/**
 * This is a TypeScript function that takes an array of class names and returns a merged class name
 * string using the twMerge and clsx functions.
 * @param {Array<ClassValue>} className - `className` is an array of class names or class values that will
 * be passed to the `clsx` function to generate a single string of class names. The resulting string
 * will then be passed to the `twMerge` function to generate a Tailwind CSS class name and break
 * any duplicate classNames.
 *
 */
export const tw = (...className: Array<ClassValue>) =>
  twMerge(clsx(...className));
