import { Html, Head, Main, NextScript } from "next/document";

export default function Document () {
    return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/DELIRIUM-NEON.woff"  as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/K2D-Regular.ttf"  as="font" crossOrigin="anonymous" />
      </Head>
      <body>          
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export default Document;
