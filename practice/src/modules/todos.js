import { createAction, handleActions } from "redux-actions";
import produce from "immer";

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
      text: "Front-end 개발자가 되자",
      done: false,
    },
  ],
};
const todos = handleActions(
  {
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [ON_CHANGE]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
  },
  initialState
);

export default todos;
