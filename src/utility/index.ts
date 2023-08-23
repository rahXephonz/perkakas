import { useEffect, useLayoutEffect } from "react";

export const isSSR =
  typeof window === "undefined" ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

export const isBrowser = !isSSR;

export const useIsomorphicEffect = isBrowser ? useLayoutEffect : useEffect;
