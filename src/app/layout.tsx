import { Inter } from "next/font/google";
import type { FC, ReactNode } from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap"
});

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
};

export default Layout;
