import MyComponent from "./MyComponent";
import react, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="이의현">React</MyComponent>
      </div>
    );
  }
}

export default App;
