import { useState, useEffect } from 'react'
import axios from 'axios'
import { List } from 'react-content-loader'

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const res = await axios.get(`/comments?postId=${postId}`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <>
      <div>Comments</div>
      {comments.length === 0 ? (
        <List></List>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      )}
    </>
  )
}
