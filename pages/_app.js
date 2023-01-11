import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/rc-paginate.css";
import "../styles/global-variable.css";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { Spinner } from "react-bootstrap";
import Script from "next/script";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
