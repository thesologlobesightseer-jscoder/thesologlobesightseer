import 'tailwindcss/tailwind.css'
import './../styles/index.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="thesologlobesightseer - an ongoing journey"
        />
        <title>thesologlobesightseer - an ongoing journey</title>
      </Head>

      <Header />

      <main className="py-14">
        <Component {...pageProps} />
      </main>

      <Footer />
    </Auth0Provider>
  )
}
