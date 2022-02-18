import { handleActions, createAction } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

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

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input: input,
    }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
  },
  initialState,
);

export default todos;
