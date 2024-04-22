"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { FC, ReactNode } from "react";

export interface ThemeProviderProps {
	children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};
