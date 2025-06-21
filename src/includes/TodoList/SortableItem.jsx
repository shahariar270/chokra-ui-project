// ./SortableItem.jsx
import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Button, Text } from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";

export const SortableItem = ({ id, value, onRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      bg='tomato'
      w='100%'
      p={1}
      color='white'
      m={2}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p='4px'
      >
        <Box display='flex' alignItems='center'>
          <Button
            {...attributes}
            {...listeners}
            color='black'
            bg='transparent'
            border='none'
            p={0}
            cursor='grab'
          >
            ::
          </Button>
          <Text ml={2}>{value}</Text>
        </Box>
        <Button
          onClick={onRemove}
          color='black'
          bg='transparent'
          border='none'
          p={0}
        >
          <MdDelete />
        </Button>
      </Box>
    </Box>
  )
}
