import React from "react";
import { useState } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="TodoList">
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          todo={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
