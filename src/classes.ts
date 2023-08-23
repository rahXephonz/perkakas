import { twMerge } from "tailwind-merge";

type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

type ClassDictionary = Record<string, any>;
type ClassArray = Array<ClassValue>;

/**
 * This is a TypeScript function that takes an array of class names or class values and returns a string
 * that represents the merged class names. The function filters out any falsy values and joins the
 * remaining values with a space character.
 * @param {...Array<ClassValue>} classes - The classes parameter is a rest parameter that allows you to pass
 * in any number of class names or class values. The values can be of type string, object, or array.
 * @returns {string} - The function returns a string that represents the merged class names.
 */
export const clsx = (...classes: Array<ClassValue>): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * This is a TypeScript function that takes an array of class names and returns a merged class name
 * string using the twMerge and clsx functions.
 * @param {Array<ClassValue>} className - `className` is an array of class names or class values that will
 * be passed to the `clsx` function to generate a single string of class names. The resulting string
 * will then be passed to the `twMerge` function to generate a Tailwind CSS class name and break
 * any duplicate classNames.
 */
export const tw = (...className: Array<ClassValue>) =>
  twMerge(clsx(...className));
