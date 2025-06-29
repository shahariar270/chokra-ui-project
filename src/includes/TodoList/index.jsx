import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../../reduer/TodoSlice/TodoSlice';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem'; 
import { useState } from 'react';

export const TodoList = () => {
  const dispatch = useDispatch();
  const todosFromStore = useSelector((state) => state.todo.todo);
  const [todos, setTodos] = useState(todosFromStore);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const removeHandle = (id) => {
    dispatch(removeTodo(id));
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = todos.findIndex(todo => todo.id === active.id);
      const newIndex = todos.findIndex(todo => todo.id === over.id);

      const newArray = arrayMove(todos, oldIndex, newIndex);
      setTodos(newArray);
    } 
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={todos}
        strategy={verticalListSortingStrategy}
      >
        {todos.map(item => (
          <SortableItem
            key={item.id}
            id={item.id}
            value={item.value}
            onRemove={() => removeHandle(item.id)}
          />
        ))}
      </SortableContext>
    </DndContext>
  )
}
