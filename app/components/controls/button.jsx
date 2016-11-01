import React from "react";
import Base from "../base";

export default class Button extends Base {
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
    const props = {
      ...this.props,
      className: `${this.props.className} ${this.renderStyle()}`
    };
    return (
      <button {...props}>
        {this.props.children}
      </button>
    );
  }
}
