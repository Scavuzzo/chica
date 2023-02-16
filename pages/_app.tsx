import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
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
import { createContext } from 'react';
import { getStrapiMedia } from 'lib/media';
import { fetchAPI } from 'lib/api';

export const GlobalContext = createContext<any>({});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps): JSX.Element => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { global } = pageProps;

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon)} />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          {/* <link rel="stylesheet" href="styles/global.css" /> */}
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
        <GlobalContext.Provider value={global.attributes}>
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
        </GlobalContext.Provider>  
      </CacheProvider>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949



MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default appWithTranslation(MyApp)
