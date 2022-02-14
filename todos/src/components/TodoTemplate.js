import React from "react";
import { useState } from "react";
import "./TodoTemplate.scss";
function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Todos</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
