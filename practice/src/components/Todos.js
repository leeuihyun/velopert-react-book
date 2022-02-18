function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span
        style={{
          textDecoration: todo.done === true ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

function Todos({ onInsert, onChange, todos, input, onRemove, onToggle }) {
  const onSubmit_ = (e) => {
    e.preventDefault();
    onInsert(input);
    onChange("");
  };
  const onChange_ = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit_}>
        <input onChange={onChange_} value={input} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default Todos;
