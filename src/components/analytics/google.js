import React from 'react'
import Script from 'next/script'
export const GoogleAnalytics = () => {
    return <><Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9GN8LT5MX"></Script>
        <Script>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T9GN8LT5MX');`}
        </Script></>
}