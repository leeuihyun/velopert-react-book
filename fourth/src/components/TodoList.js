import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemove }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
