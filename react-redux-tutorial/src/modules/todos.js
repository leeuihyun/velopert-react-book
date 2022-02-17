const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
let id = 3;
const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id + 1,
    text,
    done: false,
  },
});
const toggle = (id) => ({
  type: TOGGLE,
  id,
});
const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'first',
      done: true,
    },
    {
      id: 2,
      text: 'second',
      done: false,
    },
  ],
};
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
