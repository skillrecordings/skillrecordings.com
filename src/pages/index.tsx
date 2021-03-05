import {jsx} from '@emotion/core'
import Head from 'next/head'
import SkillRecordingsLogo from '../components/icons/sr-logo'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Skill Recordings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkillRecordingsLogo fill={true} className="text-pink-500 p-1 w-full" />
    </div>
  )
}
