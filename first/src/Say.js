import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("기본상태", "");
  const onClickEnter = () => setMessage("입장!");
  const onClickLeave = () => setMessage("퇴장!");

  const [color, setColor] = useState("black");
  const redColor = () => setColor("red");
  const yellowColor = () => setColor("yellow");
  const blueColor = () => setColor("blue");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={redColor}>
        Red
      </button>
      <button style={{ color: "yellow" }} onClick={yellowColor}>
        Yellow
      </button>
      <button style={{ color: "blue" }} onClick={blueColor}>
        Blue
      </button>
    </div>
  );
};

export default Say;
