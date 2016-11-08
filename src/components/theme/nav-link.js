import React from "react";
import { Link } from "react-router";
import withStyle from "../with-style";

const LinkWithStyle = withStyle(Link);

class NavLink extends React.Component {
  static propTypes = {
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
    const props = {...this.props};
    delete props.last;
    return (
      <LinkWithStyle {...props}>
        {this.props.children}
      </LinkWithStyle>
    );
  }
}

export default withStyle(NavLink);
