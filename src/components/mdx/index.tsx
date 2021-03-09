import * as React from 'react'
import {Tweet} from 'mdx-embed'

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
  }
}

export default mdxComponents
