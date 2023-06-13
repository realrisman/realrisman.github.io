import type { Preview } from "@storybook/react";
import "@/app/tailwind.css";

import React, { useEffect } from "react";
import {
  ThemeProvider,
  fontStyles,
  tokenStyles,
} from "../app/components/theme-provider";

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      document.body.dataset.theme = theme;
    }, [theme]);

    return (
      <ThemeProvider themeId={theme}>
        <style>{fontStyles}</style>
        <style>{tokenStyles}</style>
        <div id="story-root" className="storyRoot">
          <Story />
          <div id="portal-root" />
        </div>
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
    },
  },
};

export const parameters = {
  layout: "fullscreen",
  controls: { hideNoControlsWarning: true },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
