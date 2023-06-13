import { useContext } from "react";
import { ThemeContext } from "./theme-provider";

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
