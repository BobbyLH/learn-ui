import * as React from 'react';
import Head from 'next/head';
import '../src/styles/reset.scss';

function MyApp({ Component, pageProps }: any) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Component { ...pageProps } />
  </>;
}

export default MyApp;
