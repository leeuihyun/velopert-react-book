import Todos from "../components/Todos";
import { insert, remove, toggle, onChange } from "../modules/todos";
import { connect } from "react-redux";

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
