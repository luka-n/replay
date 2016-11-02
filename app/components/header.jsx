import React from "react";
import Radium from "radium";

class Header extends React.Component {
  style() {
    return {
      background: "#000",
      boxSizing: "border-box",
      borderBottom: "thin solid #333",
      height: "3.2rem",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      paddingLeft: "14rem",
      fontSize: "1.6rem",
      display: "flex",
      alignItems: "center"
    }
  }

  render() {
    return (
      <div style={this.style()}>
        {this.props.children}
      </div>
    )
  }
}

export default Radium(Header);
