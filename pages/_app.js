import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import Fathom from 'fathom-client';
import Footer from 'components/footer';
import SiteContext from 'components/site_context';
import cookie from 'js-cookie';

import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/markdown.css';
import '../styles/dracula.css';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('RETLQDNO');
      Fathom.trackPageview();
    }
  }, []);

  // This flexbox stuff on body is for the sticky footer:
  // https://css-tricks.com/couple-takes-sticky-footer/#article-header-id-3
  return (
    <SiteContext.Provider
      value={{
        siteId,
        setSiteId: id => {
          cookie.set('site', id);
          setSiteId(id);
        }
      }}
    >
      <div className="font-sans antialiased text-gray-900 flex flex-col h-screen">
        <div className="flex-grow flex-shrink-0"><Component {...pageProps} /></div>
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
