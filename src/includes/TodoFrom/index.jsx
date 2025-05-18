import React from 'react'
import { Button, Field, Input } from "@chakra-ui/react"

export const TodoFrom = () => {
    const submited=(e)=>{
            e.preventDefault();
            console.log(e);
    }
  return (
      <>
    <Field.Root invalid  className='container' onSubmit={submited}>
      <Field.Label>Todo Value</Field.Label>
      <Input placeholder="Enter You Todo Value"  />
      <Button color='black'  >Add todo</Button>
    </Field.Root>
      </>

  )
} 
