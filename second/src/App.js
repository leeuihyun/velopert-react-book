import "./App.css";
import Info from "./Info";
import React, { Component, useState } from "react";
function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  return (
    <div>
      <button onClick={onClick}>{visible ? "숨기기" : "보이기"}</button>
      <hr />
      {visible ? <Info /> : ""}
    </div>
  );
}

export default App;
