import { List } from '@chakra-ui/react'
import React from 'react'
import { MdDelete } from "react-icons/md";


export const TodoList = ({todos}) => {
  return (
    <div>
       <List.Root>
        {
          todos.map(item =>(
            <>
            <List.Item display='flex' padding='20px' as='oi'>
              {item.value}
              <MdDelete/>
            </List.Item>

            </>
          ))
        }
       </List.Root>
    </div>
  )
}
