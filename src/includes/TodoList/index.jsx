import React from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';
import { Box, Button, List, ListItem } from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";

export const TodoList = ({ todos, setTodos }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = todos.findIndex(todo => todo.id === active.id);
      const newIndex = todos.findIndex(todo => todo.id === over.id);
      setTodos(arrayMove(todos, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos.map(todo => todo.id)} strategy={verticalListSortingStrategy}>
        <List.Root spacing={3}>
          {todos.map(item => (
            <SortableItem key={item.id} item={item} removeTodo={() => setTodos(todos.filter(todo => todo.id !== item.id))} />
          ))}
        </List.Root>
      </SortableContext>
    </DndContext>
  );
};

const SortableItem = ({ item, removeTodo }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <List.Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Box
        bg='tomato'
        w='100%'
        p={3}
        color='white'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        borderRadius='md'
        boxShadow='md'
      >
        {item.value}
        <Button
          onClick={removeTodo}
          colorScheme='gray'
          size='sm'
        >
          <MdDelete />
        </Button>
      </Box>
    </List.Item>
  );
};
