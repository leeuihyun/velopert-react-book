import React from "react";

function Counter() {
  return (
    <div>
      <h1>0</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;
