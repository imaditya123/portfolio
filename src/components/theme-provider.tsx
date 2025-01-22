"use client";

import { ThemeProvider as NextThemesProvider,ThemeProviderProps } from "next-themes";
// import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
