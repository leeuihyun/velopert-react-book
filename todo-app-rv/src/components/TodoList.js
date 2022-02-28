import React from 'react';

function TodoListItem({ onToggle, onDelete, todo }) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.checked}
        readOnly={true}
      />
      <span
        style={{
          textDecoration: todo.checked === true ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
}

function TodoList({ onToggle, onDelete, todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
          todo={todo}
        ></TodoListItem>
      ))}
    </div>
  );
}

export default TodoList;
