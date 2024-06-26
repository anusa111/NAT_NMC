import "@/styles/globals.css";
import "@/styles/about.css";
import Script from "next/script";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5Y7PKZSXJY"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5Y7PKZSXJY');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
