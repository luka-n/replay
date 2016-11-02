import React from "react";
import Radium from "radium";

class Button extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func
  };

  style() {
    return {
      background: "#000",
      border: "0",
      color: "#ddd",
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
      <button onClick={this.props.onClick} style={this.style()}>
        {this.props.children}
      </button>
    );
  }
}

export default Radium(Button);
