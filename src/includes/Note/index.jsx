import {
  Button,
  FieldLabel,
  FieldRoot,
  Flex,
  Input,
  ListItem,
  ListRoot
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Note = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const submitNote = () => {
    if (!note) return;

    const newNote = {
      id: Date.now(),
      data: note
    };

    setNotes([...notes, newNote]);
    setNote('');
  };

  const deleteHandler = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const editHandle = (item) => {
    setNote(item.data);
    setEditId(item.id);
  };

  const updateHandle = () => {
    setNotes(
      notes.map((item) =>
        item.id === editId ? { ...item, data: note } : item
      )
    );
    setEditId(null);
    setNote('');
  };

  return (
    <>
      <Flex>
        <FieldRoot>
          <FieldLabel>Enter Todo</FieldLabel>
          <Input
            placeholder='Enter your note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button onClick={editId ? updateHandle : submitNote}>
            {editId ? 'Update' : 'Add'}
          </Button>
        </FieldRoot>
      </Flex>

      <ListRoot>
        {notes.map((item) => (
          <ListItem key={item.id}>
            {item.data}
            <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
            <Button onClick={() => editHandle(item)}>Edit</Button>
          </ListItem>
        ))}
      </ListRoot>
    </>
  );
};
