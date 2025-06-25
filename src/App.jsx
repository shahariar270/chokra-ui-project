import { Routes, Route, Navigate } from 'react-router';
import { TodoFrom } from "./includes/TodoFrom";
import './App.css';
import { DynamicRoute } from "./includes/DynamicRoute/indev";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoFrom />} />
      <Route path="/dynamic" element={<DynamicRoute />} />
    </Routes>
  );
}

export default App;
