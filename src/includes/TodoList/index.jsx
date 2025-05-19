import { Button, List } from '@chakra-ui/react'
import React from 'react'
import { MdDelete } from "react-icons/md";


export const TodoList = ({todos,setTodos}) => {
const removeTodo = (id) =>{
      setTodos(todos.filter(item => item.id !== id));

}

  return (
    <div>
       <List.Root>
        {
          todos.map(item =>(
            <>
            <List.Item display='flex' padding='20px'>
              {item.value}
              <Button onClick={()=> removeTodo(item.id) } colorPalette="teal" color='black' variant="solid">
        <MdDelete /> Remove
      </Button>
            </List.Item>

            </>
          ))
        }
       </List.Root>
    </div>
  )
}
