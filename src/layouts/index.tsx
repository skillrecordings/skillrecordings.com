import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import {DefaultLayoutProps} from '@types'
import Navigation from 'components/navigation'

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
  meta,
}) => {
  const {title, description, titleAppendSiteName = false, url, ogImage} =
    meta || {}

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <Navigation />
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default DefaultLayout
