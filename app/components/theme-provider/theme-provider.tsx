import Head from "next/head";
import { createContext, useEffect } from "react";

import GothamBoldItalic from "@/app/assets/fonts/gotham-bold-italic.woff2";
import GothamBold from "@/app/assets/fonts/gotham-bold.woff2";
import GothamBookItalic from "@/app/assets/fonts/gotham-book-italic.woff2";
import GothamBook from "@/app/assets/fonts/gotham-book.woff2";
import GothamMediumItalic from "@/app/assets/fonts/gotham-medium-italic.woff2";
import GothamMedium from "@/app/assets/fonts/gotham-medium.woff2";

import { useHasMounted } from "@/app/hooks/useHasMounted";
import { classes, media } from "@/app/utils/style";

import { theme, tokens } from "./theme";
import { useTheme } from "./useTheme";

export const ThemeContext = createContext({
  ...theme.dark,
});

interface ThemeProviderProps {
  themeId?: string;
  theme?: any;
  children?: any;
  className?: string;
  as?: any;
}

export const ThemeProvider = ({
  themeId = "dark",
  theme: themeOverrides,
  children,
  className,
  as: Component = "div",
  ...rest
}: ThemeProviderProps) => {
  const currentTheme = { ...theme[themeId], ...themeOverrides };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeId;
  const hasMounted = useHasMounted();

  // Save root theme id to localstorage and apply class to body
  useEffect(() => {
    if (isRootProvider && hasMounted) {
      window.localStorage.setItem("theme", JSON.stringify(themeId));
      document.body.dataset.theme = themeId;
    }
  }, [themeId, isRootProvider, hasMounted]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {isRootProvider && (
        <>
          <Head>
            <meta
              name="theme-color"
              content={`rgb(${currentTheme.rgbBackground})`}
            />
          </Head>
          {children}
        </>
      )}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component
          className={classes("theme-provider", className)}
          data-theme={themeId}
          {...rest}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles: string) {
  return styles.replace(/\s\s+/g, " ");
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme: {
  [x: string]: any;
  rgbBlack?: string;
  rgbWhite?: string;
  bezierFastoutSlowin?: string;
  durationXS?: string;
  durationS?: string;
  durationM?: string;
  durationL?: string;
  durationXL?: string;
  systemFontStack?: string;
  fontStack?: string;
  monoFontStack?: string;
  japaneseFontStack?: string;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  fontSizeH0?: string;
  fontSizeH1?: string;
  fontSizeH2?: string;
  fontSizeH3?: string;
  fontSizeH4?: string;
  fontSizeH5?: string;
  fontSizeBodyXL?: string;
  fontSizeBodyL?: string;
  fontSizeBodyM?: string;
  fontSizeBodyS?: string;
  fontSizeBodyXS?: string;
  lineHeightTitle?: string;
  lineHeightBody?: string;
  maxWidthS?: string;
  maxWidthM?: string;
  maxWidthL?: string;
  maxWidthXL?: string;
  spaceOuter?: string;
  spaceXS?: string;
  spaceS?: string;
  spaceM?: string;
  spaceL?: string;
  spaceXL?: string;
  space2XL?: string;
  space3XL?: string;
  space4XL?: string;
  space5XL?: string;
  zIndex0?: number;
  zIndex1?: number;
  zIndex2?: number;
  zIndex3?: number;
  zIndex4?: number;
  zIndex5?: number;
  themeId?: string;
  rgbBackground?: string;
  rgbBackgroundLight?: string;
  rgbPrimary?: string;
  rgbAccent?: string;
  rgbText?: string;
  rgbError?: string;
  colorTextTitle?: string;
  colorTextBody?: string;
  colorTextLight?: string;
}) {
  return squish(
    Object.keys(theme)
      .filter((key) => key !== "themeId")
      .map((key) => `--${key}: ${theme[key]};`)
      .join("\n\n")
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme: { [x: string]: any }) {
  let style: any = {};

  for (const key of Object.keys(theme)) {
    if (key !== "themeId") {
      style[`--${key}`] = theme[key];
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map((key) => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join("\n")
  );
}

export const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(theme.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(theme.light)}
  }
`);

export const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }
`);
