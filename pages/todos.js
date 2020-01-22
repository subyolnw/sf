import React from 'react'

import useFetch from '@lib/useFetch'

const URL = 'https://jsonplaceholder.typicode.com/todos'

function Todos() {
  const todos = useFetch(URL)

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default Todos
