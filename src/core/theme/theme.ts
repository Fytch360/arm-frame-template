import { baseTheme } from "./base-theme";
import { fontStyles } from "./font-styles";

export type TTheme = typeof theme;

export const theme = {
  ...baseTheme,
  fontStyles,
};
