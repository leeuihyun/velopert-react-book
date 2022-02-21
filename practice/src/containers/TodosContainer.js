import Todos from "../components/Todos";
import { insert, remove, toggle, onChange } from "../modules/todos";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

/*
function TodosContainer({ input, remove, toggle, onChange, insert, todos }) {
  return (
    <Todos
      todos={todos}
      input={input}
      onRemove={remove}
      onChange={onChange}
      onInsert={insert}
      onToggle={toggle}
    ></Todos>
  );
}
export default connect(
  (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }),
  {
    insert,
    remove,
    toggle,
    onChange,
  }
)(TodosContainer);
*/

function TodosContainer() {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(onChange(input)),
    [dispatch]
  );
  const onInsert = useCallback((todo) => dispatch(insert(todo)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  return (
    <Todos
      todos={todos}
      input={input}
      onChange={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    ></Todos>
  );
}

export default TodosContainer;
