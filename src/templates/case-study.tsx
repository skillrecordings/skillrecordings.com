import * as React from 'react'
import Layout from 'layouts'
import {CaseStudyTemplateProps} from 'types'
import Image from 'next/image'

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

type SectionProps = {
  className?: string
  classNameDefault?: string
  title?: string
  containerClassName?: string
  containerClassNameDefault?: string
  image?: string
  aside?: React.ReactElement
}

const Section: React.FC<SectionProps> = ({
  title,
  className = 'text-black',
  classNameDefault = 'prose prose-dark sm:prose-xl max-w-screen-md mx-auto',
  containerClassName = 'bg-white',
  containerClassNameDefault = 'sm:py-32 py-16 min-h-screen flex items-center justify-center px-5',
  children,
  image,
  aside,
}) => {
  return (
    <section className={`${containerClassName} ${containerClassNameDefault}`}>
      {image && (
        <Image src={image} width={1920} height={1080} alt={title || ''} />
      )}
      {title && <h2>{title}</h2>}
      <div className="flex md:flex-row flex-col-reverse">
        <div className={`${className} ${classNameDefault}`}>{children}</div>
        {aside && (
          <aside className="md:pl-16 md:max-w-sm md:pb-0 pb-16 flex-shrink-0">
            {aside}
          </aside>
        )}
      </div>
    </section>
  )
}

const Header: React.FC<any> = ({meta, headerImage, className}) => {
  return (
    <header className={className}>
      <span className="font-medium uppercase tracking-wider bg-indigo-900 text-indigo-50 bg-opacity-80 px-3 py-1 rounded-full sm:text-sm text-xs">
        Case Study
      </span>
      <h1 className="lg:text-6xl sm:text-5xl text-4xl font-extrabold tracking-tight py-8">
        {meta.title}
      </h1>
      {headerImage && (
        <div className="transform sm:translate-y-24 translate-y-8">
          <Image
            src={headerImage.url}
            alt={headerImage.alt}
            width={1920 / 2}
            height={820 / 2}
          />
        </div>
      )}
    </header>
  )
}

const Client: React.FC<any> = ({image, children, name}) => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex items-center">
        <div className="sm:w-auto w-16">
          <Image
            className="rounded-full bg-purple-400 bg-opacity-50"
            src={image.url}
            alt={image.alt}
            width={100}
            height={100}
          />
        </div>
        <div className="pl-4">
          <div className="text-purple-200">Client</div>
          <div className="font-medium text-lg leading-tight">{name}</div>
        </div>
      </div>
      {children}
    </div>
  )
}

export {Section, Header, Client}
