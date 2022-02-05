import React, { Component } from "react";

export default class eventPractice extends Component {
  state = {
    data: "",
  };

  render() {
    let data;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          placeholder="write here"
          name="data"
          onChange={(e) => {
            this.setState({
              data: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.data);
          }}
        >
          확인
        </button>
      </div>
    );
  }
}
