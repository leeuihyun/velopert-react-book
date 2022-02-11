import React from "react";
import { useState, useMemo, useRef } from "react";

function getAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}
function AverageTest3() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const onChange = (e) => {
    if (e.target.value === "0" || e.target.value === undefined) {
      setNumber(0);
    }
    setNumber(e.target.value);
  };
  const onClick = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="숫자를 입력해주세요."
        onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onClick}>입력</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>평균값 : {getAverage(list)}</p>
    </div>
  );
}

export default AverageTest3;
