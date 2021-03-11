import * as React from 'react'
import {Tweet} from 'mdx-embed'
import Image from 'next/image'

const TweetWrapper = (props: any) => {
  return (
    <div className="max-w-md">
      <Tweet {...props} />
    </div>
  )
}

const mdxComponents = () => {
  return {
    Tweet: (props: any) => <TweetWrapper {...props} />,
    Image,
  }
}

export default mdxComponents
