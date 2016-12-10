import React from "react";
import {Link} from "react-router";
import withStyle from "../with-style";

const LinkWithStyle = withStyle(Link);

class NavLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  isActive() {
    return this.context.router.isActive(this.props.to, true);
  }

  style() {
    return {
      color: this.isActive() ? "#fff" : "#999",
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
