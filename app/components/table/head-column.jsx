import React from "react";
import Column from "./column";

export default class HeadColumn extends Column {
  render() {
    return (
      <th style={this.style()}>
        {this.props.children}
      </th>
    );
  }
}
