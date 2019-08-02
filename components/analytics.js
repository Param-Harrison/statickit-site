import { Fragment } from 'react';

function Script() {
  const scriptContents = `
  (function(f, a, t, h, o, m){
  a[h]=a[h]||function(){
      (a[h].q=a[h].q||[]).push(arguments)
  };
  o=f.createElement('script'),
  m=f.getElementsByTagName('script')[0];
  o.async=1; o.src=t; o.id='fathom-script';
  m.parentNode.insertBefore(o,m)
  })(document, window, '//cdn.usefathom.com/tracker.js', 'fathom');
  fathom('set', 'siteId', 'RETLQDNO');
  fathom('trackPageview');
  `;

  return (
    <Fragment>
      <script dangerouslySetInnerHTML={{ __html: scriptContents }}></script>
    </Fragment>
  );
};

function trackPageView() {
  try {
    fathom('trackPageview');
  } catch (e) {
    // swallow the error
  }
}

export { Script, trackPageView };
