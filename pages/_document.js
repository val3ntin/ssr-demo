import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../src/components/footer'
import Header from '../src/components/header'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <title> > next js app</title>
        <Head />
        <body>
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;