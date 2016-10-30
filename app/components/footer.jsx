import React from "react";
import Base from "./base";

export default class Footer extends Base {
  style() {
    return {
      background: "#000",
      height: "3.2rem",
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0"
    }
  }

  render() {
    return (
      <div className={this.renderStyle()}>
        {this.props.children}
      </div>
    )
  }
}
