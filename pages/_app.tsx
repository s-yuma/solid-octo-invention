// pages/_app.js
import React from 'react';
import type { AppProps } from 'next/app';
import "../styles/globals.css";

 function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <>
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}
export default MyApp;