import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import {
  insertTodo,
  onChangeTodo,
  deleteTodo,
  checkTodo,
} from '../modules/todo';
import { useCallback } from 'react';
import TodoList from '../components/TodoList';

function TodoContainer() {
  const input = useSelector((state) => state.todo.input);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const onInsert = useCallback(
    (text) => dispatch(insertTodo(text)),
    [dispatch],
  );
  const onDelete = useCallback((id) => dispatch(deleteTodo(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(checkTodo(id)), [dispatch]);
  const onChangeInput = useCallback(
    (input) => dispatch(onChangeTodo(input)),
    [dispatch],
  );
  return (
    <TodoTemplate
      todos={todos}
      input={input}
      onInsert={onInsert}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onDelete={onDelete}
    >
      <TodoInsert
        onInsert={onInsert}
        onChangeInput={onChangeInput}
        input={input}
      />
      <TodoList onDelete={onDelete} onToggle={onToggle} todos={todos} />
    </TodoTemplate>
  );
}

export default TodoContainer;
