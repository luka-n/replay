import React from "react";
import withStyle from "../with-style";

class Button extends React.Component {
  static propTypes = {
    inactive: React.PropTypes.bool,
    onClick: React.PropTypes.func
  };

  style() {
    return {
      background: "#000",
      border: "0",
      color: this.props.inactive ? "#555" : "#ddd",
      cursor: "pointer",
      width: "2.8rem",
      height: "2.8rem",
      lineHeight: "2.8rem",
      fontSize: "1.4rem",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default withStyle(Button);
