import { Box, Button, Checkbox, List } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import {  useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../../reduer/TodoSlice/TodoSlice';


export const TodoList = () => {
  const {isCheckbox, setIsCheckbox} =useState(false)
  const dispatch= useDispatch()

  const todos = useSelector((state)=> state.todo.todo)

const removeHandle = (id) =>{
     dispatch(removeTodo(id));
}
console.log(todos);

  return (
    <div>
       <List.Root>
        {
          todos.map(item =>(
            <div>
              <Box bg='tomato' w='100%' p={1} color='white' margin={2}>
            <List.Item key={item.value} display='flex' width='100%' justifyContent='space-between'>
              {item.value}
              <Button 
                onClick={()=> removeHandle(item.id) }  
                color='black'
                colorScheme='gray'
                border='none'
                outline='none'
              >
        <MdDelete />
      </Button>
            </List.Item>
            </Box>

            </div>
             
          ))
        }
       </List.Root>
      
    </div>
  )
}
