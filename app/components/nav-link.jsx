import React from "react";
import Radium from "radium";

import { Link, IndexLink } from "react-router";

class NavLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string.isRequired,
    index: React.PropTypes.bool,
    last: React.PropTypes.bool
  };

  style() {
    return {
      display: "block",
      padding: "0.8rem 1.6rem",
      borderBottom: !this.props.last ? "thin solid #666" : "0",
      color: "#999",
      textDecoration: "none",
      ":hover": {
        background: "#444"
      }
    };
  }

  render() {
    const props = {
      to: this.props.to,
      style: this.style()
    };
    return this.props.index ?
      <IndexLink {...props}>{this.props.children}</IndexLink> :
      <Link {...props}>{this.props.children}</Link>
  }
}

export default Radium(NavLink);
