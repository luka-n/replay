import React from "react";
import Base from "./base";
import NavLink from "./nav-link";

export default class Nav extends Base {
  style() {
    return {
      background: "#333",
      margin: "2rem"
    };
  }

  render() {
    return (
      <div className={this.renderStyle()}>
        <NavLink index to="/">Queue</NavLink>
        <NavLink to="/library">Library</NavLink>
      </div>
    );
  }
}
