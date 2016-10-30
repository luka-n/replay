import React from "react";
import Base from "../base";

export default class Head extends Base {
  style() {
    return {
      background: "#111",
      borderBottom: "2px solid #333",
      color: "#fff",
      textAlign: "left"
    };
  }

  render() {
    return (
      <thead className={this.renderStyle()}>
        {this.props.children}
      </thead>
    );
  }
}
