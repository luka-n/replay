import React from "react";
import Column from "./column";

export default class HeadColumn extends Column {
  render() {
    return (
      <th className={this.renderStyle()}>
        {this.props.children}
      </th>
    );
  }
}
