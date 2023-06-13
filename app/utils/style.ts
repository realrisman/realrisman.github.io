/**
 * Media query breakpoints
 */
export const media: any = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

/**
 * Convert a number to an ms string
 */
export const numToMs = (num: number) => `${num}ms`;

/**
 * Convert a number to a px string
 */
export const numToPx = (num: number) => `${num}px`;

/**
 * Convert pixel values to rem for a11y
 */
export const pxToRem = (px: number) => `${px / 16}rem`;

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
export function cssProps(props: { [x: string]: any }, style = {}) {
  let result: any = {};

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key];

    if (typeof value === "number" && key === "delay") {
      value = numToMs(value);
    }

    if (typeof value === "number" && key !== "opacity") {
      value = numToPx(value);
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}

/**
 * Concatenate classNames together
 */
export function classes(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
