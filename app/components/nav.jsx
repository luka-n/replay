import React from "react";
import Radium from "radium";
import NavLink from "./nav-link";

class Nav extends React.Component {
  style() {
    return {
      background: "#333",
      margin: "2rem"
    };
  }

  render() {
    return (
      <div style={this.style()}>
        <NavLink index to="/">Queue</NavLink>
        <NavLink last to="/library">Library</NavLink>
      </div>
    );
  }
}

export default Radium(Nav);
