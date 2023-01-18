import React from 'react'
import Script from 'next/script'
export const GoogleAnalytics = () => {
    return <><Script async src="https://www.googletagmanager.com/gtag/js?id=AW-718756413"></Script>
        <Script>
            {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-718756413');
`}
        </Script>
        <Script>
            {`gtag('event', 'conversion', {'send_to': 'AW-718756413/yUMTCOKux4gYEL203dYC'});`}
        </Script>
    </>
}