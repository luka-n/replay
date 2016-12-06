import React from "react";
import {Link} from "react-router";
import withStyle from "../with-style";

const LinkWithStyle = withStyle(Link);

class NavLink extends React.Component {
  style() {
    return {
      color: "#999",
      cursor: "pointer",
      fontSize: "1.2rem",
      padding: "0rem 1rem",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    return (
      <LinkWithStyle {...this.props}>
        {this.props.children}
      </LinkWithStyle>
    );
  }
}

export default withStyle(NavLink);
