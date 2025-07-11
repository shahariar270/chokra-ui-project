import { Routes, Route, Link as RouterLink } from 'react-router';
import { TodoFrom } from "./includes/TodoFrom";
import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react';
import './App.css';
import { DynamicRoute } from "./includes/DynamicRoute/indev";
import { Details } from './includes/DynamicRoute/Details';
import { Note } from './includes/Note';
import { CallCard } from './includes/ProfileCard/CallCard';
import { Emoji } from './includes/Imoji';
import Pagination from './includes/Pagination/Pagination';

function App() {
  return (
    <>
      <Box px={6} py={3}>
        <Flex h={12} alignItems="center" justifyContent="space-between">
          <Text color="grey.500" fontWeight="bold">My App</Text>
          <HStack spacing={6}>
            <Button as={RouterLink} to="/" colorScheme="teal" variant="ghost">
              Todo
            </Button>
            <Button as={RouterLink} to="/dynamic" colorScheme="teal" variant="ghost">
              Dynamic
            </Button>
            <Button as={RouterLink} to="/note" colorScheme="teal" variant="ghost">
              Note
            </Button>
            <Button as={RouterLink} to="/emoji" colorScheme="teal" variant="ghost">
              Emoji
            </Button>
            <Button as={RouterLink} to="/pagination" colorScheme="teal" variant="ghost">
              Pagination
            </Button>
          </HStack>
        </Flex>
      </Box>

      <Routes>
        <Route path="/" element={<TodoFrom />} />
        <Route path="/dynamic" element={<DynamicRoute />} />
        <Route path="/dynamic/:title" element={<Details />} />
        <Route path="/note" element={<Note />} />
        <Route path="/profile_card" element={<CallCard />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>


    </>

  );
}

export default App;
