import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo.json'
import {ThemeProvider} from 'next-themes'
import {MDXProvider} from '@mdx-js/react'
import mdxComponents from 'components/mdx'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
