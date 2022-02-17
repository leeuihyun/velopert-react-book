import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
}
function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </form>
    </div>
  );
}

export default Todos;
