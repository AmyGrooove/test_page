import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'

import '@/theme/styles.scss'
import '@/theme/fonts.scss'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Test</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
