import React from 'react'
import './globals.css'
import { i18n } from '../../../i18n-config'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
  }
}

export const metadata = {
  other: {
    'google-site-verification': '3Aim5tZRr39Pzh_cf54NCK_Rgx80kLtJp_ggnUkeL3Q'
  }
}

const RootLayout = async ({ children, params }) => {
  return (
    <html lang={params.lang}>
      {/* <head>
        <meta
          name='google-site-verification'
          content='3Aim5tZRr39Pzh_cf54NCK_Rgx80kLtJp_ggnUkeL3Q'
        />
      </head> */}
      <body suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-KCQVVQPW'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
      {/* <GoogleTagManager gtmId="GTM-KCQVVQPW" /> */}
      <Script
        id='gtm-script'
        strategy='worker'
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KCQVVQPW');
          `}
      </Script>
      <Script
        id='google-script'
        strategy='worker'
        src={`https://www.googletagmanager.com/gtag/js?id=G-F9VNYCVPJ9`}
      ></Script>
      <Script
        id='ga-script'
        strategy='worker'
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F9VNYCVPJ9');
          `}
      </Script>
    </html>
  )
}

export default RootLayout
