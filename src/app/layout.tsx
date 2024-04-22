import type { FC, ReactNode } from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
};

export default Layout;
