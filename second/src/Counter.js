import React from "react";
import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{number}</b>입니다.
      </p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
