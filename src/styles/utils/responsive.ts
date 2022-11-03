import { useEffect, useState } from 'react';

const breakpoints = {
  mobile: 480,
  tabletPortrait: 767,
  tabletLandscape: 960,
  laptop: 1200,
  desktop: 1800,
} as const;

type BreakpointName = keyof typeof breakpoints;

const minWidthQuery = (width: typeof breakpoints[BreakpointName]) =>
  `(min-width: ${width}px)`;

export const from = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `@media ${minWidthQuery(value)}`,
  ]),
) as {
  [key in BreakpointName]: `@media (min-width: ${typeof breakpoints[key]}px)`;
};

const getMediaList = (breakpoint: BreakpointName) =>
  window.matchMedia(minWidthQuery(breakpoints[breakpoint]));

export const useMediaFrom = (breakpoint: BreakpointName) => {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' ? getMediaList(breakpoint).matches : false,
  );

  useEffect(() => {
    const mediaList = getMediaList(breakpoint);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaList.addEventListener('change', listener);
    return () => {
      mediaList.removeEventListener('change', listener);
    };
  }, [breakpoint]);

  return matches;
};
