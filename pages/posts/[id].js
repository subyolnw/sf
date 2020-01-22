import axios from 'axios'

import Post from '@components/Post'

function PostPage({ post }) {
  return <Post post={post}></Post>
}

PostPage.getInitialProps = async ({ query: { id } }) => {
  const { data: post } = await axios.get(`/posts/${id}`)

  return { post }
}

export default PostPage
