import React, { useState } from 'react'
import { Button, Field, Input } from "@chakra-ui/react"

export const TodoFrom = () => {
 const [todo, setTodo] = useState('')
 const [todos, setTodos]= useState([])

 console.log(todos);
    const valueSubmit=(e)=>{
            e.preventDefault();
          setTodos([ ...todos,
        { id: Date.now(), value: todo }])
          setTodo('')
            
    }
  return (
      <>
    <Field.Root invalid  className='container'>
      <Field.Label>Todo Value</Field.Label>
      <Input placeholder="Enter You Todo Value" onChange={(e)=> setTodo(e.target.value)} />
      <Button color='black' onClick={valueSubmit}  >Add todo</Button>
    </Field.Root>
      </>

  )
} 
