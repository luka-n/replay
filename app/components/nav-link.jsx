import React from "react";
import Base from  "./base";

import { Link, IndexLink } from "react-router";

const propTypes = {
  to: React.PropTypes.string.isRequired,
  index: React.PropTypes.bool
};

class NavLink extends Base {
  style() {
    return {
      display: "block",
      padding: "0.8rem 1.6rem",
      borderBottom: "thin solid #666",
      color: "#999",
      textDecoration: "none",
      ":hover": {
        background: "#444"
      },
      ":last-child": {
        borderBottom: "0"
      }
    };
  }

  render() {
    const props = {
      to: this.props.to,
      className: this.renderStyle()
    };
    return this.props.index ?
      <IndexLink {...props}>{this.props.children}</IndexLink> :
      <Link {...props}>{this.props.children}</Link>
  }
}

NavLink.propTypes = propTypes;

export default NavLink;
