import React from "react";
import { useState, useMemo } from "react";
function getAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

function AverageTest() {
  const [arr, setArr] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onClick = (e) => {
    const nextArr = arr.concat(parseInt(number));
    setArr(nextArr);
    setNumber("");
  };
  const list = arr.map((item, idx) => <li key={idx}>{item}</li>);
  const avg = useMemo(() => getAverage(arr), [arr]);
  return (
    <div>
      <input type="text" placeholder="숫자를 입력하세요" onChange={onChange} />
      <button onClick={onClick}>입력</button>
      <ul>{list}</ul>
      <p>평균값 : {avg}</p>
    </div>
  );
}

export default AverageTest;
