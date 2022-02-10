import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "plus") {
    return { value: state.value + 1 };
  } else if (action.type === "minus") {
    return { value: state.value - 1 };
  } else {
    return state;
  }
}
function Counter2() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "plus" })}>+1</button>
      <button onClick={() => dispatch({ type: "minus" })}>-1</button>
    </div>
  );
}

export default Counter2;
