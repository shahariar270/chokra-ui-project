import { Button, Text } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { useState } from 'react'

export const Emoji = () => {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)

  const emojiArray = [
    {
      data: '😒',
      value: 'low'
    },
    {
      data: '🙂',
      value: 'medium'
    },
    {
      data: '😊',
      value: 'high'
    },
  ]

  const emoji = emojiArray.find((item) => {
    return value === item.value
  })

  return (
    <>
      {
        emojiArray.map((item, index) => (
          <Button
            colorPalette='blue'
            onClick={() => {
              setValue(item.value)
              setCount(count + 1);
            }}
            key={index}
          >
            {item.data ?? 'Not Selected'}
          </Button>
        ))
      }
      <Text>{`you Selected = ${emoji?.data ?? 'icon'} ${emoji?.value ?? 'slug'}`}</Text>
      <Text>{`You are click ${count ?? 0} Time`}</Text>
      <Button
        onClick={()=>{
          setCount(0);
          setValue('N/A')
        }}
      >
        reset
      </Button>
    </>
  )
}
