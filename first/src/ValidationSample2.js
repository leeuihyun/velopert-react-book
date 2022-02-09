import { Component } from "react";

class ValidationSample2 extends Component {
  state = {
    password: "",
  };
  onChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onClick = (e) => {
    if (this.state.password === "0000") {
      alert("비밀번호 입력이 맞습니다");
    } else {
      alert("비밀번호 입력이 틀렸습니다.");
    }
    this.input.focus();
  };
  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onClick();
    }
  };
  render() {
    return (
      <div>
        <h1>Event first</h1>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <button onClick={this.onClick}>Button</button>
      </div>
    );
  }
}

export default ValidationSample2;
