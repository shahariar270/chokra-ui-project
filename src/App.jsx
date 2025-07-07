import { Routes, Route, Link as RouterLink } from 'react-router';
import { TodoFrom } from "./includes/TodoFrom";
import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react';
import './App.css';
import { DynamicRoute } from "./includes/DynamicRoute/indev";
import { Details } from './includes/DynamicRoute/Details';
import { Note } from './includes/Note';
import { CallCard } from './includes/ProfileCard/CallCard';
import { DndKit } from './includes/dndKIt/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoFrom />} />
        <Route path="/dynamic" element={<DynamicRoute />} />
        <Route path="/dynamic/:title" element={<Details />} />
        <Route path="/note" element={<Note />} />
        <Route path="/profile_card" element={<CallCard />} />
        <Route path="/dnd_kit" element={<DndKit />} />
      </Routes>

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
          </HStack>
        </Flex>
      </Box>
    </>

  );
}

export default App;
