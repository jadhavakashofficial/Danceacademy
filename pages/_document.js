import { Html, Head, Main, NextScript } from "next/document";

// Replace G-XXXXXXXXXX below with your real Google Analytics 4 Measurement ID
// Get it from: https://analytics.google.com → Admin → Data Streams → your stream
const GA_ID = "G-XXXXXXXXXX";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA / App meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C73664" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sanchay Kathak" />
        <link rel="apple-touch-icon" href="/images/Sanchay-1.png" />

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
