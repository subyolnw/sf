import React from 'react'

import useFetch from '@lib/useFetch'

const URL = 'https://jsonplaceholder.typicode.com/users'

function Users() {
  const users = useFetch(URL)

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default Users
