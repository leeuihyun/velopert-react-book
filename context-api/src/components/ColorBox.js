import React from "react";
import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";
import { useContext } from "react";

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      ></div>
      <div
        style={{
          width: "24px",
          height: "24px",
          background: state.subcolor,
        }}
      ></div>
    </>
  );
}

export default ColorBox;
