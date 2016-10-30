import React from "react";
import Base from "../base";

export default class Artist extends Base {
  style() {
    return {
      ":hover": {
        color: "#2a9fd6",
        textDecoration: "underline"
      }
    };
  }

  render() {
    const props = {
      ...this.props,
      className: `${this.props.className} ${this.renderRule(this.style)}`
    };
    return (
      <span {...props}>
        {this.props.name}
      </span>
    );
  }
}

Artist.propTypes = {
  name: React.PropTypes.string.isRequired
};
