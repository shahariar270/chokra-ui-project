import React, { useState } from 'react'
import { Box, Button, Center, Container, Field, Flex, Input } from "@chakra-ui/react"
import { TodoList } from '../TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editMode, updateTodo } from '../../reduer/TodoSlice/TodoSlice'

export const TodoFrom = () => {
  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);
  const isEdit = useSelector((state) => state.todo.isEdit);
  const [editId, setEditId] = useState(null)

  const editHandle = (id) => {
    dispatch(editMode(!isEdit))
    setEditId(id)
  }
  const valueSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {

      if (isEdit) {
        dispatch(updateTodo(editId, editTodo))
        // setTodo(editTodo)
      } else {
        dispatch(addTodo(todo));
      }
      setTodo('');
    }
  };

  return (
    <>
      <Box>
        <Flex p={3} gap={3}>
          <Field.Root display='flex' width='500px' flexDirection='row' gap='16px'>
            <Input
              value={isEdit ? editTodo : todo}
              onChange={(e) => isEdit ? setEditTodo(e.target.value) : setTodo(e.target.value)}
              border='black'
              width='350px'
              placeholder='Add Todo Value'
              borderColor='black'
              _placeholder={{ opacity: 1, color: 'gray.500' }}
            />
            <Button
              onClick={(e) => valueSubmit(e)}
              color='white'
              bg='teal'
              size='md'
              outline='none'
            >Add Value</Button>
          </Field.Root>
        </Flex>
      </Box>
      <TodoList
        editHandle={editHandle}
      />
    </>
  )
}

