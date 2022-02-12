import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function createBoom() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
function App() {
  const [todos, setTodos] = useState(createBoom);

  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId + 1
  }, []);
  const onRemove = useCallback((id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos((todos) => newTodos);
  }, []);
  const onToggle = useCallback((id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setTodos((todos) => newTodos);
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
