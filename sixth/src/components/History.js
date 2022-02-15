import React, { Component } from "react";

export default class History extends Component {
  handleGoback = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGoHome}>Home</button>
        <button onClick={this.handleGoBack}>Back</button>
      </div>
    );
  }
}
