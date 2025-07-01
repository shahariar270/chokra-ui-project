import { Field, FieldLabel, FieldRoot, Flex, Input } from '@chakra-ui/react'
import React from 'react'

export const Note = () => {
  return (
    <>
      <Flex>
        <FieldRoot>
          <FieldLabel>
            Enter Todo 
          </FieldLabel>
<Input placeholder='enter your note'/>
        </FieldRoot>
      </Flex>

    </>
  )
}
