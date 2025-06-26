import React from 'react'
import { useEffect } from 'react'
import './styles.css'
import { Button, Card, Text } from '@chakra-ui/react';


export const DynamicRoute = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setData(data.posts));
  }, [])

  return (
    <div className="dynamic-route">

      {
        data.map((item) => (
          <div key={item.id} className="card">
            <Card.Root>
              <Card.Header>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.body}</Card.Description>
              </Card.Header>
              <Button
                color='white'
                background='black'
                _hover={{ background: 'gray.700' }}
              >Learn more</Button>
            </Card.Root>
          </div>
        ))
      }
    </div>
  )
}
