import { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };
  render() {
    return (
      <div>
        <h1>Event</h1>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSample;
