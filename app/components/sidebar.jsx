import React from "react";
import Base from "./base";

export default class Sidebar extends Base {
  style() {
    return {
      background: "#000",
      width: "14rem",
      position: "fixed",
      left: "0",
      top: "3.2rem",
      bottom: "3.2rem"
    };
  }

  render() {
    return (
      <div className={this.renderStyle()}>
        {this.props.children}
      </div>
    );
  }
}
