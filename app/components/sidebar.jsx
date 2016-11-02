import React from "react";
import Radium from "radium";

class Sidebar extends React.Component {
  style() {
    return {
      background: "#000",
      width: "14rem",
      position: "fixed",
      left: "0",
      top: "3.2rem",
      bottom: "3.2rem"
    };
  }

  render() {
    return (
      <div style={this.style()}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Sidebar);
