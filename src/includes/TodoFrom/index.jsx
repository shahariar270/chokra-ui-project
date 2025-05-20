import React, { useState } from 'react'
import { Button, Center, Container, Field, Input } from "@chakra-ui/react"
import { TodoList } from '../TodoList'

export const TodoFrom = () => {
 const [todo, setTodo] = useState('')
 const [todos, setTodos]= useState([])

//  console.log(todos);
    const valueSubmit=(e)=>{
            e.preventDefault();

            if(todo.trim() !== ''){
              setTodos([ ...todos,
            { id: Date.now(), value: todo }]) 
            }

          setTodo('')
            
    }
  return (
      <>
      <Container display='flex'>
        <Center>
          <Field.Root>
            <Input
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}
              border='black'   
           />
           <Button
              onClick={valueSubmit}
              color='black'
              bg='teal'
           >Add Value</Button>
          </Field.Root>
        </Center>
      </Container>
      <TodoList
        todos={todos}
        setTodos={setTodos} 
      />
      </>

  )
} 
