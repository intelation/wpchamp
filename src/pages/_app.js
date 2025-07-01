import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/main.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>WPChamp – WordPress Privacy Map</title>
        <meta name="description" content="Open-source registry for how WordPress plugins, themes, and hosts handle PII/PHI." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
