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
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AppThemeProvider>
          <ViewProvider>
            <Layout>
              <StyledEngineProvider injectFirst>
                {/* Your component tree. Now you can override MUI's styles. */}
                <AnimatePresence mode="wait" initial={false}>
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
