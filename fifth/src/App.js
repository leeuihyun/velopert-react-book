import React from "react";
import { useRef, useState, useCallback } from "react";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      setData({
        ...data,
        array: data.array.concat(info),
      });
      nextId.current += 1;
      setForm({
        name: "",
        username: "",
      });
    },
    [data, form.name, form.username]
  );
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((item) => item.id !== id),
      });
    },
    [data]
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="ID"
          onChange={onChange}
          value={form.username}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={onChange}
          value={form.name}
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {data.array.map((item) => (
          <li key={item.id} onClick={() => onRemove(item.id)}>
            {item.username} : {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
