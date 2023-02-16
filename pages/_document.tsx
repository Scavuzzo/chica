/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { ramaGothic } from 'theme';
import createEmotionCache from 'theme/createEmotionCache';
import { getInitColorSchemeScript } from '@mui/material/styles';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="es" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <meta name="emotion-insertion-point" content="" />
          <link rel="canonical" href="https://chicakitchen.com/" />
          <meta name="robots" content="index, follow" />
          <meta property='og:type' content='website'/>
          <meta property='og:title'content='Chica' />
          <meta property="og:description" content="Café, Cocina y Cócteles de autor." />
          <meta property="og:image" content="https://chicakitchen.com/home-about2.jpg" />
          <meta name="description" content="Café, cocina vegana/vegetariana y cocktelería de autor en la ciudad de Rosario"/>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chica",
              "url": "https://chicakitchen.com",
              "logo": "https://chicakitchen.com/circle-logo.webp",
              "sameAs": [
                "https://www.linkedin.com/company/chica-kitchen/?originalSubdomain=ar"
                "https://www.instagram.com/chicakittchen/"
              ]
            }
          `}
          </script>
          {(this.props as any).emotionStyleTags}
        </Head>
        <body className={ramaGothic.className}>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
