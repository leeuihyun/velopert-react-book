import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectionColors from "./components/SelectionColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectionColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
