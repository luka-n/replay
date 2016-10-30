import React from "react";
import Base from "./base";

export default class Header extends Base {
  style() {
    return {
      background: "#000",
      boxSizing: "border-box",
      borderBottom: "thin solid #333",
      height: "3.2rem",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      paddingLeft: "14rem",
      fontSize: "1.6rem",
      display: "flex",
      alignItems: "center"
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
