import * as React from 'react'

export type MetaTags = {
  title: string
  url: string
  description: string
  titleAppendSiteName?: boolean
  ogImage?: {
    url: string
    alt: string
  }
}

export type DefaultLayoutProps = {
  meta: MetaTags
}

export type CaseStudyTemplateProps = {
  meta: MetaTags
  headerImage?: {
    url: string
    alt: string
  }
}

export type ClientType = {
  name: string
  image: {
    url: string
  }
}