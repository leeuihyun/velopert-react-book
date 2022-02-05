import React, { Component } from "react";
import PropTypes from "prop-types";
class MyComponent extends Component {
  render() {
    return (
      <div>
        나는 {this.props.name}입니다.
        <br /> children 값은 {this.props.children}입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
