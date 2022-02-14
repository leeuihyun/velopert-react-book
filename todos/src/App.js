import React from "react";
import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "funny react",
      checked: false,
    },
    {
      id: 2,
      text: "What is this ?",
      checked: true,
    },
  ]);
  const nextId = useRef(3);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);
  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => id !== todo.id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
}

export default App;
