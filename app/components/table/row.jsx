import React from "react";
import Base from "../base";

export default class Row extends Base {
  style() {
    return {
      ":nth-child(even)": {
        background: "#0f0f0f"
      },
      ":hover": {
        background: "#1a1a1a"
      },
      borderBottom: "1px solid #222",
      ":last-child": {
        borderBottom: "0"
      }
    };
  }

  render() {
    const props = {
      ...this.props,
      className: `${this.props.className} ${this.renderRule(this.style)}`
    };
    return (
      <tr {...props}>
        {this.props.children}
      </tr>
    );
  }
}
