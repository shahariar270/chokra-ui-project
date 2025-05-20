import React, { useState } from 'react'
import { Box, Button, Center, Container, Field, Flex, Input } from "@chakra-ui/react"
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
<Box>
 <Flex p={3} gap={3}>
       <Field.Root display='flex' width='500px' flexDirection='row' gap='16px'>
            <Input
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}
              border='black'
              width='350px'
              placeholder='Add Todo Value'
              borderColor='black'
              _placeholder={{ opacity: 1, color: 'gray.500' }}
           />
           <Button
              onClick={valueSubmit}
              color='white'
              bg='teal'
              size='md'
              outline='none'
           >Add Value</Button>
          </Field.Root>
        </Flex>

</Box>
     

      {/* <Container display='flex'>
        <Flex>
         
      </Container> */}
      <TodoList
        todos={todos}
        setTodos={setTodos} 
      />
      </>
  )
} 
