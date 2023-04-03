import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="text-base override">
      <Main/>
      <NextScript/>
      </body>
      <script src="/cdnScript/rootFontSize.js"/>
    </Html>
  )
}
