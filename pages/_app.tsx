// pages/_app.js
import React from 'react';
import type { AppProps } from 'next/app';
import "../styles/globals.css";
import Head from "next/head"

 function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <>
        <Head>
        <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossOrigin="anonymous"></script>
          <meta name="viewport" content="width=device-width, user-scale=yes,
          initial-scale=1.0, maximum-scale=5.0" />
        <title>テストページ</title>
        </Head>
      <Component {...pageProps} key={router.asPath} />
    </>
  );
}
export default MyApp;