import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="appicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
