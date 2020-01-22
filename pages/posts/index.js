import React from 'react'

import PostList from '@components/PostList'
import withFetchSSR from '@lib/withFetchSSR'

function PostsPage({ data: posts }) {
  return <PostList posts={posts}></PostList>
}

export default withFetchSSR('/posts')(PostsPage)
