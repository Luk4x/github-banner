import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'src/styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/styles/theme/default';
import { GitHubBannerContextProvider } from 'src/context/contextGitBanner';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="author"
                    content="Lucas Maciel (luk4xm4ci3l@gmail.com), Luiz Felipe (luizfepereira2@gmail.com)"
                />
                <meta
                    name="keywords"
                    content="html, css, javascript, typescript, nextjs, reactjs, npm, phosphor icons, axios, vercel analytics, luk4x, radix ui, luizfelipe63"
                />
                <meta
                    property="og:description"
                    content="Crie um Banner personalizado para o seu Github!"
                />
                <meta property="og:image" content="print" />
                <meta property="og:title" content="Github Banner" />
                <title>Github Banner</title>
            </Head>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <GitHubBannerContextProvider>
                    <Component {...pageProps} />
                </GitHubBannerContextProvider>
            </ThemeProvider>
        </>
    );
}
