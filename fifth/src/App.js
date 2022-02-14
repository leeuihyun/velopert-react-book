import React from "react";
import { useRef, useState, useCallback } from "react";
import produce from "immer";

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
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
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
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );
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
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
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
