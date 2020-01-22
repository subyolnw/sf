import { useRouter } from 'next/router'
import Head from 'next/head'

import CommentList from './CommentList'

export default function Post({ post }) {
  const {
    query: { id }
  } = useRouter()

  return (
    <>
      <Head>
        <title>Post #{id}</title>
      </Head>
      <dl>
        <dt>Title</dt>
        <dd>{post.title}</dd>
        <dt>Body</dt>
        <dd>{post.body}</dd>
      </dl>
      <CommentList postId={id}></CommentList>
    </>
  )
}
