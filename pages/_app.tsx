import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/theme/default';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}
