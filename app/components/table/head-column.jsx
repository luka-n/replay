import React from "react";
import Column from "./column";

export default class HeadColumn extends Column {
  render() {
    return (
      <th className={this.renderRule(this.style)}>
        {this.props.children}
      </th>
    );
  }
}
