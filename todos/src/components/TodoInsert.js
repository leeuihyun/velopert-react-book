import React from "react";
import { useState, useCallback } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" placeholder="Write todo" onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
