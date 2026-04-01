"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import Toastify from "../shadcnui/Toastify";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toastify />
    </NextThemesProvider>
  );
};

export default ThemeProvider;
