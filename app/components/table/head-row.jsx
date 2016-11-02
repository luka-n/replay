import React from "react";

export default class HeadRow extends React.Component {
  render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
}
