import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>sitecraft</title>
     
<meta name="description" content="Hej! Jag heter Anders, en produktdesigner och webbutvecklare plaserad i Stockholm. Jag skapar enklare gränssnitt för hobbyister och skapare." />
<link rel="alternate" hrefLang="sv-SE" href="https://www.sitecraft.se" />
<link rel="icon" href="/favicon.ico" sizes="any" />
<meta property="og:image" content="/" />
<meta name="keywords" content="Webflow, Wordpress, Woocommerce" />
<meta http-equiv="content-language" content="se" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
