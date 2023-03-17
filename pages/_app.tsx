import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'theme/createEmotionCache';
import { appWithTranslation } from 'next-i18next'
import { AppThemeProvider } from 'contexts/theme-setting.context';
import { ViewProvider } from 'contexts/view.context';
import { Layout } from 'components/Layout.component';
import { StyledEngineProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import 'styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps): JSX.Element => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=5.0, minimum-scale=0.7" />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        </Head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-LPGVJYHSM2" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LPGVJYHSM2', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <AppThemeProvider>
          <ViewProvider>
            <Layout>
              <StyledEngineProvider injectFirst>
                {/* Your component tree. Now you can override MUI's styles. */}
                <AnimatePresence>
                  <Component {...pageProps} />
                </AnimatePresence>
              </StyledEngineProvider>
            </Layout>
          </ViewProvider>
        </AppThemeProvider>
      </CacheProvider>
  );
}

export default appWithTranslation(MyApp)
