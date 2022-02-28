import React from 'react';
import styled from 'styled-components';
const TodoTemplateBox = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 5px;
  overflow: hidden;
`;

const TodoTemplateTitle = styled.div`
  background: #22b8cf;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 4rem;
`;

function TodoTemplate({
  children,
  todos,
  input,
  onInsert,
  onChange,
  onToggle,
  onDelete,
}) {
  return (
    <TodoTemplateBox>
      <TodoTemplateTitle>Todo-App</TodoTemplateTitle>
      {children}
    </TodoTemplateBox>
  );
}

export default TodoTemplate;
