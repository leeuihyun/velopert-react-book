import React from "react";
import ColorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";

function ColorBox() {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "24px",
              height: "24px",
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
}

export default ColorBox;
