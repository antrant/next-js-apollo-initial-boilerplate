import React from 'react';
import App from 'next/app';
import {ApolloProvider} from '@apollo/react-hooks';

import withApollo from '../lib/with-apollo';

/**
 * Customization for Next.js App
 */
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  /**
   * Render component
   * @return {*}
   */
  render() {
    const {Component, pageProps, apollo} = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
