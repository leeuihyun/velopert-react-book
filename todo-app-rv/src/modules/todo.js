import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todo/INSERT';
const DELETE = 'todo/DELETE';
const CHECK = 'todo/CHECK';
const ONCHANGE = 'todo/ONCHANGE';

let id = 1;
export const insertTodo = createAction(INSERT, (text) => ({
  id: id++,
  text,
  checked: false,
}));
export const onChangeTodo = createAction(ONCHANGE, (text) => text);
export const deleteTodo = createAction(DELETE, (id) => id);
export const checkTodo = createAction(CHECK, (id) => id);

const initialState = {
  input: '',
  todos: [],
};

const todo = handleActions(
  {
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [DELETE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [ONCHANGE]: (state, { payload: text }) => ({
      ...state,
      input: text,
    }),
    [CHECK]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    }),
  },
  initialState,
);

export default todo;
