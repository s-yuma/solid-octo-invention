// pages/_app.js
import React from 'react';
import type { AppProps } from 'next/app';
import "../styles/globals.css";
import Head from "next/head"

 function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, user-scale=yes,
          initial-scale=1.0, maximum-scale=5.0" />
        <title>テストページ</title>
        </Head>
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}
export default MyApp;