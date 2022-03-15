import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextComponentType } from 'next'
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default CustomApp;
