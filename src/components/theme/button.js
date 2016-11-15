import React from "react";
import withStyle from "../with-style";

class Button extends React.Component {
  style = {
    background: "#272727",
    border: "0",
    color: "#eee",
    cursor: "pointer",
    padding: "0.8rem 1.6rem",
    ":hover": {
      background: "#333"
    }
  };

  render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default withStyle(Button);
