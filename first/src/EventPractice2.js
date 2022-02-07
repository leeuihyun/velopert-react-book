import React, { Component } from "react";

export default class EventPractice2 extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 핸들링</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="message"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}
