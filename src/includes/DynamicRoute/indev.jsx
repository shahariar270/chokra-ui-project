import React from 'react'
import { useEffect } from 'react'

export const DynamicRoute = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=> setData(data.posts));
  }, [])

  return (
    <div>
      <h1>Dynamic Route</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
