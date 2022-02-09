import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "겨울" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const length = names.length;
  const [next_id, setId] = useState(length + 1);
  const [next_text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = (e) => {
    const next = names.concat({
      id: next_id,
      text: next_text,
    });
    setId(next_id + 1);
    setNames(next);
    setText("");
  };

  const onRemove = (_id) => {
    console.log(_id);
    const next1 = names.filter((item) => item.id !== _id);

    setNames(next1);
  };
  const list = names.map((item) => (
    <li key={item.id} onClick={() => onRemove(item.id)}>
      {item.text}
    </li>
  ));
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={() => onClick}>button</button>
      <ul>{list}</ul>
    </div>
  );
};

export default IterationSample;
