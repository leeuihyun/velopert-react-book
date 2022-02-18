import { createAction, handleActions } from "redux-actions";

const INSERT = "modules/INSERT";
const REMOVE = "modules/REMOVE";
const TOGGLE = "modules/TOGGLE";
const ON_CHANGE = "modules/ON_CHANGE";

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  checked: false,
}));

export const remove = createAction(REMOVE, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);
export const onChange = createAction(ON_CHANGE, (input) => input);

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리액트를 다루는 기술 복습을 하자 redux!!",
      done: false,
    },
    {
      id: 2,
      text: "second",
      done: false,
    },
  ],
};
const todos = handleActions(
  {
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
    [ON_CHANGE]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    }),
  },
  initialState
);

export default todos;
