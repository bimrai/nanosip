// src/app/layout.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function RootLayout({ children }) {
  return (
    <Html>
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Your description here" />
      </Head>
      <body>
        <Main /> {/* Main content of the page */}
        <NextScript /> {/* Next.js scripts */}
      </body>
    </Html>
  );
}
