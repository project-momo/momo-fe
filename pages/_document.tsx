import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html>
         <Head>
            {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
            <title>모모 Momo</title>
            <link rel="icon" href="/favicon.ico" />
            <link
               href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
