import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo.json'
import {ThemeProvider} from 'next-themes'
import {MDXEmbedProvider} from 'mdx-embed'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <MDXEmbedProvider>
          <Component {...pageProps} />
        </MDXEmbedProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
