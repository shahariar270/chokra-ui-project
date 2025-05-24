import React, { useState } from 'react'
import { Box, Button, Flex, Input } from "@chakra-ui/react"
import { TodoList } from '../TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../../reduer/TodoSlice/TodoSlice'

export const TodoFrom = () => {
  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todo.isEdit);
  const editId = useSelector((state) => state.todo.editId); // if available

  const valueSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const editHandle = (e) => {
    e.preventDefault();
    if (editTodo.trim() !== '') {
      dispatch(updateTodo({ id: editId, value: editTodo }));
      setEditTodo('');
    }
  };

  return (
    <Box>
      <Flex p={3} gap={3}>
        <Flex width='500px' flexDirection='row' gap='16px'>
          <Input
            // value={isEdit ? editTodo : todo}
            onChange={(e) => isEdit ? setEditTodo(e.target.value) : setTodo(e.target.value)}
            border='1px'
            borderColor='black'
            width='350px'
            placeholder='Add Todo Value'
            _placeholder={{ opacity: 1, color: 'gray.500' }}
          />
          <Button
            onClick={(e) => isEdit ? editHandle(e) : valueSubmit(e)}
            color='white'
            bg='teal'
            size='md'
            outline='none'
          >
            {isEdit ? 'Update' : 'Add'}
          </Button>
        </Flex>
      </Flex>
      <TodoList />
    </Box>
  );
}
