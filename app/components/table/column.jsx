import React from "react";
import Base from "../base";

export default class Column extends Base {
  style() {
    return {
      padding: "0.8rem"
    };
  }

  render() {
    return (
      <td className={this.renderStyle()}>
        {this.props.children}
      </td>
    );
  }
}
