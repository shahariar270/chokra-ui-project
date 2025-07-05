import { Button, Field, FieldLabel, FieldRoot, Flex, Input, List, ListItem, ListRoot } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Note = () => {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  // console.log(note, notes);

  const submitNote = () => {
    const newNote = {
      id: Date.now(),
      data: note,
      isEdit: false
    };
    setNotes([...notes, newNote])
    setNote('')

  }
  const deleteHandler = (newId) => {
    setNotes((prevNotes) => prevNotes.filter(item => item.id !== newId))
  }


  return (
    <>
      <Flex>
        <FieldRoot>
          <FieldLabel>
            Enter Todo
          </FieldLabel>
          <Input
            placeholder='enter your note'
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            onClick={submitNote}
          >Submit Value</Button>
        </FieldRoot>
      </Flex>

      <ListRoot>
        {
          notes.map((item, key) => (
            <ListItem key={key}>
              {item.data}
              <Button onClick={(e) => deleteHandler(item.id)} >delete</Button>
            </ListItem>
          ))
        }
        <ListItem></ListItem>
      </ListRoot>

    </>
  )
}
