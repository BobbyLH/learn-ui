import * as React from 'react';
import '../src/styles/reset.scss';

function MyApp({ Component, pageProps }: any) {
  return <Component { ...pageProps } />;
}

export default MyApp;
