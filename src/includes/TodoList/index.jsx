import { Box, Button, Checkbox, List } from '@chakra-ui/react'
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
            <div>
              <Box bg='tomato' w='100%' p={1} color='white' margin={2}>
            <List.Item key={item.id} display='flex' width='100%' justifyContent='space-between'>
              {item.value}
              <Button 
                onClick={()=> removeTodo(item.id) }  
                color='black'
                colorScheme='gray'
                border='none'
                outline='none'
              >
        <MdDelete />
      </Button>
            </List.Item>
            </Box>

            </div>  
          ))
        }
       </List.Root>
    </div>
    
  )
}
