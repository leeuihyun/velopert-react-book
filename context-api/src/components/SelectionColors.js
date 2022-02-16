import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "green", "blue", "black", "indigo"];

function SelectionColors() {
  return (
    <div>
      <h2>색상을 선택해주세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => actions.setColor(color)}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
}

export default SelectionColors;
