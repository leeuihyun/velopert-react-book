import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { insert, changeInput, toggle, remove } from '../modules/todos';

function TodosContainer({ insert, changeInput, toggle, remove, todos, input }) {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    ></Todos>
  );
}
export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    insert,
    changeInput,
    toggle,
    remove,
  },
)(TodosContainer);
