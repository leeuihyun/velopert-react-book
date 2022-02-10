import react, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };
  onClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>색 변경</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    );
  }
}

export default App;
