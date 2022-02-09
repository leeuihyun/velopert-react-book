import React, { Component } from "react";

export default class eventPractice extends Component {
  state = {
    data: "",
  };
  onChangeMethod = (event) => {
    this.setState({
      data: event.target.value,
    });
  };
  clickButton = () => {
    alert(this.state.data);
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          placeholder="Write please"
          onChange={this.onChangeMethod}
        />
        <button onClick={this.clickButton}>Button</button>
      </div>
    );
  }
}
