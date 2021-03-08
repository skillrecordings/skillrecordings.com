import * as React from 'react'
import Layout from 'layouts'
import {CaseStudyTemplateProps} from 'types'
import Image from 'next/image'

export const Header: React.FC<any> = ({meta, headerImage, className}) => {
  return (
    <header className={className}>
      <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold tracking-tight pb-16">
        {meta.title}
      </h1>
      {headerImage && (
        <Image
          src={headerImage.url}
          alt={headerImage.alt}
          width={1920 / 2}
          height={820 / 2}
        />
      )}
    </header>
  )
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  children,
  meta,
}) => {
  return (
    <Layout meta={meta}>
      <article>{children}</article>
    </Layout>
  )
}

export default CaseStudyTemplate
