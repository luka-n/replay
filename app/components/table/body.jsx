import React from "react";

export default class Body extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
}
