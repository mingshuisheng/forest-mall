import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body style={{fontSize: "0.16rem"}}>
      <Main/>
      <NextScript/>
      </body>
      <script src="/cdnScript/rootFontSize.js"/>
    </Html>
  )
}
