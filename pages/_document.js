import { Html, Head, Main, NextScript } from "next/document";

// Replace G-XXXXXXXXXX below with your real Google Analytics 4 Measurement ID
// Get it from: https://analytics.google.com → Admin → Data Streams → your stream
const GA_ID = "G-XXXXXXXXXX";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon — modern SVG + legacy ICO fallback */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Sanchay-1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Sanchay-1.png" />
        <link rel="shortcut icon" href="/favicon.svg" />

        {/* PWA / App meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C73664" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sanchay Kathak" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Sanchay-1.png" />

        {/* Local SEO — Pune/Pimpri-Chinchwad */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pimpri-Chinchwad, Pune, Maharashtra" />
        <meta name="geo.position" content="18.6298;73.7997" />
        <meta name="ICBM" content="18.6298, 73.7997" />

        {/* Author / Publisher */}
        <meta name="author" content="Sanchay Kathak Nrutya Academy" />
        <meta name="publisher" content="Sanchay Kathak Nrutya Academy" />
        <meta name="copyright" content="Sanchay Kathak Nrutya Academy" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
