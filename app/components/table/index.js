import React from "react";
import Base from "../base";

export default class Table extends Base {
  style() {
    return {
      borderCollapse: "collapse",
      width: "100%"
    };
  }

  render() {
    return (
      <table className={this.renderStyle()}>
        {this.props.children}
      </table>
    );
  }
}
