import { Routes, Route, Navigate } from 'react-router';
import { TodoFrom } from "./includes/TodoFrom";
import './App.css';
import { DynamicRoute } from "./includes/DynamicRoute/indev";
import { Details } from './includes/DynamicRoute/Details';
import { Note } from './includes/Note';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoFrom />} />
      <Route path="/dynamic" element={<DynamicRoute />} />
      <Route path="/dynamic/:title" element={<Details />} />
      <Route path="/note" element={<Note/>} />
      <Route path="/" element={<Note/>} />
    </Routes>
  );
}

export default App;
