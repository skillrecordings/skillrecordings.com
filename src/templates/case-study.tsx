import * as React from 'react'
import Layout from 'layouts'
import {CaseStudyTemplateProps, ClientType} from 'types'
import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from 'components/icons/external-link'

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
          <aside className="space-y-12 md:pl-16 md:max-w-sm md:pb-0 pb-16 flex-shrink-0 flex flex-col sm:items-start items-center">
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
      <span className="font-medium uppercase tracking-wider bg-gradient-to-r from-indigo-900 to-indigo-800 opacity-75 text-indigo-50 bg-opacity-80 px-3 py-1 rounded-full sm:text-sm text-xs">
        Case Study
      </span>
      <h1 className="lg:text-7xl sm:text-6xl text-4xl font-extrabold leading-tight tracking-tight py-8">
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

const Client: React.FC<ClientType> = ({image, name, children}) => {
  return (
    <div className="flex flex-col text-white md:items-start items-center md:text-left text-center">
      <div className="flex items-center text-left">
        <div className="sm:w-auto w-16">
          <Image
            className="rounded-full bg-purple-400 bg-opacity-50"
            src={image.url}
            alt={name}
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

const CaseLink: React.FC<any> = ({
  url,
  label,
  className = 'md:mt-0 mt-16 inline-flex sm:text-base text-sm items-center text-white px-5 py-3 font-medium bg-gradient-to-tr from-purple-500 to-blue-500 rounded-md group',
}) => {
  return (
    <Link href={url}>
      <a className={className}>
        <ExternalLink className="w-5 text-purple-200 group-hover:text-white transition-all ease-in-out duration-200" />
        <span className="pl-2">Visit {label}</span>
      </a>
    </Link>
  )
}

const ContributorProfileCard: React.FC<any> = ({
  image,
  name,
  label,
  children,
}) => {
  return (
    <div className="relative sm:py-16 py-8">
      <div className=" transform -rotate-3 bg-gradient-to-bl from-purple-600 to-indigo-600 p-8 rounded-lg">
        <div className="-mt-6 font-medium">{children}</div>
        <div className="flex items-center">
          <div className="sm:w-auto w-14 flex items-center">
            <Image
              src={image.url}
              alt={name}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="pl-4 flex flex-col">
            <div className="font-bold leading-tight">{name}</div>
            <div className="text-sm">{label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Section, Header, Client, CaseLink, ContributorProfileCard}
