import React from "react";
import { useState } from "react";

function getAverage(numbers) {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}
function Average1() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onClick = (e) => {
    const myList = list.concat(parseInt(number));
    setList(myList);
    setNumber("");
  };
  return (
    <div>
      <input type="text" placeholder="숫자를 등록하세요" onChange={onChange} />
      <button onClick={onClick}>button</button>
      <hr />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {idx} : {item}
          </li>
        ))}
      </ul>
      <p>평균값 : {getAverage(list)}</p>
    </div>
  );
}

export default Average1;
