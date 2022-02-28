import React from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  display: flex;
  background: #495057;

  input {
    width: 100%;
    background: none;
    font-size: 1.125rem;
    outline: none;
  }
`;
function TodoInsert({ onInsert, onChangeInput, input }) {
  //const dispatch = useDispatch();
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  return (
    <TodoForm>
      <input type="text" placeholder="Write your TODO" onChange={onChange} />
      <button onClick={onClick}>+</button>
    </TodoForm>
  );
}

export default TodoInsert;
