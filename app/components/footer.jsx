import React from "react";
import Radium from "radium";

class Footer extends React.Component {
  style() {
    return {
      background: "#000",
      height: "3.2rem",
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0"
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

export default Radium(Footer);
