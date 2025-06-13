import { Box, Button, Checkbox, List } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { editMode, removeTodo } from '../../reduer/TodoSlice/TodoSlice';


export const TodoList = ({ editHandle }) => {
  // const {isEdit, setIsEdit} =useState(false)

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todo.todo.todo);
  const isEdit = useSelector((state) => state.todo.isEdit)

  // const editHandle =(id)=>{
  //   dispatch(editMode(!isEdit))
  // }

  const removeHandle = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <div>
      <List.Root>
        {
          todos.map(item => (
            <Box
              bg='tomato'
              w='100%'
              p={1}
              color='white'
              margin={2}
              key={item.id}
            >
              <List.Item
                key={item.id}
                display='flex'
                width='100%'
                justifyContent='space-between'
                alignItems='center'
                padding='4px'
              >
                {item.value}
                <Button
                  onClick={() => removeHandle(item.id)}
                  color='black'
                  colorScheme='gray'
                  border='none'
                  outline='none'
                  bg='transparent'
                  padding='0'
                >
                  <MdDelete />
                </Button>
                {/* <Button 
                onClick={()=> editHandle(item.id) }  
                color='white'
                colorScheme='blue'
               bg='blue'
              >
        <MdDelete />
      </Button> */}
              </List.Item>
            </Box>
          ))
        }
      </List.Root>

    </div>
  )
}
